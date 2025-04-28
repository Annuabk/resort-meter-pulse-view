
import React from 'react';
import { PropertyData } from '@/types/dashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplet, Fuel, Power, Gauge } from 'lucide-react';

interface SummaryPanelProps {
  properties: PropertyData[];
}

export const SummaryPanel: React.FC<SummaryPanelProps> = ({ properties }) => {
  // Calculate totals across all properties
  const totalPower = properties.reduce((sum, property) => {
    return property.power ? sum + property.power.value : sum;
  }, 0);
  
  const totalWater = properties.reduce((sum, property) => {
    return property.water ? sum + property.water.value : sum;
  }, 0);
  
  const totalGas = properties.reduce((sum, property) => {
    return property.gas ? sum + property.gas.value : sum;
  }, 0);
  
  const totalDiesel = properties.reduce((sum, property) => {
    return property.diesel ? sum + property.diesel.volume.value : sum;
  }, 0);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-meter-power">
            Total Power
          </CardTitle>
          <Power className="h-4 w-4 text-meter-power" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalPower.toLocaleString()} kWh</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-meter-water">
            Total Water
          </CardTitle>
          <Droplet className="h-4 w-4 text-meter-water" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalWater.toLocaleString()} Ltr</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-meter-gas">
            Total Gas
          </CardTitle>
          <Fuel className="h-4 w-4 text-meter-gas" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalGas.toLocaleString()} KG</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-meter-diesel">
            Total Diesel
          </CardTitle>
          <Gauge className="h-4 w-4 text-meter-diesel" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalDiesel.toLocaleString()} Ltr</div>
        </CardContent>
      </Card>
    </div>
  );
};
