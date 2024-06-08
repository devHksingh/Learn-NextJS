import { doSocialLogin } from "@/app/actions";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  return (
    <div className="flex-col border p-6 rounded-lg gap-4 items-center justify-center">
      <h1 className="text-xl">LoginForm</h1>
      <SocialLogin/>
    </div>
  );
};

export default LoginForm;
