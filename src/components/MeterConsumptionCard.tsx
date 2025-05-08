
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, History, AlertTriangle, Thermometer, Droplet, Fuel, Power, Gauge, Battery, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MeterChart } from '@/components/MeterChart';
import { MeterInstrument, DateRangeOption, ChartData } from '@/types/dashboard';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

interface MeterConsumptionCardProps {
  meter: MeterInstrument;
  dateRange: DateRangeOption;
  readingsData: ChartData[];
}

export const MeterConsumptionCard: React.FC<MeterConsumptionCardProps> = ({
  meter,
  dateRange,
  readingsData
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAlert, setShowAlert] = useState(false);
  
  // Function to determine which icon to display based on category
  const getIcon = () => {
    switch (meter.category) {
      case 'power':
        return <Power className="h-5 w-5 text-meter-power" />;
      case 'water':
        return <Droplet className="h-5 w-5 text-meter-water" />;
      case 'diesel':
        return <Fuel className="h-5 w-5 text-meter-diesel" />;
      case 'gas':
        return <Fuel className="h-5 w-5 text-meter-gas" />;
      case 'generator':
        return <Battery className="h-5 w-5 text-meter-generator" />;
      case 'boiler':
        return <Thermometer className="h-5 w-5 text-meter-boiler" />;
      case 'solar':
        return <Sun className="h-5 w-5 text-yellow-500" />;
      default:
        return <Gauge className="h-5 w-5 text-gray-500" />;
    }
  };

  // Get background color class based on meter type
  const getBgGradient = () => {
    switch (meter.category) {
      case 'power':
        return 'from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/10';
      case 'water':
        return 'from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10';
      case 'diesel':
        return 'from-red-100 to-red-50 dark:from-red-900/20 dark:to-red-800/10';
      case 'gas':
        return 'from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/10';
      case 'generator':
        return 'from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10';
      case 'boiler':
        return 'from-gray-100 to-gray-50 dark:from-gray-800/20 dark:to-gray-700/10';
      case 'solar':
        return 'from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/10';
      default:
        return 'from-gray-100 to-gray-50 dark:from-gray-800/20 dark:to-gray-700/10';
    }
  };
  
  const handleAddReading = () => {
    navigate(`/meters/${meter.category}/${meter.id}`);
  };
  
  const handleViewHistory = () => {
    navigate(`/meters/${meter.category}/${meter.id}`);
  };
  
  const handleAlertDismiss = () => {
    setShowAlert(false);
    toast({
      title: "Alert dismissed",
      description: `Anomaly alert for ${meter.name} has been acknowledged.`,
      variant: "default"
    });
  };
  
  // Check if there's an anomaly in the data
  // For demo purposes, we're just randomly showing alerts on some cards
  const hasAnomaly = meter.id.includes('1') && Math.random() > 0.5;

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg`}>
      <div className={`bg-gradient-to-r ${getBgGradient()} p-1`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm">
                {getIcon()}
              </div>
              <div>
                <CardTitle className="text-lg font-semibold">{meter.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{meter.location}</p>
              </div>
            </div>
            <Badge variant={meter.category === 'diesel' || meter.category === 'boiler' ? "destructive" : "default"}>
              {meter.value} {meter.unit}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="pt-4">
          <div className="h-48 relative">
            {hasAnomaly && showAlert && (
              <div className="absolute top-0 right-0 z-10">
                <Badge variant="destructive" className="flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  Anomaly Detected
                </Badge>
              </div>
            )}
            <MeterChart 
              data={readingsData} 
              category={meter.category}
              unit={meter.unit}
              dateRange={dateRange}
            />
          </div>
        </CardContent>
      </div>
      
      <CardFooter className="flex justify-between p-4 pt-2 bg-card">
        <Button variant="outline" size="sm" onClick={handleAddReading}>
          <PlusCircle className="h-4 w-4 mr-1" />
          Add Reading
        </Button>
        <Button variant="outline" size="sm" onClick={handleViewHistory}>
          <History className="h-4 w-4 mr-1" />
          View History
        </Button>
        {hasAnomaly && (
          <Button variant="destructive" size="sm" onClick={handleAlertDismiss}>
            <AlertTriangle className="h-4 w-4 mr-1" />
            Alert
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
