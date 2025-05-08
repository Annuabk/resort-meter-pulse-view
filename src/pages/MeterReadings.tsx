
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb';
import { 
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { ChevronLeft, Fuel } from 'lucide-react';
import { mockMeterReadings } from '@/data/meterReadings';
import { MeterReading } from '@/types/dashboard';
import { AddReadingModal } from '@/components/AddReadingModal';
import { formatDistanceToNow } from 'date-fns';
import { AddFuelTopupModal } from '@/components/AddFuelTopupModal';
import { cn } from '@/lib/utils';
import { MeterSummaryCard } from '@/components/MeterSummaryCard';

const MeterReadings = () => {
  const { category, meterId } = useParams();
  const navigate = useNavigate();
  const [dateFilter, setDateFilter] = useState('This Month');
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [topupModalOpen, setTopupModalOpen] = useState(false);

  // Get meter information based on meterId from URL
  // In a real app, this would come from an API call or context
  const meterInfo = mockMeterReadings.meters.find(meter => meter.id === meterId);

  // Go back to meters page
  const handleBackClick = () => {
    navigate(`/meters/${category?.toLowerCase()}`);
  };
  
  // Check if meter is diesel or generator type (for special buttons)
  const isSpecialMeter = category === 'diesel' || category === 'generator';
  
  if (!meterInfo) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-10">
          <h2 className="text-xl font-medium">Meter not found</h2>
          <Button onClick={handleBackClick} className="mt-4">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to meters
          </Button>
        </div>
      </div>
    );
  }

  // Get location name from code
  const getLocationName = (code: string): string => {
    switch(code) {
      case 'SV': return 'Spice Village - CGH Earth';
      case 'CL': return 'Coconut Lagoon - CGH Earth';
      case 'BB': return 'Brunton Boatyard - CGH Earth';
      case 'MB': return 'Marari Beach - CGH Earth';
      default: return code;
    }
  };

  // Filter readings by date filter
  const filterReadings = (readings: MeterReading[]): MeterReading[] => {
    // In a real app, implement actual date filtering logic
    // For now, just return all readings
    return readings;
  };

  // Get readings or use a placeholder if empty
  const displayReadings = meterInfo.readings.length > 0 
    ? filterReadings(meterInfo.readings)
    : [
        {
          datetime: new Date(2025, 0, 1),
          value: 0,
          unit: meterInfo.unit,
          createdBy: 'System',
          remarks: null
        }
      ];

  // Mock data for summary cards - in a real app, this would be calculated from readings
  const currentReading = displayReadings[0].value;
  const kwhGenerated = category === 'generator' ? 1200 : null;
  const runningHours = category === 'generator' ? 120 : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="container px-4 py-8 mx-auto max-w-screen-xl">
        
        {/* Breadcrumb navigation */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/meters/${category}`}>
                {category?.charAt(0).toUpperCase() + category?.slice(1)} Meters
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{meterInfo.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">
              Meter Readings - {category?.charAt(0).toUpperCase() + category?.slice(1)} - {meterInfo.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {getLocationName(meterInfo.location)}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
            <Select value={dateFilter} onValueChange={(value) => setDateFilter(value)}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="This Month">This Month</SelectItem>
                <SelectItem value="Last Month">Last Month</SelectItem>
                <SelectItem value="Custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            
            {isSpecialMeter ? (
              <>
                <Button 
                  variant="outline"
                  onClick={() => setTopupModalOpen(true)}
                  className="bg-amber-500 hover:bg-amber-600 text-white border-amber-500"
                >
                  <Plus className="mr-1 h-4 w-4" /> Add Top-up Fuel
                </Button>
                <Button 
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setAddModalOpen(true)}
                >
                  <Plus className="mr-1 h-4 w-4" /> Add New Reading
                </Button>
              </>
            ) : (
              <Button 
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => setAddModalOpen(true)}
              >
                <Plus className="mr-1 h-4 w-4" /> Add New Reading
              </Button>
            )}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <MeterSummaryCard 
            title="Current Reading" 
            value={currentReading}
            unit={meterInfo.unit}
            showTopUpButton={isSpecialMeter}
            onTopUpClick={() => setTopupModalOpen(true)}
          />
          
          {category === 'generator' && (
            <MeterSummaryCard 
              title="KWH Generated" 
              value={kwhGenerated || 0}
              unit="KWH"
            />
          )}

          {category === 'generator' && (
            <MeterSummaryCard 
              title="Running Hours" 
              value={runningHours || 0}
              unit="Hrs"
            />
          )}
        </div>
        
        {/* Readings table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date & Time</TableHead>
                <TableHead>Reading Value</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Created by</TableHead>
                <TableHead>Remarks / Top-up</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayReadings.map((reading, index) => (
                <TableRow 
                  key={index} 
                  className={cn(
                    "hover:bg-gray-50 dark:hover:bg-gray-700",
                    meterInfo.readings.length === 0 && "opacity-50 italic"
                  )}
                >
                  <TableCell>
                    {reading.datetime.toLocaleString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDistanceToNow(reading.datetime, { addSuffix: true })}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{reading.value}</TableCell>
                  <TableCell>{reading.unit}</TableCell>
                  <TableCell>{reading.createdBy}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span>{reading.remarks || '-'}</span>
                      {/* Show fuel icon if this was a top-up entry (mock data for now) */}
                      {index === 1 && isSpecialMeter && (
                        <div className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Fuel className="h-3 w-3 mr-1" />
                          <span>50 Ltr</span>
                        </div>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Add Reading Modal */}
      <AddReadingModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        category={category || ''}
        meterName={meterInfo.name}
        defaultUnit={meterInfo.unit}
      />

      {/* Add Top-up Modal (only for diesel and generator) */}
      {isSpecialMeter && (
        <AddFuelTopupModal
          isOpen={topupModalOpen}
          onClose={() => setTopupModalOpen(false)}
          meterName={meterInfo.name}
          meterCategory={category || ''}
        />
      )}
    </div>
  );
};

export default MeterReadings;
