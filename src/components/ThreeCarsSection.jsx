import React from 'react'
import logo003 from "../img/logo003.png"
import stars from "../img/stars.png"

function ThreeCarsSection() {
    return (
        <div className='w-full h-screen bg-zinc-800 flex items-center px-32 gap-5'>
            <div className='cardcontainer w-1/2 h-[50vh]'>
                <div className='card rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="101" height="42" fill="none"><path d="M13.802 14.071C5.933 14.243-.064 20.43.001 28.201c.057 7.125 6.421 14.147 14.99 13.532 6.773-.485 12.927-6.327 12.858-13.911-.069-7.584-6.54-13.907-14.047-13.75zm.08 21.74c-4.243 0-7.712-3.628-7.697-8.02a7.722 7.722 0 014.751-7.276 7.73 7.73 0 0110.701 7.322c.023 4.327-3.526 7.981-7.766 7.974h.012zm74.224 5.308h6.05v-26.44h-6.05v26.44zM94.941 0v8.363h5.402c.199 0 .382 0 .657-.027V0h-6.059zM44.277 35.81c-4.244 0-7.713-3.627-7.697-8.018a7.854 7.854 0 017.708-7.767 7.704 7.704 0 016.113 3.085l5.802-2.291c-2.494-4.109-7.014-6.874-12.018-6.755-7.87.172-13.867 6.358-13.802 14.129.058 7.125 6.422 14.147 14.99 13.533a14.137 14.137 0 0011.159-7.19l-5.677-2.525a7.757 7.757 0 01-6.578 3.8zM73.52 13.98a9.132 9.132 0 00-8.08 4.494V0h-6.112v41.096h6.112V26.104c0-4.33 1.7-7.5 5.834-7.5 5.325 0 5.348 5.587 5.348 8.783v13.751h6.18c0-.18.031-.317.031-.458 0-5.136.065-10.269-.023-15.405-.057-3.558-.745-11.295-9.29-11.295z" fill="#CDEA68"></path></svg> 
                    <button className='absolute left-10 text-sm bottom-10 px-5 py-1 border-2 rounded-full border-[#CDEA68] text-[#CDEA68]'>©2019-2022</button>
                </div>
            </div>
            <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
                <div className='card rounded-xl w-1/2 h-full bg-[#212121] relative flex items-center justify-center'>
                    <img className='bg-cover' src={stars} alt="" />
                    <button className='absolute left-10 bottom-10 text-sm px-5 py-1 border-2 rounded-full'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className='card rounded-xl w-1/2 h-full bg-[#212121] relative flex items-center justify-center'>
                    <img className='bg-cover' src={logo003} alt="" />
                    <button className='absolute left-10 bottom-10 text-sm px-5 py-1 border-2 rounded-full'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>
        </div>
    )
}

export default ThreeCarsSection