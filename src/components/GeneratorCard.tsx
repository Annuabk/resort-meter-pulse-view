
import React from 'react';
import { cn } from "@/lib/utils";

interface GeneratorCardProps {
  power: { value: number; unit: string };
  fuel: { value: number; unit: string };
  runtime: { value: string };
  className?: string;
  onClick?: () => void;
}

export const GeneratorCard: React.FC<GeneratorCardProps> = ({ 
  power, 
  fuel, 
  runtime,
  className,
  onClick
}) => {
  return (
    <div 
      className={cn("bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md", className)}
      onClick={onClick}
    >
      <div className="text-xs font-medium uppercase mb-1 text-meter-generator">
        GENERATOR
      </div>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center">
          <span className="text-meter-power mr-1">⚡</span>
          <span className="text-lg font-medium">{power.value}</span>
          <span className="text-xs ml-1 text-muted-foreground">{power.unit}</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-meter-diesel mr-1">🛢️</span>
          <span className="text-lg font-medium">{fuel.value}</span>
          <span className="text-xs ml-1 text-muted-foreground">{fuel.unit}</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-gray-500 mr-1">🕒</span>
          <span className="text-lg font-medium">{runtime.value}</span>
        </div>
      </div>
    </div>
  );
};
