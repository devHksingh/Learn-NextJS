import { NextRequest } from "next/server"
export function GET(){
    // db logic
    return Response.json({
        name:"test",
        email:"test@test.com",
        address: { city: 'Delhi', state: 'Delhi', houseNumber: '21' }
    })
}

export async function POST(req: NextRequest){
    // extract the body
    const body = await req.json()
    // store the body in the database
    console.log(body);
    
    return Response.json({
        message:"You are logged in"
    })
}