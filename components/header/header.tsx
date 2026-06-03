"use server"
import { auth, signOut } from "@/auth";
import getUserById from "@/models/getUserById";

export default async function Header(){
    const session:any  = await auth();
    const user=await getUserById(session?.user?.id);
    return(
        <>
        {session?.user ?
        (
        <>
            <nav className=" py-1 border-y-4 border-y-sky-600 rounded-lg flex items-center justify-between mx-1">
                <div className="inline font-medium text-slate-800 mx-20 text-lg">
                    <div className=" flex justify-around gap-5">
                        <a href="/profile">My Profile</a>
                        <a href="/Main">View Profiles</a>
                        {/* <a href="/Validate">Validate Profiles</a> */}
                        {(session.user.position=="HR")&&(<a href="/createProfile">Create Profile</a>)}
                        
                    </div>
                </div>
                <div className="inline mx-20">
                    <a href="/profile"><img className="inline object-cover h-15 w-15 rounded-full" src={user?.profile_picture!} alt="" /></a>
                    <h4 className="inline">{user?.email}</h4>
                    <form 
                        className="inline"
                        action={async ()=> 
                            {
                            "use server"
                            await signOut();
                            }
                        }>
                        <button className="align-middle bg-sky-600 p-1 px-2 cursor-pointer ml-2 rounded-lg border-black border-2 text-white" type="submit">Log out</button>
                    </form>
                </div>
            </nav>
        </>
        )
        :
        (<></>)}
        </>

    )
}