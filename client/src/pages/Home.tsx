import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { addLink } from "../api/url";
import { QR } from '@/components/qrcode';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Home() {
  const [url, setUrl] = useState<string>('')
  const [qrstate, setQrstate] = useState<string>('hidden')
  const [redirectLink, setRedirectLink] = useState<string>('')


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value)
  }

  const handleClick = async () => {
    const key = await addLink(url)
    if (key) {
      const temp = 'https://www.google.com/' + key.key
      setRedirectLink(temp)
      setQrstate('block')
    }

  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />
      <div className='h-[90vh] bg-transparent flex justify-center items-start'>
        <div className='text-white text-center mt-36 font-sans text-8xl'>
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
          <Input className='bg-slate-950 border-slate-700 focus:border-slate-500 border-4 mt-20 h-16 px-5' onChange={handleInputChange} onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
              handleClick();
            }
          }} />

          
          {/* <div className={`${qrstate}`}>
            <QR qrString={redirectLink} />
            <p className='text-lg'>{redirectLink}</p>
          </div> */}

          <Dialog>
            <DialogTrigger>
              {/* <QR qrString={'https://www.google.com/123456'} /> */}
              <Button className='rounded-3xl bg-violet-700 hover:bg-white text-white hover:text-black text-xl h-12 w-36' onClick={handleClick} > Generate</Button>
            </DialogTrigger>
            <DialogContent className='bg-black border-white'>
              <DialogHeader >
                <DialogTitle>
                <p className='text-lg text-white text-center'>'https://www.google.com/'</p>
                </DialogTitle>
                <DialogDescription>
                  <QR qrString={'https://www.google.com/123456'} />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

        </div>
      </div >

    </>
  )
}
