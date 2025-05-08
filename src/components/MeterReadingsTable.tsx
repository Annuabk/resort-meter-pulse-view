
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
            {isSpecialMeter && <TableHead>Running Hours</TableHead>}
            <TableHead>Reading Value</TableHead>
            {isSpecialMeter && <TableHead>Power Generated</TableHead>}
            <TableHead>Unit</TableHead>
            {isSpecialMeter && <TableHead>Fuel Consumption</TableHead>}
            <TableHead>Created by</TableHead>
            {!isSpecialMeter && <TableHead>Remarks / Top-up</TableHead>}
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
              
              {/* Running Hours (special meters only) */}
              {isSpecialMeter && (
                <TableCell>
                  {index === 0 ? '2H 30M' : '1H 45M'}
                </TableCell>
              )}
              
              {/* Reading Value */}
              <TableCell className="font-medium">{reading.value}</TableCell>
              
              {/* Power Generated (special meters only) */}
              {isSpecialMeter && (
                <TableCell>
                  {index === 0 ? '500' : '350'}
                </TableCell>
              )}
              
              {/* Unit */}
              <TableCell>{reading.unit}</TableCell>
              
              {/* Fuel Consumption (special meters only) */}
              {isSpecialMeter && (
                <TableCell>
                  {index === 0 ? '600' : '450'}
                </TableCell>
              )}
              
              {/* Created By with Remarks underneath */}
              <TableCell>
                <div>{reading.createdBy}</div>
                {reading.remarks && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Remarks: {reading.remarks}
                  </div>
                )}
              </TableCell>
              
              {/* Remarks/Top-up column (non-special meters only) */}
              {!isSpecialMeter && (
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <span>{reading.remarks || '-'}</span>
                    {/* Show fuel icon if this was a top-up entry */}
                    {index === 1 && (
                      <div className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Fuel className="h-3 w-3 mr-1" />
                        <span>50 Ltr</span>
                      </div>
                    )}
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
