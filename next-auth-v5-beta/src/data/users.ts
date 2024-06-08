const users = [
    {
       id:"123",
       email:"test@test.com",
       password:"password"
    },
    {
       id:"246",
       email:"one@test.com",
       password:"password"
    },
    {
       id:"446",
       email:"two@test.com",
       password:"password"
    },
    {
       id:"224",
       email:"three@test.com",
       password:"password"
    }
]

export const getUserByEmail = (email: string) =>{
    const found = users.find(user => user.email === email)
    return found
}