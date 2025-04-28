
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { User, Settings, Download, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DateRangeOption, PropertyOption } from '@/types/dashboard';

interface HeaderFiltersProps {
  dateRange: DateRangeOption;
  setDateRange: (value: DateRangeOption) => void;
  property: PropertyOption;
  setProperty: (value: PropertyOption) => void;
  properties: string[];
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const HeaderFilters: React.FC<HeaderFiltersProps> = ({
  dateRange,
  setDateRange,
  property,
  setProperty,
  properties,
  toggleTheme,
  isDarkMode
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <h1 className="text-2xl font-bold">Meter Readings Dashboard</h1>
      
      <div className="flex flex-wrap items-center gap-2">
        <Select value={dateRange} onValueChange={(value) => setDateRange(value as DateRangeOption)}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Today">Today</SelectItem>
            <SelectItem value="This Week">This Week</SelectItem>
            <SelectItem value="This Month">This Month</SelectItem>
            <SelectItem value="This Year">This Year</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={property} onValueChange={(value) => setProperty(value)}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Select property" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            {properties.map(prop => (
              <SelectItem key={prop} value={prop}>{prop}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button variant="ghost" size="icon">
            <Download className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
