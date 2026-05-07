"use server"

import getUserById from "@/models/getUserById";
import updateUser from "@/models/updateUser";
import { redirect } from "next/navigation";


export default async function FillProfile({props}:any)
{

        async function handleSubmit(e:any)
        {
            
            e.preventDefault();
            /*const user=await createUser({first_name:first_name,last_name:last_name,email:email,birth_date:birth_date});
            setLink("/fillProfile/"+user.id);
            console.log(user);*/
            
    
        }
        
    
    
        return(
        <div className="credentialsBox flex justify-center items-center h-screen">
            <div className="border-4 border-sky-600 rounded-lg p-10">
            <h1 className="text-6xl font-medium text-center mb-10">Fill Your Profile</h1>
            <form action={async(formData)=>{
                "use server"
                
                const user={valid:props.valid,first_name:formData.get("first_name"),last_name:formData.get("last_name"),
                    email:formData.get("email"),birth_date:new Date(formData.get("birth_date")).toISOString(),salary:props.salary,
                    filled:true,address:formData.get("address"),nationality:formData.get("nationality")};

                console.log(user);
                await updateUser(props.id,user);
                
                redirect("http://localhost:3000/fillProfile/"+props.id);
                

            }} method="POST">
                <div className="grid grid-cols-2 gap-2">
                <div className="block">
                    <label className="inline text-lg font-medium" htmlFor="firstNameInput">First Name</label>
                    <input name="first_name" defaultValue={props.first_name} className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="firstNameInput" type="text"/>
                </div>

                <div className="block">
                    <label className="inline text-lg font-medium" htmlFor="lastNameInput">Last Name</label>
                    <input name="last_name" defaultValue={props.last_name} className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" type="text" />
                </div>

                <div className="block">
                    <label className="inline text-lg font-medium" htmlFor="emailInput">Email</label>
                    <input name="email" defaultValue={props.email} className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" type="email"/>
                </div>
                
                <div className="block">
                    <label className="inline text-lg font-medium" htmlFor="dateOfBirthInput">Date Of Birth</label>
                    <input name="birth_date" defaultValue={new Date(props.birth_date).toISOString().split("T")[0]} className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="dateOfBirthInput" type="date"/>
                </div>

                <div className="block">
                    <label className="inline text-lg font-medium" htmlFor="addressInput">Full Home Address</label>
                    <input name="address" defaultValue={props.address} className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="addressInput" type="text"/>
                </div>

                <div className="block">
                    <label className="inline text-lg font-medium" htmlFor="nationalityInput">Nationality</label>
                    <input name="nationality" defaultValue={props.nationality} className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="nationalityInput" type="text"/>
                </div>
                </div>

                <button className="bg-teal-300 p-1 px-2 cursor-pointer mt-2 rounded-lg border-black border-2 text-black font-medium" type="submit">Update Profile</button>
            </form>
            </div>
        </div>)
}