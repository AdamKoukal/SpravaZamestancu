type ProfileProps = {
  first_name: string;
  last_name:string;
  salary: number;
  position: string;
  birth_date:string;
};

export default function ProfileCard({props}:any)
{
    return(<>
    
    <div className="w-full h-75 border-2 border-black rounded-lg">
        <a href={"../profile/"+props.id}>
            <img className="w-full rounded-lg object-cover h-40 "src="https://www.prosci.com/hubfs/worldwide-hero-banner-1920x700%20(1)-1.webp" alt="" />
            <div className="absolute">
            <img className="ml-5 w-25 mt-[-50%]" src="https://cdn-icons-png.flaticon.com/512/12225/12225935.png" alt="" />
            
            </div>
        </a>
        <h2 className="mt-[-1.5em] text-white ml-31">{props.first_name+" "+props.last_name}</h2>
        <h3 className="ml-5 mt-10">Salary: {props.salary}</h3>
        <h3 className="ml-5">Position: {props.position}</h3>
        
    </div>
    
    </>)
}