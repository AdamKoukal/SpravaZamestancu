type ProfileProps = {
  first_name: string;
  last_name:string;
  salary: number;
  position: string;
  birth_date:string;
};
import URLcheck from "@/models/URLcheck";
export default function ProfileCard({props}:any)
{
    return(<>
    
    <div className="w-full h-75 border-2 border-black rounded-lg">
        {props.valid?
            <h4 className="absolute rounded-lg p-1 m-1 bg-green-400 text-white ">Valid</h4>
        :props.filled?
        <h4 className="absolute rounded-lg p-1 m-1 bg-orange-400 text-white ">Filled</h4>
            
        :   
            <h4 className="absolute rounded-lg p-1 m-1 bg-red-500 text-white ">Waiting</h4>
        }
        
        <a href={"../profile/"+props.id}>
            <img className="w-full rounded-lg object-cover h-40 "src={props.banner} alt="" />
            <div className="absolute">
            <img className="rounded-full ml-5 h-25 w-25 mt-[-50%]" src={props.profile_picture} alt="" />
            
            </div>
        </a>
        <h2 className="mt-[-1.5em] text-white ml-31">{props.first_name+" "+props.last_name}</h2>
        <h3 className="ml-5 mt-10">Email: {props.email}</h3>
        <h3 className="ml-5">Position: {props.position}</h3>        
    </div>
    
    </>)
}