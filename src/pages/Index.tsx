
import React, { useState } from 'react';
import { HeaderFilters } from '@/components/HeaderFilters';
import { PropertyCard } from '@/components/PropertyCard';
import { useTheme } from '@/context/ThemeContext';
import { DateRangeOption, PropertyOption } from '@/types/dashboard';
import { mockProperties, propertyOptions } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [dateRange, setDateRange] = useState<DateRangeOption>('This Month');
  const [selectedProperty, setSelectedProperty] = useState<PropertyOption>('All');

  // Filter properties based on selection
  const filteredProperties = selectedProperty === 'All' 
    ? mockProperties 
    : mockProperties.filter(p => p.name === selectedProperty);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="container px-4 py-8 mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center mb-6">
          <HeaderFilters 
            dateRange={dateRange}
            setDateRange={setDateRange}
            property={selectedProperty}
            setProperty={setSelectedProperty}
            properties={propertyOptions}
            toggleTheme={toggleTheme}
            isDarkMode={theme === 'dark'}
          />
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Properties Overview</h1>
          <Link to="/dashboard">
            <Button className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Utility Dashboard
            </Button>
          </Link>
        </div>
        
        <div className="space-y-8 mt-8">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
