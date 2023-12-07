import React, { useState } from 'react'

function TileCard(props) {
  let useClass = 'row flex items-center gap-3 px-4 py-2 rounded'
  if(props.click){
    useClass += ' bg-gray-200'
  }
  

  return (
      <div className={useClass}>
         <i className={props.icon+" text-blue-600 text-xl"}></i>
         <div className="col text-start">
           <h2>{props.head}</h2>
           <p className='text-slate-400'>{props.title}</p>
         </div> 
         <i className='fa-solid fa-caret-down rotate-90 text-slate-400 ml-8'></i>
      </div>
  )
}

export default TileCard
