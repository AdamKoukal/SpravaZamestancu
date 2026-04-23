


import { signIn } from "@/auth"



export default function Login()
{
    

    return<>
    <div className="credentialsBox">
        <form 
        action={async (formData) => {
                "use server"
                await signIn("credentials", formData)
                }}  
         >
            <label className="inline" htmlFor="emailInput">Email</label>
            <input className="block border-black border-1" id="emailInput" name="email" type="text"  />

            <label className="inline" htmlFor="passwordInput">Password</label>
            <input className="block border-black border-1" id="passwordInput" name="password" type="text" />

            <button className="block border-black border-1" type="submit">Login</button>
            <a className="inline" href="/register">Don' t have an account? Register now!</a>
        </form>
    </div> 
    </>
    
}