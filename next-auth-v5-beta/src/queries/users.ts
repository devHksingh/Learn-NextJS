import { User } from "@/model/user-model";



export async function createUser(user: any){
    try {
        await User.create(user)
    } catch (error) {
        throw new Error("Something went wrong while creating user in DB")
    } 
}