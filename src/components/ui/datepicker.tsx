import  { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './calendar';
import { Matcher } from "react-day-picker";
import { format } from "date-fns";

type DatepickerProps = {
    className?: string;
    title?: string;
    date?: Date;
    handleDateSelection?: (value: Date) => void;
    triggerClassName?: string;
    disabled?: Record<string, any>;
    side?: "top" | "right" | "bottom" | "left";
    id?: string;
    toYear?: number;
    fromYear?: number;
    isShowYears?: boolean;
  };
  
  const Datepicker = ({
    className = "",
    title = "",
    date,
    handleDateSelection,
    triggerClassName,
    disabled,
    side = "top",
    id,
    fromYear,
    toYear,
    isShowYears = false,
  }: DatepickerProps) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
    const setDate = (selectedDate: typeof date) => {
      if (selectedDate) {
        handleDateSelection?.(selectedDate);
      }
      setIsPopoverOpen(false);
    };
  
    const fromYearDate = (isShowYears && (fromYear || 2009)) || undefined;
    const toYearDate = (isShowYears && (toYear || 2030)) || undefined;
  
    return (
      <div className={cn("flex items-center gap-sm", className)}>
        {title && <p>{title}</p>}
        <Popover
   
          modal
     
        >
          <PopoverTrigger
            asChild
    
          >
            <Button
              id={id}
              className={cn(
                "w-[200px] !max-w-full justify-start text-left font-hairline bg-white border border-slate-500 dark:border-slate-500 dark:bg-gray-500 dark:text-white dark:hover:bg-slate-700",
                triggerClassName,
                !date && "text-muted-foreground",
              )}
              variant='secondary'
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              {date ? format(date, "PPP") : <span>Pick a Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="bg-white dark:bg-gray-500"
            align="center"
            side={side}

          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={disabled as Matcher}
              fromYear={fromYearDate}
              toYear={toYearDate}
              className="max-h-[332px] min-w-[290px]"
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  };
  
  export default Datepicker;
  
