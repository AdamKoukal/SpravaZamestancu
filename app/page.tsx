import { supabase } from "./lib/supabase";
import Login from "./login";



export default function Home() 
{

  const test=async ()=>
    {
      console.log("a");
      const{data, error}= await supabase.from("TEST").insert({Name:"t2"});
    console.log(error);
      if(data) console.log(data);
      if(error) console.log(error);
    };
    test();
  return (
    <>
    <h1>asdsad</h1>
        <Login />
    </>
  );
}


