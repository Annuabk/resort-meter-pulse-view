
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  Power, 
  Droplets, 
  Fuel, 
  Flame, 
  Zap, 
  Thermometer, 
  Sun, 
  X 
} from 'lucide-react';

type MeterCategory = 'power' | 'water' | 'diesel' | 'gas' | 'generator' | 'boiler' | 'solar';

interface MeterConfigListProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onCategorySelect: (category: MeterCategory) => void;
}

export const MeterConfigList: React.FC<MeterConfigListProps> = ({ 
  isOpen, 
  onOpenChange,
  onCategorySelect
}) => {
  const getCategoryIcon = (category: MeterCategory) => {
    const iconProps = { className: "h-8 w-8 mb-2" };
    
    switch (category) {
      case 'power': return <Power {...iconProps} className={`${iconProps.className} text-meter-power`} />;
      case 'water': return <Droplets {...iconProps} className={`${iconProps.className} text-meter-water`} />;
      case 'diesel': return <Fuel {...iconProps} className={`${iconProps.className} text-meter-diesel`} />;
      case 'gas': return <Flame {...iconProps} className={`${iconProps.className} text-meter-gas`} />;
      case 'generator': return <Zap {...iconProps} className={`${iconProps.className} text-meter-generator`} />;
      case 'boiler': return <Thermometer {...iconProps} className={`${iconProps.className} text-meter-boiler`} />;
      case 'solar': return <Sun {...iconProps} className={`${iconProps.className} text-amber-500`} />;
      default: return null;
    }
  };

  const getCategoryName = (category: MeterCategory) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const categories: MeterCategory[] = ['power', 'water', 'diesel', 'gas', 'generator', 'boiler', 'solar'];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto my-8">
        <DialogClose 
          className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none" 
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Create Meter Configuration</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="flex flex-col items-center justify-center h-24 transition-all hover:scale-105 hover:border-primary/50"
              onClick={() => onCategorySelect(category)}
            >
              {getCategoryIcon(category)}
              <span>{getCategoryName(category)}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
