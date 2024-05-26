import { NextRequest } from "next/server"
import dbConnect from "../../../lib/dbConnect"
import { User } from "../../../model/User"
export function GET(){
    // db logic
    return Response.json({
        name:"test",
        email:"test@test.com",
        address: { city: 'Delhi', state: 'Delhi', houseNumber: '21' }
    })
}

// export async function POST(req: NextRequest){
//     // extract the body
//     const body = await req.json()
//     // store the body in the database
//     console.log(body);
    
//     return Response.json({
//         message:"You are logged in"
//     })
// }

export async function POST(req:NextRequest){

    await dbConnect()

    try {
        const {username,password} = await req.json()

        const isUsernameValid = await User.findOne({username})

        if(isUsernameValid){
            return Response.json(
                {
                  success: false,
                  message: 'Username is already taken',
                },
                { status: 400 }
              );
        }

        const newUser =  User.create({
            username,
            password
        })
        console.log(newUser);
        
        return Response.json({
                    message:"You are logged in"
                })
    } catch (error) {
        console.error('Error registering user:', error);
    return Response.json(
      {
        success: false,
        message: 'Error registering user',
      },
      { status: 500 }
    );
    }
}