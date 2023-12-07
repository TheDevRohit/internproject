import React from 'react'
import TileCard from './utils/TileCard'
import Expertstile from './utils/Expertstile'
function Card() {
    return (
        <div className="items bg-white h-5/6 w-2/3 mx-auto my-10 flex">
            <div className="left w-1/2.5">
                <div className="all-tiles px-20 py-14 flex flex-col justify-evenly gap-10">

                 <TileCard head="My Appoinment" title="show your saved appoinment" click={false} icon="fa-solid fa-calendar-days"/>
                 <TileCard head="Security Access" title="set your security password" click={false} icon="fa-solid fa-lock"/>
                 <TileCard head="Notification Settings" title="change your notifiction settings" click={false} icon="fa-solid fa-bell"/>
                 <TileCard head="My Experts" title="show your experts" click={true} icon="fa-solid fa-face-smile"/>

            
                </div>
            </div>

            <p className='h-full w-0.5 bg-slate-200'></p> 

            <div className="right flex h-full flex-col gap-7 px-20 py-5">
               <h1 className='text-2xl font-bold'>My Expert</h1>
               <Expertstile name="Vasl Musks" location="USA" image="https://media.licdn.com/dms/image/D4D35AQHJja_TjaGtfA/profile-framedphoto-shrink_200_200/0/1690254909645?e=1702537200&v=beta&t=vo7b3rTeXYKFgVs48KhME25qgnLf-puTwjjcxSdrxfE"></Expertstile>  
               <Expertstile name="Vasl Musks" location="USA" image="https://media.licdn.com/dms/image/D4D35AQHJja_TjaGtfA/profile-framedphoto-shrink_200_200/0/1690254909645?e=1702537200&v=beta&t=vo7b3rTeXYKFgVs48KhME25qgnLf-puTwjjcxSdrxfE"></Expertstile>  
               <Expertstile name="Vasl Musks" location="USA" image="https://media.licdn.com/dms/image/D4D35AQHJja_TjaGtfA/profile-framedphoto-shrink_200_200/0/1690254909645?e=1702537200&v=beta&t=vo7b3rTeXYKFgVs48KhME25qgnLf-puTwjjcxSdrxfE"></Expertstile>  
               <Expertstile name="Vasl Musks" location="USA" image="https://media.licdn.com/dms/image/D4D35AQHJja_TjaGtfA/profile-framedphoto-shrink_200_200/0/1690254909645?e=1702537200&v=beta&t=vo7b3rTeXYKFgVs48KhME25qgnLf-puTwjjcxSdrxfE"></Expertstile>  
               <Expertstile name="Vasl Musks" location="USA" image="https://media.licdn.com/dms/image/D4D35AQHJja_TjaGtfA/profile-framedphoto-shrink_200_200/0/1690254909645?e=1702537200&v=beta&t=vo7b3rTeXYKFgVs48KhME25qgnLf-puTwjjcxSdrxfE"></Expertstile>  
            </div>

        </div>   
     )
}

export default Card
