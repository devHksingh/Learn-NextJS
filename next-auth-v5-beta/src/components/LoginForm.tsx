const LoginForm = () => {
  return (
    <div>
      <h1>LoginForm</h1>
      <form action="">
        <button 
        type="submit"
        name="action"
        value= "google"
        className="border rounded-xl bg-sky-400 text-black px-4 py-1">
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
