
import React from 'react';
import { PropertyData } from '@/types/dashboard';
import { MeterReadingCard } from './MeterReadingCard';
import { GeneratorCard } from './GeneratorCard';

interface PropertyCardProps {
  property: PropertyData;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-medium mb-3 flex items-center">
        <span className="text-blue-500 mr-2">•</span>
        {property.name} - {property.location}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {property.boiler && (
          <div className="flex gap-2">
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
          />
        )}
        
        {property.diesel && (
          <div className="flex gap-2">
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
          />
        )}
        
        {property.water && (
          <MeterReadingCard 
            title="WATER" 
            reading={property.water} 
            colorClass="text-meter-water"
          />
        )}
        
        {property.generator && (
          <GeneratorCard 
            power={{ value: property.generator.power.value, unit: property.generator.power.unit }}
            fuel={{ value: property.generator.fuel.value, unit: property.generator.fuel.unit }}
            runtime={{ value: property.generator.runtime.time || '' }}
          />
        )}
      </div>
    </section>
  );
};
