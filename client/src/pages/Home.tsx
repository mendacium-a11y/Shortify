import React from 'react'
import Navbar from '@/components/Navbar'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />
      <div className='h-[90vh] bg-transparent flex justify-center items-start'>
        <div className='text-white text-center mt-32 font-sans text-8xl'>
          <p
            className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
            The Fastest Way
          </p>
          <p 
          className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
            To Shorten
          </p>
          <p 
          className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">Links
          </p>
          <Input className='bg-slate-950 border-slate-700 focus:border-slate-500 border-4 mt-20 h-16 px-5' />
          <Button className='rounded-3xl bg-violet-700 hover:bg-white text-white hover:text-black text-xl h-12 w-36'> Generate</Button>
        </div>
      </div>

    </>
  )
}
