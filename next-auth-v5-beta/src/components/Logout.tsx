import { doLogout } from "@/app/actions"


function Logout() {
  return (
    <form action={doLogout}>
        <button type="submit"
        className="bg-sky-400  text-slate-900 font-medium px-2 py-1 rounded hover:bg-sky-600"
        >
            Logout
        </button>
    </form>
  )
}

export default Logout