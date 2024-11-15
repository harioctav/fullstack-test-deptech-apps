import Link from "next/link";
import React from "react";
import SignUpForm from "./SignUpForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SubmitButton from "@/components/SubmitButton";

const SignUpPage = () => {
	return (
		<div className="container mx-auto px-4">
			<form>
				<Card className="w-full max-w-[480px] mx-auto my-8">
					<CardHeader>
						<CardTitle className="text-2xl md:text-3xl">Sign Up Page</CardTitle>
						<CardDescription className="text-sm md:text-base">
							Create account with Email and Password
						</CardDescription>
					</CardHeader>
					<CardContent>
						<SignUpForm />
					</CardContent>
					<CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
						<Button asChild variant={"outline"} className="w-full sm:w-auto">
							<Link href={"/auth/signin"}>Login</Link>
						</Button>
						<SubmitButton>Register Now</SubmitButton>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
};

export default SignUpPage;
