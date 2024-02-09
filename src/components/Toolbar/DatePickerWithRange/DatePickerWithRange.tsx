import { HTMLAttributes } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { updateDateRange } from '@/feat/dateRange/dateRangeSlice';

export default function DatePickerWithRange({
	className,
}: HTMLAttributes<HTMLDivElement>) {
	const date = useSelector((state: RootState) => state.dateRange);
	const dispatch = useDispatch();

	return (
		<div className={cn('grid gap-2', className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id='date'
						variant={'outline'}
						className={cn(
							'w-[15rem] justify-start text-left font-normal',
							!date && 'text-muted-foreground',
						)}>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, 'LLL dd, y')} -{' '}
									{format(date.to, 'LLL dd, y')}
								</>
							) : (
								format(date.from, 'LLL dd, y')
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0' align='start'>
					<Calendar
						initialFocus
						mode='range'
						defaultMonth={date?.from}
						selected={date}
						onSelect={data => dispatch(updateDateRange(data))}
						numberOfMonths={1}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
