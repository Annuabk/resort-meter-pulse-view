
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  X 
} from 'lucide-react';
import { MeterConfigurationForm } from './MeterConfigurationForm';
import { MeterConfigList } from './MeterConfigList';

type MeterCategory = 'power' | 'water' | 'diesel' | 'gas' | 'generator' | 'boiler' | 'solar';

interface MeterConfigFlowProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MeterConfigFlow: React.FC<MeterConfigFlowProps> = ({ 
  isOpen, 
  onOpenChange 
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedCategory, setSelectedCategory] = useState<MeterCategory | null>(null);
  const [listModalOpen, setListModalOpen] = useState<boolean>(false);
  
  // When first opened, show the list modal
  React.useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedCategory(null);
      setListModalOpen(true);
    } else {
      setListModalOpen(false);
    }
  }, [isOpen]);

  const handleCategorySelect = (category: MeterCategory) => {
    setSelectedCategory(category);
    setListModalOpen(false);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setListModalOpen(true);
  };

  const handleClose = () => {
    // Reset state when closing
    setStep(1);
    setSelectedCategory(null);
    setListModalOpen(false);
    onOpenChange(false);
  };

  const getCategoryName = (category: MeterCategory) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <>
      {/* Step 1: Category List Modal */}
      <MeterConfigList 
        isOpen={listModalOpen && isOpen} 
        onOpenChange={(open) => {
          if (!open) handleClose();
          setListModalOpen(open);
        }}
        onCategorySelect={handleCategorySelect}
      />
      
      {/* Step 2: Configuration Form */}
      {step === 2 && selectedCategory && (
        <Dialog open={isOpen && !listModalOpen} onOpenChange={onOpenChange}>
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto my-8">
            <DialogClose 
              className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none" 
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
            
            <DialogHeader className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-0 top-0" 
                onClick={handleBack}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <DialogTitle className="text-xl font-semibold text-center">
                Create Configuration ({getCategoryName(selectedCategory)})
              </DialogTitle>
            </DialogHeader>
            
            <MeterConfigurationForm 
              category={selectedCategory} 
              onCancel={handleClose} 
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
