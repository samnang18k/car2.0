import { Form, Link } from 'react-router-dom'
import React, { useState } from 'react'
import online from '..//assets/pic/online.svg'
import Camflag from '..//assets/pic/Camflag.png'

import { User,Mail, Eye, EyeOff } from 'lucide-react'


const Register = () => {
  const [Name , setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword , setConfirmPassword] = useState("");

  const [ShowPassword , setShowPassword] = useState(false);
   const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [values, setValues] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

  const handleChange = (e) => {
    e.preventDefault();
  setValues({
    ...values,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit =(e) => {
    
       e.preventDefault();
       localStorage.setItem ("user" , JSON.stringify(values));
       console.log(localStorage)
       setValues(initialValues);
       alert("success");
       

  }

  return (
    <div className='min-h-screen bg-[#FFF8F7] flex items-center justify-center p-4 font-[inter]'>
     <div className='bg-white rounded-3xl shadow-xl flex items-center justify-center md:flex-row max-w-4xl w-full  min-h-[550px] '>
      <div className='w-1/2 items-center justify-center '>
        <img src={online} alt="" className='object-cover w-xs ml-8'/>
      </div>
      <form className='w-1/2 relative flex flex-col min-h-137.5 '
        onSubmit={handleSubmit}
      >
        <div className='absolute right-8 top-8 flex '>
          <select name="switch" id="" className='text-blue-300 w-13 text-sm font-medium outline-0 cursor-pointer'>
          
          <option value="" className=''>KH <img src={Camflag} alt="" className='object-cover '/></option>
          <option value="">ENG</option>
        </select>
        </div>
        <h3 className='mt-10 text-2xl font-medium text-gray-800'>Register</h3>
        <span className='text-gray-500'>Create your new account.</span>

        <div className='flex flex-col justify-start mt-5 gap-1' >
          <label htmlFor="name" className='text-gray-400 text-sm'>Name</label>
          <div className='relative w-fit rounded-xs flex  text-center items-center '>
            <input type="text"
                   name='name'
                   placeholder='input your name'
                   onChange={handleChange}
                   className='py-2 px-3 pr-12  w-85 rounded-sm text-sm text-gray-800 font-medium border-2 border-gray-300 focus:outline-blue-400 relative'
            />
            <div className='absolute right-3 text-gray-400 '>
               <User size={20}/>
            </div>
          </div>
          
        </div>
        <div className='flex flex-col justify-start mt-3 gap-1' >
          <label htmlFor="email" className='text-gray-400 text-sm'>Email</label>
          <div className='relative w-fit rounded-xs flex  text-center items-center '>
            <input type="text"
                   name='email'
                   required
                   placeholder='Email'
                   onChange={handleChange}
                   className='py-2 px-3 pr-12  w-85 rounded-sm text-sm text-gray-800 font-medium border-2 border-gray-300 focus:outline-blue-400 relative'
            />
            <div className='absolute right-3 text-gray-400'>
               <Mail size={20}/>
            </div>
          </div>
          
        </div>
        <div className='flex flex-col justify-start mt-3 gap-1' >
          <label htmlFor="Password" className='text-gray-400 text-sm'>Password</label>
          <div className='relative w-fit rounded-xs flex  text-center items-center '>
            <input type={ShowPassword ? "text":"password"}
                   name='password'
                   required
                   
                   on
                   onChange= {handleChange}
                   placeholder='password'
                   className='py-2 px-3 pr-12  w-85 rounded-sm text-sm text-gray-800 font-medium border-2 border-gray-300 focus:outline-blue-400 relative'
            />
            <button className='absolute right-3 text-gray-400'
            type='button'
            onClick={()=> setShowPassword(!ShowPassword)}
            >
              {ShowPassword ? <Eye/>: <EyeOff/> }
            </button>
          </div>
        </div>
         <div className='flex flex-col justify-start mt-3 gap-1' >
          <label htmlFor="ConfirmPassword" className='text-gray-400 text-sm'>Confirm Password</label>
          <div className='relative w-fit rounded-xs flex  text-center items-center '>
            <input type={ShowPassword ? "text":"password"}
                   name='confirmPassword'
                  
                   required
                   onChange= {handleChange}
                   placeholder='confirm password'
                   className='py-2 px-3 pr-12  w-85 rounded-sm text-sm text-gray-800 font-medium border-2 border-gray-300 focus:outline-blue-400 relative'
            />
            <button className='absolute right-3 text-gray-400'
            type='button'
            onClick={()=> setShowPassword(!ShowPassword)}
            >
              {ShowPassword ? <Eye/>: <EyeOff/> }
            </button>
          </div>
        </div>
        <div className='flex gap-1 mt-3 items-start justify-start'>
          <input type="checkbox"  className='mt-1'/>
          <span className='font-medium text-sm text-gray-400  '>
            I agree to the 
            <span className='text-blue-400 hover:underline cursor-pointer m-1'>term of service </span>
             and <br />
             <span className='text-blue-400 hover:underline cursor-pointer m-1'>privacy and policy</span>
          </span>
        </div>
        <button className='border-0 bg-blue-400 text-white hover:bg-blue-500 duration-300 py-2 my-2 ml-3 w-80 text-sm rounded-sm cursor-pointer'
        type="submit"
        >Create Account</button>
        <span className='font-medium text-sm text-gray-400 ml-17'> Already have an account?
          <Link to='/login' className='text-blue-400 hover:underline cursor-pointer'>
           Login
          </Link>
           </span>
      </form>
     </div>
    </div>
  )
}

export default Register
