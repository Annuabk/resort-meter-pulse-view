
import React from 'react';
import { Thermometer, Droplet, Fuel, Power, Gauge, Zap, Sun, Battery } from 'lucide-react';
import { MeterInstrument } from '@/types/dashboard';
import { useNavigate } from 'react-router-dom';

interface MeterCardProps {
  instrument: MeterInstrument;
}

export const MeterCard: React.FC<MeterCardProps> = ({ instrument }) => {
  const navigate = useNavigate();
  
  // Function to determine which icon to display based on category
  const getIcon = () => {
    switch (instrument.category.toLowerCase()) {
      case 'power':
        return <Power className="h-6 w-6 text-meter-power" />;
      case 'water':
        return <Droplet className="h-6 w-6 text-meter-water" />;
      case 'diesel':
        return <Fuel className="h-6 w-6 text-meter-diesel" />;
      case 'gas':
        return <Fuel className="h-6 w-6 text-meter-gas" />;
      case 'generator':
        return <Battery className="h-6 w-6 text-meter-generator" />;
      case 'boiler':
        return <Thermometer className="h-6 w-6 text-meter-boiler" />;
      case 'solar':
        return <Sun className="h-6 w-6 text-yellow-500" />;
      default:
        return <Gauge className="h-6 w-6 text-gray-500" />;
    }
  };
  
  const handleClick = () => {
    navigate(`/meters/${instrument.category.toLowerCase()}/${instrument.id}`);
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 border border-gray-100 dark:border-gray-700 cursor-pointer hover:scale-[1.02] transition-transform"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {getIcon()}
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">{instrument.name}</h3>
            <p className="text-lg font-semibold">
              {instrument.value} {instrument.unit}
            </p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-xs font-medium self-start">
          {instrument.location}
        </div>
      </div>
    </div>
  );
};
