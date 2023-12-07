import React from 'react'

function Expertstile(props) {
  return (
        <div className="profile flex w-auto text-start justify-between gap-20">
           
            <div className="pimage flex gap-5">
                <div className="profile-img h-14 w-14">
                   <img src={props.image} className='rounded-full' alt="" />
                   <div className='h-3 w-3 bg-green-600 rounded-full relative bottom-14 left-10'></div>
                </div>
                <div className="title w-24">
                    <p className='font-bold'>{props.name}</p>
                    <p className='text-slate-400'>{props.location}</p>
                </div>
            </div>
            
            <div className="btn px-20">
                <button>
                    <p className='text-red-500 p-1 px-2 border-gray-600 border-2 rounded'>Unsubscribe</p>
                </button>
            </div>

        </div>
  )
}

export default Expertstile
