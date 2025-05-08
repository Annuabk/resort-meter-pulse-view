
import React from 'react';
import { MeterSummaryCard } from '@/components/MeterSummaryCard';
import { Zap, Battery, Fuel } from 'lucide-react';

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <MeterSummaryCard 
        title="Current Reading" 
        value={currentReading}
        unit={meterUnit}
        showTopUpButton={isSpecialMeter}
        onTopUpClick={onTopUpClick}
        trend="up"
        category={category}
        icon={isSpecialMeter ? <Fuel className="text-red-500" /> : null}
      />
      
      {category === 'generator' ? (
        <MeterSummaryCard 
          title="KWH Generated" 
          value={kwhGenerated || 0}
          unit="KWH"
          trend="down"
          category={category}
          icon={<Zap className="text-amber-500" />}
        />
      ) : isSpecialMeter ? (
        <MeterSummaryCard 
          title="Fuel Efficiency" 
          value={Math.round(Math.random() * 100) / 10}
          unit="Ltr/Hr"
          trend="stable"
          category={category}
          icon={<Battery className="text-green-500" />}
        />
      ) : (
        <MeterSummaryCard 
          title="Monthly Average" 
          value={(Math.round(currentReading * 0.8 * 10) / 10)}
          unit={meterUnit}
          trend="stable"
          category={category}
        />
      )}

      {category === 'generator' ? (
        <MeterSummaryCard 
          title="Running Hours" 
          value={runningHours || 0}
          unit="Hrs"
          trend="up"
          category={category}
        />
      ) : (
        <MeterSummaryCard 
          title={isSpecialMeter ? "Last Top-up" : "Peak Reading"} 
          value={isSpecialMeter ? "50" : Math.round(currentReading * 1.2)}
          unit={isSpecialMeter ? "Ltrs" : meterUnit}
          category={category}
          icon={isSpecialMeter ? <Fuel className="text-amber-500" /> : null}
        />
      )}
    </div>
  );
};
