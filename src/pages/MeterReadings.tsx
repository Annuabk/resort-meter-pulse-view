
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
import { ChevronLeft } from 'lucide-react';
import { mockMeterReadings } from '@/data/meterReadings';
import { MeterReading } from '@/types/dashboard';
import { AddReadingModal } from '@/components/AddReadingModal';
import { formatDistanceToNow } from 'date-fns';

const MeterReadings = () => {
  const { category, meterId } = useParams();
  const navigate = useNavigate();
  const [dateFilter, setDateFilter] = useState('This Month');
  const [addModalOpen, setAddModalOpen] = useState(false);

  // Get meter information based on meterId from URL
  // In a real app, this would come from an API call or context
  const meterInfo = mockMeterReadings.meters.find(meter => meter.id === meterId);

  // Go back to meters page
  const handleBackClick = () => {
    navigate(`/meters/${category?.toLowerCase()}`);
  };
  
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

  const displayReadings = filterReadings(meterInfo.readings);

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
            
            <Button 
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setAddModalOpen(true)}
            >
              + Add New Reading
            </Button>
          </div>
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
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayReadings.length > 0 ? (
                displayReadings.map((reading, index) => (
                  <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
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
                    <TableCell className="max-w-xs truncate">{reading.remarks || '-'}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6">
                    No readings found for this filter
                  </TableCell>
                </TableRow>
              )}
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
    </div>
  );
};

export default MeterReadings;
