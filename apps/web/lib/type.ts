import { z } from "zod";

export type FormState =
	| {
			errors?: {
				first_name?: string[];
				last_name?: string[];
				email?: string[];
				password?: string[];
				gender?: string[];
				date_of_birth?: string[];
			};
			message?: string;
	  }
	| undefined;

export const SignUpFormSchema = z.object({
	first_name: z
		.string()
		.min(2, {
			message: "First Name must be at least 2 characters long.",
		})
		.trim(),
	last_name: z
		.string()
		.min(2, {
			message: "Last Name must be at least 2 characters long.",
		})
		.trim(),
	email: z.string().email({ message: "Please enter a valid email." }).trim(),
	password: z
		.string()
		.min(8, { message: "Be at least 8 characters long" })
		.regex(/[a-zA-Z]/, {
			message: "Contain at least one letter.",
		})
		.regex(/[0-9]/, {
			message: "Contain at least one number.",
		})
		.regex(/[^a-zA-Z0-9]/, {
			message: "Contain at least one special character.",
		})
		.trim(),
	gender: z.enum(["Male", "Female"], {
		required_error: "Please select a gender.",
	}),
	date_of_birth: z
		.date({
			required_error: "Please select a date of birth.",
		})
		.refine(
			(date) => {
				const age = new Date().getFullYear() - date.getFullYear();
				return age >= 13;
			},
			{ message: "You must be at least 13 years old." }
		),
});
