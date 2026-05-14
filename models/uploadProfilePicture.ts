import {supabase} from "../lib/supabase"

export default async function uploadProfilePicture(profile_picture:any){
    const path=(await supabase.storage.from("profile_pictures").upload(crypto.randomUUID(),profile_picture)).data?.path;
    const url=await supabase.storage.from("profile_pictures").getPublicUrl(path).data.publicUrl;

    return url;
    
}