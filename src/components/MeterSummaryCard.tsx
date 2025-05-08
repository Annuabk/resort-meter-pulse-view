
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fuel, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MeterSummaryCardProps {
  title: string;
  value: string | number;
  unit: string;
  showTopUpButton?: boolean;
  onTopUpClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export const MeterSummaryCard: React.FC<MeterSummaryCardProps> = ({
  title,
  value,
  unit,
  showTopUpButton = false,
  onTopUpClick,
  className,
  icon
}) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-1">
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-sm font-medium text-gray-500">{unit}</span>
        </div>
        {icon && <div className="mt-2">{icon}</div>}
      </CardContent>
      {showTopUpButton && (
        <CardFooter className="pt-0">
          <Button 
            variant="outline" 
            className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 hover:text-amber-700"
            onClick={onTopUpClick}
          >
            <Fuel className="mr-1 h-4 w-4" />
            Top-up
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
