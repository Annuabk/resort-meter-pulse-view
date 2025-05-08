
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Fuel } from 'lucide-react';
import { 
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@/components/ui/table';
import { MeterReading } from '@/types/dashboard';
import { cn } from '@/lib/utils';

interface MeterReadingsTableProps {
  readings: MeterReading[];
  isSpecialMeter: boolean;
  hasReadings: boolean;
  meterUnit: string;
}

export const MeterReadingsTable: React.FC<MeterReadingsTableProps> = ({
  readings,
  isSpecialMeter,
  hasReadings,
  meterUnit
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date & Time</TableHead>
            <TableHead>Reading Value</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Created by</TableHead>
            <TableHead>Remarks / Top-up</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {readings.map((reading, index) => (
            <TableRow 
              key={index} 
              className={cn(
                "hover:bg-gray-50 dark:hover:bg-gray-700",
                !hasReadings && "opacity-50 italic"
              )}
            >
              <TableCell>
                {reading.datetime.toLocaleString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {formatDistanceToNow(reading.datetime, { addSuffix: true })}
                </div>
              </TableCell>
              <TableCell className="font-medium">{reading.value}</TableCell>
              <TableCell>{reading.unit}</TableCell>
              <TableCell>{reading.createdBy}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <span>{reading.remarks || '-'}</span>
                  {/* Show fuel icon if this was a top-up entry (mock data for now) */}
                  {index === 1 && isSpecialMeter && (
                    <div className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Fuel className="h-3 w-3 mr-1" />
                      <span>50 Ltr</span>
                    </div>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
