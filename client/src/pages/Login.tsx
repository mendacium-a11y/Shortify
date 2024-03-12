import Navbar from "@/components/Navbar";

export default function Login() {
  return (<>
    <Navbar />
    <div className="absolute -z-50 inset-0 text-white h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex justify-center items-center"></div>
    <div className="flex justify-center items-center h-[80vh] text-white">
      <div className='h-[60vh] w-[60vh] rounded-3xl flex justify-center py-5 flex-col ' >
        <form action="submit" className="flex flex-col p-4 gap-2">
          <label htmlFor="user" className="text-2xl">UserName</label>
          <input type="text" id="user" className="w-4/5 bg-transparent border-b-4 pb-6 focus:outline-none focus:border-b-8" />
          <label htmlFor="pass" className="pt-6 text-2xl">Password</label>
          <input type="text" id="user" className="w-4/5 bg-transparent border-b-4 pb-6 focus:outline-none focus:border-b-8" />
          <button className="bg-violet-700 w-4/5 p-4 mt-10 rounded-2xl">
            Login
          </button>
        </form>
        <p className="px-4">Not logged in? <a href="" className="text-blue-500">Sign Up</a></p>
      </div>
    </div>
  </>
  )
}
