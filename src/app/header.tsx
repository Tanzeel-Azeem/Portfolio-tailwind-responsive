import React from 'react'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {Menu} from 'lucide-react';

const Header = () => {
  return (
    <div className='flex justify-between bg-slate-600 '>
        <div>
           {/* ================= logo--------- */}
           <h1 className='text-3xl ml-7 md:ml-11 text-white'>Tanjoo <span className='text-blue-300'>.</span></h1>
        </div>
        <div>
            <ul className='hidden md:block text-xl '>
                <li className=' list-none gap-x-5 flex mr-9 mt-6 underline-nonw '>
                    <Link className='text-white hover:text-slate-400 duration-300' href='/'>Home</Link>
                    <Link className='text-white hover:text-slate-400 duration-300' href='#about'>About</Link>
                    <Link className='text-white hover:text-slate-400 duration-300' href='#contact'>Contact</Link>
                </li>
            </ul>
            <Sheet>
  <SheetTrigger  className='md:hidden mt-5 mr-3 bg-slate-300 hover:bg-slate-400 duration-200 '> <Menu /> </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='text-3xl text-white'>Nav Bar</SheetTitle>
      <SheetDescription >
      <ul className='list-none gap-y-8   mr-9  text-2xl  '>
                <li >
                    <Link className='text-white hover:text-slate-400 duration-300' href='/'>Home</Link></li><br />
                  <li> <Link className='text-white hover:text-slate-400 duration-300' href='#about'>About</Link></li><br />
                   <li>  <Link className='text-white hover:text-slate-400 duration-300' href='#contact'>Contact</Link></li>
                
            </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


        </div>
        
    </div>
  )
}

export default Header