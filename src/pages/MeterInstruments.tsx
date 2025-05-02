
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { MeterCard } from '@/components/MeterCard';
import { useTheme } from '@/context/ThemeContext';
import { meterCategories, meterInstruments } from '@/data/meterData';
import { MeterConfigFlow } from '@/components/MeterConfigFlow';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb';

const MeterInstruments = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const locationFromUrl = searchParams.get('location');
  
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'boiler');
  const [selectedLocation, setSelectedLocation] = useState<string>("Spice Village - CGH Earth");
  const [configModalOpen, setConfigModalOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  // Effect to set location from URL param
  useEffect(() => {
    if (locationFromUrl) {
      switch(locationFromUrl) {
        case 'SV':
          setSelectedLocation("Spice Village - CGH Earth");
          break;
        case 'CL':
          setSelectedLocation("Coconut Lagoon - CGH Earth");
          break;
        case 'BB':
          setSelectedLocation("Brunton Boatyard - CGH Earth");
          break;
        case 'MB':
          setSelectedLocation("Marari Beach - CGH Earth");
          break;
        default:
          break;
      }
    }
  }, [locationFromUrl]);

  // Extract location code from the selected location string
  const getLocationCode = (location: string): string => {
    if (location.includes('Spice Village')) return 'SV';
    if (location.includes('Coconut Lagoon')) return 'CL';
    if (location.includes('Brunton Boatyard')) return 'BB';
    if (location.includes('Marari Beach')) return 'MB';
    return '';
  };

  const locationCode = getLocationCode(selectedLocation);

  // Filter instruments by both category and location
  const filteredInstruments = meterInstruments.filter(
    instrument => 
      instrument.category.toLowerCase() === selectedCategory.toLowerCase() &&
      (locationCode === '' || instrument.location === locationCode)
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
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Meter Instruments</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
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
            
            <Button 
              variant="default" 
              className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto"
              onClick={() => setConfigModalOpen(true)}
            >
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

        {filteredInstruments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredInstruments.map((instrument) => (
              <MeterCard 
                key={instrument.id} 
                instrument={instrument}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">No meter instruments found for this location and category.</p>
          </div>
        )}
      </div>
      
      {/* Meter Configuration Modal Flow */}
      <MeterConfigFlow 
        isOpen={configModalOpen}
        onOpenChange={setConfigModalOpen}
      />
    </div>
  );
};

export default MeterInstruments;
