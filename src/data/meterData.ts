
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
  {
    id: 'boiler-4',
    name: 'Main Boiler System',
    category: 'boiler',
    value: 45,
    unit: 'KG',
    location: 'CL'
  },
  {
    id: 'boiler-5',
    name: 'Kitchen Boiler',
    category: 'boiler',
    value: 22,
    unit: 'KG',
    location: 'CL'
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
  {
    id: 'power-4',
    name: 'Main Electricity',
    category: 'power',
    value: 380,
    unit: 'kWh',
    location: 'CL'
  },
  {
    id: 'power-5',
    name: 'Air Conditioning',
    category: 'power',
    value: 210,
    unit: 'kWh',
    location: 'CL'
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
  {
    id: 'water-3',
    name: 'Main Water Supply',
    category: 'water',
    value: 3200,
    unit: 'Ltr',
    location: 'CL'
  },
  {
    id: 'water-4',
    name: 'Pool Water System',
    category: 'water',
    value: 1800,
    unit: 'Ltr',
    location: 'CL'
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
  {
    id: 'diesel-3',
    name: 'Emergency Generator',
    category: 'diesel',
    value: 220,
    unit: 'Ltr',
    location: 'CL'
  },
  {
    id: 'diesel-4',
    name: 'Staff Transport',
    category: 'diesel',
    value: 65,
    unit: 'Ltr',
    location: 'CL'
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
  {
    id: 'gas-3',
    name: 'Restaurant Supply',
    category: 'gas',
    value: 85,
    unit: 'KG',
    location: 'CL'
  },
  {
    id: 'gas-4',
    name: 'Staff Canteen',
    category: 'gas',
    value: 30,
    unit: 'KG',
    location: 'CL'
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
  {
    id: 'generator-2',
    name: 'Main Power Generator',
    category: 'generator',
    value: 40,
    unit: 'kW',
    location: 'CL'
  },
  {
    id: 'generator-3',
    name: 'Emergency Backup',
    category: 'generator',
    value: 15,
    unit: 'kW',
    location: 'CL'
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
  },
  {
    id: 'solar-3',
    name: 'Main Building Solar',
    category: 'solar',
    value: 42,
    unit: 'kW',
    location: 'CL'
  }
];
