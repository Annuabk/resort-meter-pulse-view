
export type DateRangeOption = 'Today' | 'This Week' | 'This Month' | 'This Year';

export type PropertyOption = string | 'All';

export interface MeterReading {
  datetime: Date;
  value: number;
  unit: string;
  createdBy: string;
  remarks: string | null;
}

export interface MeterReadingInfo {
  id: string;
  name: string;
  category: MeterCategory;
  location: string;
  unit: string;
  readings: MeterReading[];
}

export interface PropertyMeterReading {
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
    weight: PropertyMeterReading;
    time: PropertyMeterReading;
  };
  gas?: PropertyMeterReading;
  diesel?: {
    volume: PropertyMeterReading;
    time?: PropertyMeterReading;
  };
  power?: PropertyMeterReading;
  water?: PropertyMeterReading;
  generator?: {
    power: PropertyMeterReading;
    fuel: PropertyMeterReading;
    runtime: PropertyMeterReading;
  };
}

// New types for the Meter Instruments page
export type MeterCategory = 'power' | 'water' | 'diesel' | 'gas' | 'generator' | 'boiler' | 'solar';

export interface MeterCategoryItem {
  id: MeterCategory;
  name: string;
}

export interface MeterInstrument {
  id: string;
  name: string;
  category: MeterCategory;
  value: number;
  unit: string;
  location: string;
}
