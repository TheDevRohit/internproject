import React from 'react'
import logo from './assets/logo.png'
function Navbaruse() {
  return (
    <div>
      <nav className='flex justify-between bg-white text-center w-full px-9 py-4'>
        <div className='logo flex space-x-2 items-center'>
           <img src={logo} alt="" className="h-10 w-10 " />
           <p className='text-xl font-semibold'>Helpert</p> 
        </div>
       
        <div className="cursor-pointer rounded-2xl bg-slate-300 flex h-14 w-96 items-center p-4 gap-24 radius">
          <i class="fa-solid fa-arrow-left text-2xl"></i>
          <p className='font-bold text-2xl'>Settings</p> 
        </div>

       <div className="all flex gap-14 cursor-pointer">
        <div className="profile flex justify-center items-center gap-3">
          <div className="h-14 w-14  bg-slate-400 rounded-xl flex justify-center items-center">
              <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png" className='h-10 w-10' alt="" />
          </div>
          <h3 className='font-bold'>Yondu</h3>
        </div>

        <div className="icons flex gap-7">
           <div className="noti h-12 w-12 bg-slate-100 flex items-center justify-center text-slate-400 rounded-full">
              <i class="fa-solid fa-bell"></i>
           </div>
           <div className="drop h-12 w-12 bg-slate-100 flex justify-center items-center text-slate-400 rounded-full">
             <i class="fa-solid fa-circle-chevron-down"></i>
           </div>
        </div>
      </div>  
  
      </nav>
    </div>
  )
}

export default Navbaruse
