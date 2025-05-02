
import { MeterReading, MeterReadingInfo } from "@/types/dashboard";

// Mock data for meter readings
export const mockMeterReadings = {
  meters: [
    {
      id: "boiler-1",
      name: "Laundry Steam Boiler",
      category: "boiler",
      location: "SV",
      unit: "KG",
      readings: [
        {
          datetime: new Date(2023, 4, 15, 8, 30),
          value: 450,
          unit: "KG",
          createdBy: "John Smith",
          remarks: "Normal operation"
        },
        {
          datetime: new Date(2023, 4, 14, 8, 15),
          value: 445,
          unit: "KG",
          createdBy: "John Smith",
          remarks: null
        },
        {
          datetime: new Date(2023, 4, 13, 8, 30),
          value: 460,
          unit: "KG",
          createdBy: "Jane Doe",
          remarks: "After maintenance"
        }
      ]
    },
    {
      id: "power-1",
      name: "Main Power Meter",
      category: "power",
      location: "CL",
      unit: "KWH",
      readings: [
        {
          datetime: new Date(2023, 4, 15, 9, 0),
          value: 27321,
          unit: "KWH",
          createdBy: "Robert Johnson",
          remarks: null
        },
        {
          datetime: new Date(2023, 4, 14, 9, 15),
          value: 27250,
          unit: "KWH",
          createdBy: "Robert Johnson",
          remarks: null
        }
      ]
    },
    {
      id: "water-1",
      name: "Pool Water Meter",
      category: "water",
      location: "BB",
      unit: "Ltr",
      readings: [
        {
          datetime: new Date(2023, 4, 15, 7, 45),
          value: 1642,
          unit: "Ltr",
          createdBy: "Lisa Chen",
          remarks: "After refill"
        },
        {
          datetime: new Date(2023, 4, 14, 7, 30),
          value: 1520,
          unit: "Ltr",
          createdBy: "Lisa Chen",
          remarks: null
        }
      ]
    },
    {
      id: "gas-1",
      name: "Kitchen Gas Meter",
      category: "gas",
      location: "SV",
      unit: "KG",
      readings: [
        {
          datetime: new Date(2023, 4, 15, 6, 30),
          value: 374,
          unit: "KG",
          createdBy: "David Miller",
          remarks: "New tank installed"
        }
      ]
    },
    {
      id: "diesel-1",
      name: "Generator Diesel Tank",
      category: "diesel",
      location: "CL",
      unit: "Ltr",
      readings: [
        {
          datetime: new Date(2023, 4, 15, 16, 0),
          value: 120,
          unit: "Ltr",
          createdBy: "Michael Wang",
          remarks: null
        }
      ]
    },
    {
      id: "generator-1",
      name: "Emergency Generator",
      category: "generator",
      location: "MB",
      unit: "KWH",
      readings: [
        {
          datetime: new Date(2023, 4, 15, 14, 15),
          value: 186,
          unit: "KWH",
          createdBy: "Sarah Johnson",
          remarks: "Monthly test run"
        }
      ]
    },
    {
      id: "solar-1",
      name: "Rooftop Solar Array",
      category: "solar",
      location: "SV",
      unit: "KWH",
      readings: [
        {
          datetime: new Date(2023, 4, 15, 17, 0),
          value: 56,
          unit: "KWH",
          createdBy: "Kevin Lee",
          remarks: "Clear day, optimal production"
        }
      ]
    }
  ]
};
