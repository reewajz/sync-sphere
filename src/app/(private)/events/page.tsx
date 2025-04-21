import { auth } from "@clerk/nextjs/server";

export default function EventsPage() {
    const { userId, redirectToSignIn } = auth()

    if (userId == null) return redirectToSignIn()


    return <h1>Events Page</h1>;
}