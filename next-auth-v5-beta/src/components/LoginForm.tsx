import { doSocialLogin } from "@/app/actions";

const LoginForm = () => {
  return (
    <div className="flex-col border p-6 rounded-lg gap-4 items-center justify-center">
      <h1 className="text-xl">LoginForm</h1>
      <form action={doSocialLogin}>
        <button 
        type="submit"
        name="action"
        value= "google"
        className="border rounded-xl bg-sky-400 text-black px-4 py-1 mr-4 mt-4">
          Sign In With Google
        </button>
        <button 
        type="submit"
        name="action"
        value="github"
        className="border rounded-xl bg-lime-400 text-black px-4 py-1">
        Sign In With GitHub</button>
      </form>
    </div>
  );
};

export default LoginForm;
