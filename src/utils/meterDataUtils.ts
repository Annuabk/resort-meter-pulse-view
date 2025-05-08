
import { ChartData, DateRangeOption } from '@/types/dashboard';
import { mockMeterReadings } from '@/data/meterReadings';

// Function to generate mock chart data based on meter ID and date range
export const getMeterReadingsData = (meterId: string, dateRange: DateRangeOption): ChartData[] => {
  const meterInfo = mockMeterReadings.meters.find(meter => meter.id === meterId);
  
  // If meter has readings, use them as a base for our trend data
  const baseValue = meterInfo ? meterInfo.readings[0]?.value || 100 : 100;
  
  // Generate different data points based on the selected date range
  let dataPoints: ChartData[] = [];
  const now = new Date();
  const variance = 0.2; // 20% variance for random fluctuations
  
  switch(dateRange) {
    case 'Today':
      // Hourly data for today
      for (let i = 0; i < 24; i++) {
        const hourLabel = `${i.toString().padStart(2, '0')}:00`;
        const randomFactor = 1 + (Math.random() * variance - variance/2);
        const value = Math.round(baseValue * randomFactor);
        
        // Add an anomaly alert in a specific hour (for demo purposes)
        const hasAlert = i === 14 && Math.random() > 0.7;
        
        dataPoints.push({
          name: hourLabel,
          value: value,
          alert: hasAlert ? value : undefined,
          timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), i)
        });
      }
      break;
      
    case 'This Week':
      // Daily data for this week
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (let i = 0; i < 7; i++) {
        const day = new Date();
        day.setDate(day.getDate() - day.getDay() + i);
        
        const randomFactor = 1 + (Math.random() * variance - variance/2);
        const value = Math.round(baseValue * randomFactor);
        
        // Add an anomaly alert on a random day (for demo purposes)
        const hasAlert = i === 3 && Math.random() > 0.7;
        
        dataPoints.push({
          name: weekdays[i],
          value: value,
          alert: hasAlert ? value : undefined,
          timestamp: day
        });
      }
      break;
      
    case 'This Month':
    default:
      // Weekly data for this month
      for (let i = 0; i < 4; i++) {
        const weekLabel = `W${i+1}`;
        const randomFactor = 1 + (Math.random() * variance - variance/2);
        const value = Math.round(baseValue * randomFactor);
        
        // Add an anomaly alert in a specific week (for demo purposes)
        const hasAlert = i === 2 && Math.random() > 0.7;
        
        dataPoints.push({
          name: weekLabel,
          value: value,
          alert: hasAlert ? value : undefined,
          timestamp: new Date(now.getFullYear(), now.getMonth(), i * 7 + 1)
        });
      }
      break;
      
    case 'This Year':
      // Monthly data for this year
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      for (let i = 0; i < 12; i++) {
        const randomFactor = 1 + (Math.random() * variance - variance/2);
        const value = Math.round(baseValue * randomFactor);
        
        // Add an anomaly alert in a specific month (for demo purposes)
        const hasAlert = i === 7 && Math.random() > 0.7;
        
        dataPoints.push({
          name: months[i],
          value: value,
          alert: hasAlert ? value : undefined,
          timestamp: new Date(now.getFullYear(), i, 15)
        });
      }
      break;
  }
  
  return dataPoints;
};
