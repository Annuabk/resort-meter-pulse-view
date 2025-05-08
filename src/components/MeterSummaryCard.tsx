
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fuel, Plus, ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface MeterSummaryCardProps {
  title: string;
  value: string | number;
  unit: string;
  showTopUpButton?: boolean;
  onTopUpClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'stable';
  category?: string;
}

export const MeterSummaryCard: React.FC<MeterSummaryCardProps> = ({
  title,
  value,
  unit,
  showTopUpButton = false,
  onTopUpClick,
  className,
  icon,
  trend,
  category
}) => {
  // Get dynamic background color based on category
  const getBgColor = () => {
    switch (category) {
      case 'power': return 'from-amber-50 to-amber-100 border-amber-200';
      case 'water': return 'from-blue-50 to-blue-100 border-blue-200';
      case 'diesel': return 'from-red-50 to-red-100 border-red-200';
      case 'generator': return 'from-purple-50 to-purple-100 border-purple-200';
      case 'gas': return 'from-green-50 to-green-100 border-green-200';
      case 'boiler': return 'from-gray-50 to-gray-100 border-gray-200';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  return (
    <Card className={cn(
      "overflow-hidden h-full transform transition-all duration-300 hover:shadow-lg",
      "bg-gradient-to-br", 
      getBgColor(),
      className
    )}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 flex justify-between items-center">
          {title}
          {trend && (
            <Badge 
              variant={trend === 'up' ? 'destructive' : trend === 'down' ? 'default' : 'outline'} 
              className={cn(
                "ml-2 px-2 py-0 h-5 flex items-center",
                trend === 'up' ? "bg-red-100 text-red-700" : 
                trend === 'down' ? "bg-green-100 text-green-700" : 
                "bg-gray-100 text-gray-700"
              )}
            >
              {trend === 'up' ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : trend === 'down' ? (
                <ArrowDown className="h-3 w-3 mr-1" />
              ) : null}
              {trend === 'up' ? '+2.5%' : trend === 'down' ? '-1.8%' : 'Stable'}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-1">
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">{value}</span>
          <span className="text-sm font-medium text-gray-500">{unit}</span>
        </div>
        {icon && <div className="mt-2">{icon}</div>}
      </CardContent>
      {showTopUpButton && (
        <CardFooter className="pt-0">
          <Button 
            variant="outline" 
            className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 hover:scale-105 font-medium"
            onClick={onTopUpClick}
          >
            <Fuel className="mr-1 h-4 w-4" />
            Top-up Fuel
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
