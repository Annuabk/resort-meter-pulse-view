
import React from 'react';
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { DashboardMeterReading } from '@/types/dashboard';

interface MeterReadingCardProps {
  title: string;
  reading: DashboardMeterReading;
  colorClass: string;
  className?: string;
  onClick?: () => void;
}

export const MeterReadingCard: React.FC<MeterReadingCardProps> = ({ 
  title, 
  reading, 
  colorClass,
  className,
  onClick
}) => {
  const isNegative = reading.value < 0;
  
  const getTrendIcon = () => {
    if (!reading.trend) return null;
    
    if (reading.trend === 'up') {
      return <TrendingUp className="h-4 w-4 ml-2" />;
    } else if (reading.trend === 'down') {
      return <TrendingDown className="h-4 w-4 ml-2" />;
    }
    return <Minus className="h-4 w-4 ml-2" />;
  };

  return (
    <div 
      className={cn("bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md", className)}
      onClick={onClick}
    >
      <div className={cn("text-xs font-medium uppercase mb-1", colorClass)}>
        {title}
      </div>
      <div className="flex items-baseline">
        <span className={cn("text-xl font-semibold", isNegative ? "text-destructive" : "")}>
          {reading.value.toLocaleString()}
        </span>
        <span className="text-xs ml-1 text-muted-foreground">
          {reading.unit}
        </span>
        {reading.time && (
          <span className="text-xs ml-2 text-muted-foreground">
            {reading.time}
          </span>
        )}
        {getTrendIcon()}
      </div>
    </div>
  );
};
