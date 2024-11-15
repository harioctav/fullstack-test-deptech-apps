import React from "react";
import SignUpForm from "./SignUpForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const SignUpPage = () => {
	return (
		<div className="container mx-auto px-4">
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
			</Card>
		</div>
	);
};

export default SignUpPage;
