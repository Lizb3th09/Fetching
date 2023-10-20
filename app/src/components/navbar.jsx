'use client'
import React, { useState } from "react";
import { Popover } from '@headlessui/react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black w-full  ">
      <header>

      <Popover className='hidden md:flex  justify-center p-11  items-center h-16 bg-white border-2 border-white border-b-black'>
  <div className="flex items-center">

    <h1 className="font-bold text-2xl text-center text-black p-4 font-serif "> CUIDADO CON EL PERRO</h1> </div>
    <Image src={'/logo.svg'} width={60} height={60} alt='logo' style={{ width: 60, height: 60 }} />

  <div className="hidden sm:flex space-x-9 justify-between m-6 p-4 font-serif">

    <Link href="/acercaDe"><p className="text-white bg-black rounded-md w-20 text-center h-7  hover:bg-gray-700  "> Acerca</p> </Link>
    <Link href="/fakestoreapi"><p className="text-white bg-black rounded-md w-20 text-center h-7 hover:bg-gray-700   "> Ropa</p></Link>
    <Link href="/dummyapi"><p className="text-white bg-black rounded-md w-20 text-center h-7 hover:bg-gray-700   ">Mas</p></Link>
    <Link href="/"><p className="text-white bg-black rounded-md w-20 text-center h-7 hover:bg-gray-700   "> Home</p></Link>

  </div>
</Popover>



        {/* Responsive Menu */}
        <Popover className="md:hidden text-white  flex">

    
        <div className="flex items-center  ">
    <h1 className="font-bold text-2xl text-center   font-serif p-11"></h1>
  </div>


          <Popover.Button >
            <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </Popover.Button>




          <Popover.Panel className={`bg-gray-900 absolute h-2/6 w-2/6  m-5 rounded-md font-serif ${isMenuOpen ? "block" : "hidden"}`}>


          <div className="text-white justify-content flex-end  p-3">  
            <button onClick={closeMenu}>
              <CloseIcon /> 
            </button>
          </div>


            <div className='flex flex-col  text-white h-full  text-1xl'>
            <Link href={'/acercaDe'} className=" inline-flex w-full justify-center rounded-md  py-2 text-1xl font-medium  hover:bg-sky-950 bg-opacity-25"><ArrowForwardIosIcon fontSize="small"/> Acerca de</Link>
            <Link href={"/fakestoreapi"}  className=' font-bold  inline-flex w-full justify-center rounded-md py-2  hover:bg-sky-950  bg-opacity-25'><ShoppingCartIcon fontSize="large"/>Ropa</Link>
            <Link href={"/dummyapi"}><p className="font-bold  inline-flex w-full justify-center rounded-md py-2   hover:bg-sky-950  bg-opacity-25">Mas</p></Link>
            <Link href={"/"}><p className="font-bold  inline-flex w-full justify-center rounded-md py-2  hover:bg-sky-950  bg-opacity-25  "> Home</p></Link>
            </div>

          </Popover.Panel>
        </Popover>
      </header>
    </nav>
  );
};

export default NavBar;