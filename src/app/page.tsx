import {auth, signIn, signOut} from "@/auth";

const Home = async () => {
    const session = await auth();
    return (
        <>
            <div className="container flex items-center justify-between p-3">
                <h1>Kanban task manager</h1>
            {(session && (session?.user)) ?
                (
                    <>
                        <button>Create Board</button>
                        <h2>Welcome {session?.user?.name}</h2>
                        <form
                            action={async () => {
                                "use server"
                                await signOut();
                            }}
                        >
                            <button type="submit" className="bg-black text-white px-3 py-2 rounded">Sign-out</button>
                        </form>
                    </>
                ):
                <form
                    action={async () => {
                        "use server"
                        await signIn("google");
                    }}
                >
                    <button type="submit" className="bg-black text-white px-3 py-2 rounded">Sign-in with Google</button>
                </form>
            }
            </div>
        </>
    )
}
export default Home;
