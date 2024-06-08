import { doLogout } from "@/app/actions"


function Logout() {
  return (
    <form action={doLogout}>
        <button type="submit"
        className="bg-sky-400 my-2 text-slate-900 font-medium p-2 rounded hover:bg-sky-600"
        >
            Logout
        </button>
    </form>
  )
}

export default Logout