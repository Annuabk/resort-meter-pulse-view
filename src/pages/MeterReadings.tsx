
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockMeterReadings } from '@/data/meterReadings';
import { MeterReading } from '@/types/dashboard';
import { AddReadingModal } from '@/components/AddReadingModal';
import { AddFuelTopupModal } from '@/components/AddFuelTopupModal';
import { MeterBreadcrumb } from '@/components/MeterBreadcrumb';
import { MeterReadingsActions } from '@/components/MeterReadingsActions';
import { MeterReadingsTable } from '@/components/MeterReadingsTable';
import { MeterSummaryCards } from '@/components/MeterSummaryCards';
import { MeterNotFound } from '@/components/MeterNotFound';

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
    return <MeterNotFound onBackClick={handleBackClick} />;
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
        <MeterBreadcrumb category={category} meterName={meterInfo.name} />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">
              Meter Readings - {category?.charAt(0).toUpperCase() + category?.slice(1)} - {meterInfo.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {getLocationName(meterInfo.location)}
            </p>
          </div>
          
          <MeterReadingsActions 
            dateFilter={dateFilter}
            setDateFilter={setDateFilter}
            isSpecialMeter={isSpecialMeter}
            onAddReadingClick={() => setAddModalOpen(true)}
            onTopupClick={() => setTopupModalOpen(true)}
          />
        </div>

        {/* Summary Cards */}
        <MeterSummaryCards 
          category={category}
          currentReading={currentReading}
          meterUnit={meterInfo.unit}
          isSpecialMeter={isSpecialMeter}
          kwhGenerated={kwhGenerated}
          runningHours={runningHours}
          onTopUpClick={() => setTopupModalOpen(true)}
        />
        
        {/* Readings table */}
        <MeterReadingsTable 
          readings={displayReadings}
          isSpecialMeter={isSpecialMeter}
          hasReadings={meterInfo.readings.length > 0}
          meterUnit={meterInfo.unit}
        />
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
