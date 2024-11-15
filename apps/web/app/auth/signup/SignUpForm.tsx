"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const SignUpForm = () => {
	const [date, setDate] = React.useState<Date>();
	const [selectedYear, setSelectedYear] = React.useState<number>(
		new Date().getFullYear()
	);
	const [selectedMonth, setSelectedMonth] = React.useState<number>(
		new Date().getMonth()
	);

	const years = Array.from({ length: 124 }, (_, i) => 2024 - i);
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const handleYearChange = (year: string) => {
		const newDate = date ? new Date(date) : new Date();
		newDate.setFullYear(parseInt(year));
		setSelectedYear(parseInt(year));
		setDate(newDate);
	};

	const handleMonthChange = (month: string) => {
		const newDate = date ? new Date(date) : new Date();
		newDate.setMonth(parseInt(month));
		setSelectedMonth(parseInt(month));
		setDate(newDate);
	};

	return (
		<div className="grid w-full items-center gap-4">
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="first_name">First Name</Label>
				<Input
					id="first_name"
					name="first_name"
					placeholder="Enter your first name"
				/>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="last_name">Last Name</Label>
				<Input
					id="last_name"
					name="last_name"
					placeholder="Enter your last name"
				/>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="email">Email</Label>
				<Input id="email" name="email" placeholder="Enter your email" />
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="password">Password</Label>
				<Input id="password" name="password" type="password" />
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="gender">Gender</Label>
				<Select name="gender">
					<SelectTrigger>
						<SelectValue placeholder="Select a gender" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Genders</SelectLabel>
							<SelectItem value="Male">Male</SelectItem>
							<SelectItem value="Female">Female</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="date_of_birth">Date of Birth</Label>
				<input
					type="hidden"
					name="date_of_birth"
					value={date ? date.toISOString() : ""}
				/>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className={cn(
								"w-full justify-start text-left font-normal",
								!date && "text-muted-foreground"
							)}
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{date ? format(date, "PPP") : <span>Pick a date</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0" align="start">
						<div className="flex gap-2 p-3">
							<Select
								onValueChange={handleYearChange}
								value={selectedYear.toString()}
							>
								<SelectTrigger className="w-[120px]">
									<SelectValue placeholder="Year" />
								</SelectTrigger>
								<SelectContent>
									{years.map((year) => (
										<SelectItem key={year} value={year.toString()}>
											{year}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								onValueChange={handleMonthChange}
								value={selectedMonth.toString()}
							>
								<SelectTrigger className="w-[120px]">
									<SelectValue placeholder="Month" />
								</SelectTrigger>
								<SelectContent>
									{months.map((month, index) => (
										<SelectItem key={month} value={index.toString()}>
											{month}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<Calendar
							mode="single"
							selected={date}
							onSelect={setDate}
							month={new Date(selectedYear, selectedMonth)}
							disabled={(date) =>
								date > new Date() || date < new Date("1900-01-01")
							}
							className="rounded-md"
						/>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	);
};

export default SignUpForm;
