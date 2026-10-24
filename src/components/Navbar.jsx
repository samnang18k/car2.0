import React from 'react'
import { Link,Links,NavLink } from 'react-router-dom'
import logo1 from '../assets//pic/logo1.png'
import Login from '../pages/Login'


const Navbar = () => {
    const NavItems=[
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Inventory',   
            path:'/inventory'
        },{
            name:'Shop',
            path:'/shop'
        },
        {
            name:'Services',
            path:'/services'
        },
        {
            name:'About',
            path:'/about'
        },
        {
            name:'Contact',
            path:'/contact'
        }
    ]
  return (
    <nav className='font-[Lexend] bg-white text-gray-800 p-4 px-12 flex justify-between items-center shadow-md'>
        <div className='text-xl font-bold'>
            <Link to='/'>
            <img src={logo1} alt='Logo' className='h-10' />
            </Link>
        </div>
        <ul className="flex space-x-4 gap-8">
      {NavItems.map((item, index) => (
        <li key={index} className="font-medium text-base flex items-center justify-center "> 
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-blue-500 hover:text-blue-700"
                  : "text-gray-800 hover:text-gray-600"
              }`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
   <Link to='/login' className='bg-blue-500 text-white px-4 py-2 rounded
             cursor-pointer hover:bg-blue-600
             transition-colors duration-300'>
       Login 
   </Link>
    </nav>
  )
}

export default Navbar
