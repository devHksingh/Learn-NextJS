import LoginForm from "@/components/LoginForm"


const Loginpage = () => {
  return (
    <div className="grid place-content-center mt-10 ">
      <div className="flex justify-center items-center h-screen">
        <div className="flex-col">
          <h1 className="text-center text-4xl mb-4">Login</h1>
          <LoginForm/>
          
        </div>
      </div>
    </div>
  )
}

export default Loginpage