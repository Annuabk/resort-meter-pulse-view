
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartData, DateRangeOption, MeterCategory } from '@/types/dashboard';

interface MeterChartProps {
  data: ChartData[];
  category: MeterCategory;
  unit: string;
  dateRange: DateRangeOption;
}

export const MeterChart: React.FC<MeterChartProps> = ({
  data,
  category,
  unit,
  dateRange
}) => {
  // Get chart color based on meter type
  const getChartColor = () => {
    switch (category) {
      case 'power':
        return '#F97316';
      case 'water':
        return '#0EA5E9';
      case 'diesel':
        return '#EF4444';
      case 'gas':
        return '#10B981';
      case 'generator':
        return '#8B5CF6';
      case 'boiler':
        return '#6B7280';
      case 'solar':
        return '#FBBF24';
      default:
        return '#6B7280';
    }
  };
  
  // Format X-axis labels based on date range
  const formatXAxis = (value: string) => {
    if (dateRange === 'Today') {
      return value.slice(0, 5); // Show hour:minute
    } else if (dateRange === 'This Week') {
      return value.slice(0, 3); // Show day abbreviation
    } else {
      return value.slice(0, 5); // Show month/day or first 5 chars
    }
  };

  const chartColor = getChartColor();
  const chartConfig = {
    main: { color: chartColor },
    alert: { color: '#EF4444' }
  };

  return (
    <ChartContainer
      config={chartConfig}
      className="h-full w-full"
    >
      <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="name" 
          tick={{ fontSize: 11 }} 
          tickFormatter={formatXAxis}
          axisLine={false}
          tickLine={false}
        />
        <YAxis 
          tick={{ fontSize: 11 }} 
          width={25} 
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              hideIndicator={false}
              labelKey="name"
              indicator="dot"
            />
          }
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke={chartColor} 
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5, stroke: chartColor, strokeWidth: 1, fill: 'white' }}
        />
        {data.some(item => item.alert) && (
          <Line 
            type="monotone" 
            dataKey="alert" 
            stroke="#EF4444" 
            strokeWidth={0} 
            dot={({ alert }) => alert ? { r: 4, fill: "#EF4444" } : false} 
          />
        )}
      </LineChart>
    </ChartContainer>
  );
};
