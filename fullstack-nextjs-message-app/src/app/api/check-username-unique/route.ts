import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import {z} from "zod"
import {usernameValidation} from "@/schemas/signUpSchema"

const UserNameQuerySchema = z.object({
    username:usernameValidation
})

export async function GET(request:Request) {
    
    await dbConnect()
    // localhost:3000/api/cuu?username=jhon?isVerified=true
    try {

        const {searchParams} = new URL(request.url)
        const queryParam ={
            username: searchParams.get('username')
        }
        // validate with zod
        const result = UserNameQuerySchema.safeParse(queryParam)

        console.log("result of User Name QuerySchema ",result);
        if(!result.success){
            const usernameErrors = result.error.format().username?._errors || []
            return Response.json({
                success:false,
                message:usernameErrors?.length >0?usernameErrors.join(','): "Invalid query parameters"

            },{status:400})
        }

        const {username} = result.data

        const existingVerifiedUser =  await UserModel.findOne({username,isVerified:true})
        if(existingVerifiedUser){
            return Response.json({
                success:false,
                message:"Username is already taken"

            },{status:404})
        }

        return Response.json({
            success:true,
            message:"Username is avaliable"

        },{status:404})

    } catch (error) {
        console.error("Error occured while checking username",error)
        return Response.json(
            {
                success:false,
                message:"Error occured while checking username "
            },
            {
                status:500
            }
        )
    }
}