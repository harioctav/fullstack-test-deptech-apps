import { getProfile } from "@/lib/actions";
import React from "react";

const Profile = async () => {
	const response = await getProfile();
	return (
		<div>
			Profile
			<p>{JSON.stringify(response)}</p>
		</div>
	);
};

export default Profile;
