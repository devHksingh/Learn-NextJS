
export function GET(){
    // db logic
    return Response.json({
        name:"test",
        email:"test@test.com",
        address: { city: 'Delhi', state: 'Delhi', houseNumber: '21' }
    })
}