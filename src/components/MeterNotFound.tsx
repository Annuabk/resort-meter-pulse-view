
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MeterNotFoundProps {
  onBackClick: () => void;
}

export const MeterNotFound: React.FC<MeterNotFoundProps> = ({ onBackClick }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-10">
        <h2 className="text-xl font-medium">Meter not found</h2>
        <Button onClick={onBackClick} className="mt-4">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to meters
        </Button>
      </div>
    </div>
  );
};
