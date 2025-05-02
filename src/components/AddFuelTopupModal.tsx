
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { CalendarIcon, Clock } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface AddFuelTopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  meterName: string;
  meterCategory: string;
}

interface TopupFormData {
  date: Date;
  time: string;
  quantity: number;
  remarks: string;
}

export const AddFuelTopupModal: React.FC<AddFuelTopupModalProps> = ({
  isOpen,
  onClose,
  meterName,
  meterCategory
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TopupFormData>({
    defaultValues: {
      date: new Date(),
      time: format(new Date(), 'HH:mm'),
      quantity: 0,
      remarks: ''
    }
  });

  const onSubmit = (data: TopupFormData) => {
    // In a real app, this would save the data to a database
    console.log('Fuel topup data:', data);
    
    // Reset form and close modal
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Add Top-up Fuel
            {meterCategory === 'generator' ? ' for Generator' : ''}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Date picker */}
          <div className="space-y-2">
            <Label htmlFor="date">Date <span className="text-red-500">*</span></Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 pointer-events-auto">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            {errors.date && <p className="text-sm text-red-500">Date is required</p>}
          </div>

          {/* Time picker */}
          <div className="space-y-2">
            <Label htmlFor="time">Time <span className="text-red-500">*</span></Label>
            <div className="flex w-full items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <Input
                {...register('time', { required: true })}
                id="time"
                type="time"
                className="flex-1"
              />
            </div>
            {errors.time && <p className="text-sm text-red-500">Time is required</p>}
          </div>

          {/* Fuel quantity input */}
          <div className="space-y-2">
            <Label htmlFor="quantity">Fuel Quantity (Liters) <span className="text-red-500">*</span></Label>
            <Input
              {...register('quantity', { 
                required: true,
                valueAsNumber: true,
                min: 0.1
              })}
              id="quantity"
              type="number"
              min="0.1"
              step="0.1"
            />
            {errors.quantity && <p className="text-sm text-red-500">Valid quantity is required</p>}
          </div>

          {/* Remarks textarea */}
          <div className="space-y-2">
            <Label htmlFor="remarks">Remarks</Label>
            <Textarea
              {...register('remarks')}
              id="remarks"
              placeholder="Optional remarks about the fuel topup"
            />
          </div>

          <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={handleClose}>Close</Button>
            <Button type="submit" variant="default">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
