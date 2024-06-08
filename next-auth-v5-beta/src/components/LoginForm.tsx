import { doSocialLogin } from "@/app/actions";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  return (
    <div className="flex-col border p-6 rounded-lg gap-4 items-center justify-center">
      <h1 className="text-xl">LoginForm</h1>
      <form className="flex flex-col gap-2 mt-6">
        
          <label className="text-xl font-semibold text-pretty text-gray-400">Email Address:</label>
          <input
          className="border border-gray-400 rounded-lg p-2 text-black font-medium"
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          />
        
        
          <label className="text-xl font-semibold text-pretty text-gray-400">Password:</label>
          <input
          className="border border-gray-400 rounded-lg p-2 text-black font-medium"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          />

          <button
          type="submit"
          className="m-4 rounded-xl py-2 capitalize bg-orange-400 text-black hover:bg-lime-600"
          >
            Ceredentioal login
          </button>
        
      </form>
      <SocialLogin/>
      
    </div>
  );
};

export default LoginForm;
