"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constants";
import { FormState, SignUpFormSchema } from "./type";

export async function register(
	state: FormState,
	formData: FormData
): Promise<FormState> {
	const dateStr = formData.get("date_of_birth") as string;

	const validationFields = SignUpFormSchema.safeParse({
		first_name: formData.get("first_name"),
		last_name: formData.get("last_name"),
		email: formData.get("email"),
		password: formData.get("password"),
		date_of_birth: dateStr,
		gender: formData.get("gender"),
	});

	if (!validationFields.success) {
		return {
			errors: validationFields.error.flatten().fieldErrors,
		};
	}

	const response = await fetch(`${BACKEND_URL}/auth/signup`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(validationFields.data),
	});
	if (response.ok) {
		redirect("/auth/signin");
	} else
		return {
			message:
				response.status === 409
					? "The user is already existed!"
					: response.statusText,
		};
}
