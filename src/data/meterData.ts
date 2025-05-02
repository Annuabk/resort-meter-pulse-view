
import { MeterCategory, MeterCategoryItem, MeterInstrument } from "@/types/dashboard";

export const meterCategories: MeterCategoryItem[] = [
  { id: 'power', name: 'Power' },
  { id: 'water', name: 'Water' },
  { id: 'diesel', name: 'Diesel' },
  { id: 'gas', name: 'Gas' },
  { id: 'generator', name: 'Generator' },
  { id: 'boiler', name: 'Boiler' },
  { id: 'solar', name: 'Solar' }
];

export const meterInstruments: MeterInstrument[] = [
  {
    id: 'boiler-1',
    name: 'Laundry Steam Boiler',
    category: 'boiler',
    value: 37,
    unit: 'KG',
    location: 'SV'
  },
  {
    id: 'power-1',
    name: 'Main Power Meter',
    category: 'power',
    value: 27321,
    unit: 'KWH',
    location: 'CL'
  },
  {
    id: 'water-1',
    name: 'Pool Water Meter',
    category: 'water',
    value: 1642,
    unit: 'Ltr',
    location: 'BB'
  },
  {
    id: 'gas-1',
    name: 'Kitchen Gas Meter',
    category: 'gas',
    value: 374,
    unit: 'KG',
    location: 'SV'
  },
  {
    id: 'diesel-1',
    name: 'Generator Diesel Tank',
    category: 'diesel',
    value: 120,
    unit: 'Ltr',
    location: 'CL'
  },
  {
    id: 'generator-1',
    name: 'Emergency Generator',
    category: 'generator',
    value: 186,
    unit: 'KWH',
    location: 'MB'
  },
  {
    id: 'solar-1',
    name: 'Rooftop Solar Array',
    category: 'solar',
    value: 56,
    unit: 'KWH',
    location: 'SV'
  },
  {
    id: 'power-2',
    name: 'Kitchen Power Meter',
    category: 'power',
    value: 5430,
    unit: 'KWH',
    location: 'SV'
  },
  {
    id: 'water-2',
    name: 'Garden Irrigation Meter',
    category: 'water',
    value: 3250,
    unit: 'Ltr',
    location: 'CL'
  }
];
