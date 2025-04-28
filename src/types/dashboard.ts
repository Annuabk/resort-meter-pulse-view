
export type DateRangeOption = 'Today' | 'This Week' | 'This Month' | 'This Year';

export type PropertyOption = string | 'All';

export interface MeterReading {
  value: number;
  unit: string;
  trend?: 'up' | 'down' | 'stable';
  time?: string;
}

export interface PropertyData {
  id: string;
  name: string;
  location: string;
  boiler?: {
    weight: MeterReading;
    time: MeterReading;
  };
  gas?: MeterReading;
  diesel?: {
    volume: MeterReading;
    time?: MeterReading;
  };
  power?: MeterReading;
  water?: MeterReading;
  generator?: {
    power: MeterReading;
    fuel: MeterReading;
    runtime: MeterReading;
  };
}
