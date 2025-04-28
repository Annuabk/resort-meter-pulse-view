
import { PropertyData } from "@/types/dashboard";

export const mockProperties: PropertyData[] = [
  {
    id: "1",
    name: "Spice Village",
    location: "CGH Earth",
    boiler: {
      weight: { value: 37, unit: "KG", trend: "up" },
      time: { value: 0, unit: "HRS" }
    },
    gas: { value: 374, unit: "KG", trend: "stable" },
    power: { value: 27321, unit: "KWH", trend: "down" },
    water: { value: 1642, unit: "Ltr", trend: "up" },
    generator: {
      power: { value: 186, unit: "" },
      fuel: { value: 766, unit: "" },
      runtime: { value: 0, time: "28H 11M", unit: "" }
    }
  },
  {
    id: "2",
    name: "Coconut Lagoon",
    location: "CGH Earth",
    diesel: {
      volume: { value: -10, unit: "Ltr", trend: "down" },
      time: { value: 0, unit: "HRS" }
    },
    gas: { value: 1651, unit: "KG", trend: "up" },
    power: { value: -1280, unit: "KWH", trend: "down" },
    water: { value: -88000, unit: "Ltr", trend: "down" },
    generator: {
      power: { value: 4320, unit: "" },
      fuel: { value: 5, unit: "" },
      runtime: { value: 0, time: "19H 18M", unit: "" }
    }
  },
  {
    id: "3",
    name: "Casino Hotel",
    location: "CGH Earth",
    gas: { value: 2299, unit: "KG", trend: "stable" },
    power: { value: 148508, unit: "KWH", trend: "up" },
    water: { value: 2390514.6, unit: "Ltr", trend: "stable" },
    generator: {
      power: { value: 56, unit: "" },
      fuel: { value: 45, unit: "" },
      runtime: { value: 0, time: "15H 48M", unit: "" }
    }
  }
];

export const propertyOptions = mockProperties.map(p => p.name);
