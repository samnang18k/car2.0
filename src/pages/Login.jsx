import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye,EyeOff,Mail } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [ShowPassword, setShowPassword]= useState(false);

  const handleSubmit = (e) => {
    alert("success")
    e.preventDefault();
    e.target.value="";
  };

  return (
    <div className="min-h-screen bg-[#FFF8F7] flex items-center justify-center p-4 font-[poppins]">
      
      <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden min-h-[550px] border border-gray-100">
        
       
        <div className="w-full md:w-1/2 bg-[#F9FAFB] p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-gray-100">
          <div className="relative w-full max-w-[320px] aspect-[4/3] flex items-center justify-center">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFEBE9] to-transparent opacity-40 rounded-2xl blur-xl" />
            
            
            <div className="relative z-10 w-full flex flex-col items-center">
             
              <div className="w-40 h-72 bg-white rounded-[2.5rem] shadow-lg border-[6px] border-gray-800 p-3 flex flex-col items-center relative">
                
                <div className="w-16 h-4 bg-gray-800 rounded-full absolute -top-1" />
                
              
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#FF6A55] rounded-full" />
                  </div>
                  <div className="h-3 w-20 bg-gray-200 rounded-full" />
                  <div className="w-16 h-16 border-4 border-dashed border-[#FF6A55] rounded-full flex items-center justify-center mt-2">
                    <div className="w-8 h-8 bg-[#FF6A55] rounded-full" />
                  </div>
                </div>
              </div>

              
              <div className="absolute bottom-0 -left-4 w-24 h-40 bg-slate-700 opacity-80 rounded-t-full blur-[1px] transform origin-bottom scale-75" />
             
              <div className="absolute top-12 left-4 w-10 h-10 bg-red-400 rounded-xl shadow-md flex items-center justify-center text-white font-bold">
                🔒
              </div>
            </div>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">
            
            <h1 className="text-3xl font-bold text-[#DE4E3A] mb-1">Log in</h1>
            <p className="text-xs text-gray-500 mb-6">
              New to [Platform Name]?{' '}
              <Link to='/register'className='text-[#FF6A55] hover:underline font-medium'>Signup</Link>
            </p>

            
            <form onSubmit={handleSubmit} className="space-y-4">
            
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF6A55] focus:border-transparent transition-all placeholder-gray-300"
                  required
                />
              </div>

              
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-700">Password</label>
                <div className=' relative w-full px-4 py-2 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF6A55] focus:border-transparent transition-all placeholder-gray-300'>
                    <input
                  type={ShowPassword ? "text":"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pr-10 focus:outline-0"
                  required
                />
                <button className='absolute right-5 text-gray-400 hover:text-gray-600'
                 type='button'
                 onClick={()=>setShowPassword(!ShowPassword)}
                >
                    {
                        ShowPassword ? <Eye/>:<EyeOff/>
                    }
                </button>
                </div>
              </div>

            
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-700">Confirm Password</label>
                <div className=' relative w-full px-4 py-2 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF6A55] focus:border-transparent transition-all placeholder-gray-300'>
                    <input
                  type={ShowPassword ? "text":"password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pr-10 focus:outline-0"
                  required
                />
                <button className='absolute right-5 text-gray-400 hover:text-gray-600'
                 type='button'
                 onClick={()=>setShowPassword(!ShowPassword)}
                >
                    {
                        ShowPassword ? <Eye/>:<EyeOff/>
                    }
                </button>
                </div>
              </div>
              

              
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#FF6A55] focus:ring-[#FF6A55] border-gray-300"
                  />
                  Remember Me
                </label>
                <a href="#forgot" className="text-[#FF6A55] hover:underline font-medium">
                  Forgot Password?
                </a>
              </div>

            
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                <span className="flex-shrink mx-3 text-gray-400 text-xs">Or</span>
                <div className="flex-grow border-t border-dashed border-gray-300"></div>
              </div>

             
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-full text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.11C18.281 1.056 15.485 0 12.24 0 5.58 0 0 5.37 0 12s5.58 12 12.24 12c6.96 0 11.57-4.854 11.57-11.77 0-.795-.085-1.4-.195-1.945H12.24z"/>
                  </svg>
                  Log in with Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-full text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Log in with Facebook
                </button>
              </div>

            
              <div className="pt-2 flex flex-col items-center gap-3">
                <button
                  type="submit"
                  className="w-full bg-[#FF6A55] hover:bg-[#DE4E3A] text-white font-medium py-2.5 px-4 rounded-full text-sm shadow-md shadow-red-200 transition-colors"
                >
                  Log in
                </button>
                <a href="#forgot" className="text-xs text-gray-400 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
