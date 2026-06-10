"use server"
import { Interests } from "@/generated/prisma/client";
import prisma from "./prisma";

export default async function addInterest(interest:Interests){

    let a={user_id:interest.user_id,title:interest.title,description:interest.description}
    const addedInterest= prisma.interests.create(
        {
            data:a,
        }
    )
    return addedInterest;
}