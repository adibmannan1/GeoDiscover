import React from "react";
import UserList from "../components/UserList";

const User = () => {
	const USERS = [
		{
			id: "u1",
			name: "Chris Mark",
			image:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80",
			places: "3",
		},
	];
	return <UserList items={USERS} />;
};

export default User;
