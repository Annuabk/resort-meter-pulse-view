
import React from 'react';
import { MeterSummaryCard } from '@/components/MeterSummaryCard';

interface MeterSummaryCardsProps {
  category?: string;
  currentReading: number;
  meterUnit: string;
  isSpecialMeter: boolean;
  kwhGenerated: number | null;
  runningHours: number | null;
  onTopUpClick: () => void;
}

export const MeterSummaryCards: React.FC<MeterSummaryCardsProps> = ({
  category,
  currentReading,
  meterUnit,
  isSpecialMeter,
  kwhGenerated,
  runningHours,
  onTopUpClick
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <MeterSummaryCard 
        title="Current Reading" 
        value={currentReading}
        unit={meterUnit}
        showTopUpButton={isSpecialMeter}
        onTopUpClick={onTopUpClick}
      />
      
      {category === 'generator' && (
        <MeterSummaryCard 
          title="KWH Generated" 
          value={kwhGenerated || 0}
          unit="KWH"
        />
      )}

      {category === 'generator' && (
        <MeterSummaryCard 
          title="Running Hours" 
          value={runningHours || 0}
          unit="Hrs"
        />
      )}
    </div>
  );
};
