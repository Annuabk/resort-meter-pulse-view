
import { MeterCategoryItem, MeterInstrument } from '@/types/dashboard';

// Categories for the tab menu
export const meterCategories: MeterCategoryItem[] = [
  { id: 'power', name: 'Power' },
  { id: 'water', name: 'Water' },
  { id: 'diesel', name: 'Diesel' },
  { id: 'gas', name: 'Gas' },
  { id: 'generator', name: 'Generator' },
  { id: 'boiler', name: 'Boiler' },
  { id: 'solar', name: 'Solar' }
];

// Mock meter instruments data
export const meterInstruments: MeterInstrument[] = [
  // Boiler instruments
  {
    id: 'boiler-1',
    name: 'Laundry Steam Boiler',
    category: 'boiler',
    value: 30,
    unit: 'KG',
    location: 'SV'
  },
  {
    id: 'boiler-2',
    name: 'Hotwater Boiler',
    category: 'boiler',
    value: 5,
    unit: 'KG',
    location: 'SV'
  },
  {
    id: 'boiler-3',
    name: 'Kitchen Steam Boiler',
    category: 'boiler',
    value: 18,
    unit: 'KG',
    location: 'SV'
  },
  
  // Power instruments
  {
    id: 'power-1',
    name: 'Main Meter',
    category: 'power',
    value: 450,
    unit: 'kWh',
    location: 'SV'
  },
  {
    id: 'power-2',
    name: 'Kitchen Power',
    category: 'power',
    value: 120,
    unit: 'kWh',
    location: 'SV'
  },
  {
    id: 'power-3',
    name: 'Swimming Pool',
    category: 'power',
    value: 75,
    unit: 'kWh',
    location: 'SV'
  },
  
  // Water instruments
  {
    id: 'water-1',
    name: 'Main Water Tank',
    category: 'water',
    value: 2500,
    unit: 'Ltr',
    location: 'SV'
  },
  {
    id: 'water-2',
    name: 'Garden Irrigation',
    category: 'water',
    value: 750,
    unit: 'Ltr',
    location: 'SV'
  },
  
  // Diesel instruments
  {
    id: 'diesel-1',
    name: 'Backup Generator Tank',
    category: 'diesel',
    value: 175,
    unit: 'Ltr',
    location: 'SV'
  },
  {
    id: 'diesel-2',
    name: 'Service Vehicle Tank',
    category: 'diesel',
    value: 45,
    unit: 'Ltr',
    location: 'SV'
  },
  
  // Gas instruments
  {
    id: 'gas-1',
    name: 'Main Kitchen Supply',
    category: 'gas',
    value: 65,
    unit: 'KG',
    location: 'SV'
  },
  {
    id: 'gas-2',
    name: 'Outdoor Cooking Area',
    category: 'gas',
    value: 12,
    unit: 'KG',
    location: 'SV'
  },
  
  // Generator instruments
  {
    id: 'generator-1',
    name: 'Primary Backup Generator',
    category: 'generator',
    value: 25,
    unit: 'kW',
    location: 'SV'
  },
  
  // Solar instruments
  {
    id: 'solar-1',
    name: 'Rooftop Solar Array',
    category: 'solar',
    value: 35,
    unit: 'kW',
    location: 'SV'
  },
  {
    id: 'solar-2',
    name: 'Garden Solar Lights',
    category: 'solar',
    value: 2.5,
    unit: 'kW',
    location: 'SV'
  }
];
