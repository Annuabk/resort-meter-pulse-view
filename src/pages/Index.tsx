
import React, { useState } from 'react';
import { HeaderFilters } from '@/components/HeaderFilters';
import { PropertyCard } from '@/components/PropertyCard';
import { useTheme } from '@/context/ThemeContext';
import { DateRangeOption, PropertyOption } from '@/types/dashboard';
import { mockProperties, propertyOptions } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Settings } from 'lucide-react';

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [dateRange, setDateRange] = useState<DateRangeOption>('This Month');
  const [selectedProperty, setSelectedProperty] = useState<PropertyOption>('All');
  const navigate = useNavigate();

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
          
          <Button 
            onClick={() => navigate('/meters')}
            variant="outline"
            className="hidden md:flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            Meter Configurations
          </Button>
        </div>
        
        <div className="space-y-8 mt-8">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {/* Mobile Configuration Button */}
        <div className="fixed bottom-6 right-6 md:hidden">
          <Button 
            onClick={() => navigate('/meters')}
            className="rounded-full h-14 w-14 p-0 shadow-lg flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
