import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import React from "react";
import SignInForm from "./SignInForm";

const SignInPage = () => {
	return (
		<div className="container mx-auto px-4">
			<Card className="w-full max-w-[480px] mx-auto my-8">
				<CardHeader>
					<CardTitle className="text-2xl md:text-3xl">Sign In Page</CardTitle>
					<CardDescription className="text-sm md:text-base">
						Login to your dashboard with Email and Password
					</CardDescription>
				</CardHeader>
				<CardContent>
					<SignInForm />
				</CardContent>
			</Card>
		</div>
	);
};

export default SignInPage;
