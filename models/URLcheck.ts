export default function URLcheck(image)
    {
        if(typeof image=="string")
        {
            return image;
        }
        else{
            return URL.createObjectURL(image);
        }
    }
