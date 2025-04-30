
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { MeterCard } from '@/components/MeterCard';
import { useTheme } from '@/context/ThemeContext';
import { meterCategories, meterInstruments } from '@/data/meterData';

const MeterInstruments = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'boiler');
  const [selectedLocation, setSelectedLocation] = useState<string>("Spice Village - CGH Earth");
  const { theme } = useTheme();

  const filteredInstruments = meterInstruments.filter(
    instrument => instrument.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const locations = [
    "Spice Village - CGH Earth",
    "Coconut Lagoon - CGH Earth",
    "Brunton Boatyard - CGH Earth",
    "Marari Beach - CGH Earth"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="container px-4 py-8 mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold mb-4 md:mb-0">Meter Instruments</h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="relative w-full md:w-auto">
              <select
                className="block w-full md:w-64 rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto">
              Meter Configurations
            </Button>
          </div>
        </div>

        <Tabs 
          defaultValue={selectedCategory} 
          value={selectedCategory}
          onValueChange={handleCategoryChange} 
          className="w-full mb-8"
        >
          <TabsList className="w-full mb-6 overflow-x-auto flex whitespace-nowrap p-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            {meterCategories.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="flex-1 min-w-[100px] data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInstruments.map((instrument) => (
            <MeterCard 
              key={instrument.id} 
              instrument={instrument}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeterInstruments;
