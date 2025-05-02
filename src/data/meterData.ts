
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
  // Added new diesel instruments
  {
    id: 'diesel-1',
    name: 'Diesel Storage Tank',
    category: 'diesel',
    value: 8000,
    unit: 'Ltr',
    location: 'SV'
  },
  {
    id: 'diesel-2',
    name: 'Transport Diesel Stock',
    category: 'diesel',
    value: 5000,
    unit: 'Ltr',
    location: 'CH'
  },
  // Added new generator instruments
  {
    id: 'generator-1',
    name: 'Main Generator',
    category: 'generator',
    value: 2500,
    unit: 'KWH',
    location: 'SV'
  },
  {
    id: 'generator-2',
    name: 'Backup Generator',
    category: 'generator',
    value: 1500,
    unit: 'KWH',
    location: 'CL'
  },
  {
    id: 'generator-3',
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
