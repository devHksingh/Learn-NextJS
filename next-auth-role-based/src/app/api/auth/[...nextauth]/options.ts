import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GithubProvider({
            profile(profile) {
                console.log("Profile github", profile);

                let userRole = "Github User";
                if (profile?.email === "sillylamport@imcourageous.com") {
                    userRole = "admin";
                }
                return {
                    ...profile,
                    id: profile.id.toString(), // Convert id to string
                    role: userRole
                };
            },
            clientId: "",
            clientSecret: ""
        }),
        // Add GoogleProvider or any other providers here if needed
    ]
};
