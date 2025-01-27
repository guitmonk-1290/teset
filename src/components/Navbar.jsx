import { React, useState } from 'react'
import { close, menu, user } from "../assets"
import { navLinks, signed_navLinks } from "../constants"
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = ({ colorChange, signed }) => {

  const [toggle, setToggle] = useState(false);

  if (!signed) {
    return (
      <nav className='w-full flex py-6 justify-between items-center navbar'>
        <a href="/" className={`font-poppins cursor-pointer text-[28px] font-bold
              ${colorChange ? "text-blue-800" : "text-white"} mr-10`}>
          accredian
        </a>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins
              font-semibold cursor-pointer text-[16px]
              ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
              ${colorChange ? "text-blue-800" : "text-white"} mr-10`}
            >
              <a href={`http://localhost:5173/${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}

          <button
            className='bg-blue-800 text-white px-4 py-1 rounded-2xl'
          >
            LogIn
          </button>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
          object-contain"
            onClick={() => setToggle((prev) => (!prev))} />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins
                  font-normal cursor-pointer text-[16px]
                  ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
                  ${colorChange ? "text-blue-800" : "text-white"}`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </nav>
    )
  }
  else {
    return (
      <nav className='w-full flex py-6 justify-between items-center navbar'>
        <a href="/" className={`font-poppins
              font-normal cursor-pointer text-[22px]
              ${colorChange ? "text-blue-800" : "text-white"} mr-10`}>
          accredian
        </a>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {signed_navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins
              font-normal cursor-pointer text-[16px]
              ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
              ${colorChange ? "text-blue-800" : "text-white"} mr-10`}
            >
              <a href={`http://localhost:5173${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
          <li
            key={user}
            className={`cursor-pointer  mr-10`}
          >
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <Link to="/account">
                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </Link>
            </div>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 object-contain mr-8 ml-8">
            <Link to="/account">
              <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
          <img src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
          object-contain"
            onClick={() => setToggle((prev) => (!prev))} />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {signed_navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins
                  font-normal cursor-pointer text-[16px]
                  ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
                  ${colorChange ? "text-blue-800" : "text-white"}`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </nav>
    )
  }
}

export default Navbar