
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropertyData } from '@/types/dashboard';
import { MeterReadingCard } from './MeterReadingCard';
import { GeneratorCard } from './GeneratorCard';

interface PropertyCardProps {
  property: PropertyData;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigate = useNavigate();
  
  const getLocationCode = (location: string): string => {
    if (location.includes('Spice Village')) return 'SV';
    if (location.includes('Coconut Lagoon')) return 'CL';
    if (location.includes('Brunton Boatyard')) return 'BB';
    if (location.includes('Marari Beach')) return 'MB';
    return '';
  };
  
  const handleMeterCardClick = (meterType: string) => {
    const locationCode = getLocationCode(property.location);
    navigate(`/meters/${meterType.toLowerCase()}?location=${locationCode}`);
  };
  
  return (
    <section className="mb-8 animate-fade-in">
      <h2 className="text-lg font-medium mb-3 flex items-center">
        <span className="text-blue-500 mr-2">•</span>
        {property.name} - {property.location}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {property.boiler && (
          <div 
            className="flex gap-2 hover:scale-[1.02] transition-transform cursor-pointer"
            onClick={() => handleMeterCardClick('boiler')}
          >
            <MeterReadingCard 
              title="BOILER" 
              reading={property.boiler.weight} 
              colorClass="text-meter-boiler"
              className="flex-1"
            />
            <MeterReadingCard 
              title="HRS" 
              reading={property.boiler.time} 
              colorClass="text-meter-boiler"
              className="w-20"
            />
          </div>
        )}
        
        {property.gas && (
          <MeterReadingCard 
            title="GAS" 
            reading={property.gas} 
            colorClass="text-meter-gas"
            className="hover:scale-[1.02] transition-transform cursor-pointer"
            onClick={() => handleMeterCardClick('gas')}
          />
        )}
        
        {property.diesel && (
          <div 
            className="flex gap-2 hover:scale-[1.02] transition-transform cursor-pointer"
            onClick={() => handleMeterCardClick('diesel')}
          >
            <MeterReadingCard 
              title="DIESEL" 
              reading={property.diesel.volume} 
              colorClass="text-meter-diesel"
              className="flex-1"
            />
            {property.diesel.time && (
              <MeterReadingCard 
                title="HRS" 
                reading={property.diesel.time} 
                colorClass="text-meter-diesel"
                className="w-20"
              />
            )}
          </div>
        )}
        
        {property.power && (
          <MeterReadingCard 
            title="POWER" 
            reading={property.power} 
            colorClass="text-meter-power"
            className="hover:scale-[1.02] transition-transform cursor-pointer"
            onClick={() => handleMeterCardClick('power')}
          />
        )}
        
        {property.water && (
          <MeterReadingCard 
            title="WATER" 
            reading={property.water} 
            colorClass="text-meter-water"
            className="hover:scale-[1.02] transition-transform cursor-pointer"
            onClick={() => handleMeterCardClick('water')}
          />
        )}
        
        {property.generator && (
          <GeneratorCard 
            power={{ value: property.generator.power.value, unit: property.generator.power.unit }}
            fuel={{ value: property.generator.fuel.value, unit: property.generator.fuel.unit }}
            runtime={{ value: property.generator.runtime.time || '' }}
            className="hover:scale-[1.02] transition-transform cursor-pointer"
            onClick={() => handleMeterCardClick('generator')}
          />
        )}
      </div>
    </section>
  );
};
