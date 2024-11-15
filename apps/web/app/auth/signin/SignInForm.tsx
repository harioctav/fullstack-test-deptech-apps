"use client";

import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";

const SignInForm = () => {
	const [state, action] = useFormState(login, undefined);
	return (
		<form action={action}>
			<div className="grid w-full items-center gap-4 mb-8">
				{state?.message && (
					<span className="text-sm text-red-500">{state.message}</span>
				)}
				<div className="flex flex-col space-y-1.5">
					<Label htmlFor="email">Email</Label>
					<Input id="email" name="email" placeholder="account@example.com" />
					{state?.errors?.email && (
						<span className="text-sm text-red-500">{state.errors.email}</span>
					)}
				</div>

				<div className="flex flex-col space-y-1.5">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						name="password"
						type="password"
						placeholder="*******"
					/>
					{state?.errors?.password && (
						<span className="text-sm text-red-500">
							{state.errors.password}
						</span>
					)}
				</div>
			</div>
			<div className="flex flex-col sm:flex-row justify-between gap-4">
				<Button asChild variant={"outline"} className="w-full sm:w-auto">
					<Link href={"/auth/signup"}>Create new Account</Link>
				</Button>
				<SubmitButton>Sign In</SubmitButton>
			</div>
		</form>
	);
};

export default SignInForm;
