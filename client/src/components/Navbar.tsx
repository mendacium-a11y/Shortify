import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    // <nav className='bg-slate-950 h-[12vh] my-auto text-white flex items-center'>
      <div className='flex flex-row px-12 text-white py-4 justify-between items-center w-100 bg-black h-[10vh]'>
        <div className='px-10'>
          <h1 className='text-3xl'>Shortify</h1>
        </div>
        <div className='my-auto'>
          <Button className='bg-slate-700 hover:bg-white rounded-3xl mx-2 h-12 w-32 text-white hover:text-black  text-lg' variant="secondary">Sign-up</Button>
          <Button className='bg-violet-700 hover:bg-white rounded-3xl mx-2 h-12 w-32 text-white hover:text-black text-lg' variant="secondary">Login</Button>
        </div>

      </div>
    // </nav>
  )
}
