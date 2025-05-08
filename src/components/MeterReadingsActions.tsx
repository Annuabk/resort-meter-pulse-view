
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Plus, Fuel } from 'lucide-react';

interface MeterReadingsActionsProps {
  dateFilter: string;
  setDateFilter: (value: string) => void;
  isSpecialMeter: boolean;
  onAddReadingClick: () => void;
  onTopupClick: () => void;
}

export const MeterReadingsActions: React.FC<MeterReadingsActionsProps> = ({
  dateFilter,
  setDateFilter,
  isSpecialMeter,
  onAddReadingClick,
  onTopupClick
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
      <Select value={dateFilter} onValueChange={(value) => setDateFilter(value)}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Filter by date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="This Month">This Month</SelectItem>
          <SelectItem value="Last Month">Last Month</SelectItem>
          <SelectItem value="Custom">Custom Range</SelectItem>
        </SelectContent>
      </Select>
      
      {isSpecialMeter ? (
        <>
          <Button 
            variant="outline"
            onClick={onTopupClick}
            className="bg-amber-500 hover:bg-amber-600 text-white border-amber-500"
          >
            <Plus className="mr-1 h-4 w-4" /> Add Top-up Fuel
          </Button>
          <Button 
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={onAddReadingClick}
          >
            <Plus className="mr-1 h-4 w-4" /> Add New Reading
          </Button>
        </>
      ) : (
        <Button 
          variant="default"
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={onAddReadingClick}
        >
          <Plus className="mr-1 h-4 w-4" /> Add New Reading
        </Button>
      )}
    </div>
  );
};
