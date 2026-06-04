
import {supabase} from "../lib/supabase"

export default async function uploadBanner(banner:any)
{
    const path=""+(await supabase.storage.from("banners").upload(crypto.randomUUID(),banner)).data?.path;
    const url=await supabase.storage.from("banners").getPublicUrl(path).data.publicUrl;

    return url;
    
}