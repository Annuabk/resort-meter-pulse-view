
import React, { useState } from 'react';
import { HeaderFilters } from '@/components/HeaderFilters';
import { DateRangeOption } from '@/types/dashboard';
import { useTheme } from '@/context/ThemeContext';
import { MeterConsumptionCard } from '@/components/MeterConsumptionCard';
import { meterCategories } from '@/data/meterData';
import { meterInstruments } from '@/data/meterData';
import { getMeterReadingsData } from '@/utils/meterDataUtils';

const UtilityDashboard = () => {
  const { theme, toggleTheme } = useTheme();
  const [dateRange, setDateRange] = useState<DateRangeOption>('This Month');
  const [property, setProperty] = useState('All');

  // Group meters by category
  const metersByCategory = meterCategories.map(category => {
    const meters = meterInstruments.filter(meter => meter.category === category.id);
    return {
      category: category,
      meters: meters
    };
  }).filter(group => group.meters.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="container px-4 py-8 mx-auto max-w-screen-xl">
        <HeaderFilters
          dateRange={dateRange}
          setDateRange={setDateRange}
          property={property}
          setProperty={setProperty}
          properties={['All', 'SV', 'CL', 'BB', 'MB']}
          toggleTheme={toggleTheme}
          isDarkMode={theme === 'dark'}
        />

        <div className="my-6">
          <h1 className="text-3xl font-bold">Utility Consumption Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor and analyze consumption trends across all meters</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {metersByCategory.map(group => (
            group.meters.map(meter => (
              <MeterConsumptionCard 
                key={meter.id}
                meter={meter}
                dateRange={dateRange}
                readingsData={getMeterReadingsData(meter.id, dateRange)}
              />
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

export default UtilityDashboard;
