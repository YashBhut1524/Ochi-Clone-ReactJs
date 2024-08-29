import React, { useEffect, useState } from 'react'
import eyeBg from "../img/eye-bg.jpg"

function Eyes() {

    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e)=>{
            // console.log(e.clientX, e.clientY);
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth/2 
            let deltaY = mouseY - window.innerHeight/2
            
            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180)
        })
    }, [])

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${eyeBg})` }}>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>

                    {/* <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                        <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative'>
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                        <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative'>
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div> */}

                    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-[12vw] h-[12vw] rounded-full bg-zinc-100 relative'>
                        <div className='line w-full h-full p-3 rounded-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' style={{transform: `translate(-50%, -50%) rotate(${rotate-10}deg)`}} >
                            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 '>
                                <div className='w-2/3 h-2/3 rounded-full relative'>
                                    <div  className='line w-full absolute pl-3 pb-6 top-12 left-12 -translate-x-[45%] -translate-y-[45%]'>
                                        <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-[12vw] h-[12vw] rounded-full bg-zinc-100 relative'>
                        <div className='line w-full h-full p-3 rounded-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' style={{transform: `translate(-50%, -50%) rotate(${rotate-10}deg)`}} >
                            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 '>
                                <div className='w-2/3 h-2/3 rounded-full relative'>
                                    <div  className='line w-full absolute pl-3 pb-6 top-12 left-12 -translate-x-[45%] -translate-y-[45%]'>
                                        <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Eyes
