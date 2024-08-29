import { motion, useAnimate, useAnimation } from 'framer-motion';
import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import Vise from "../img/Vise_front2-663x551.jpg"
import Fyde from "../img/Fyde_Illustration_Crypto_2-663x551.png"

function Feature() {

    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({y: "0"})
    }

    const handleEndHover = (index) => {
        cards[index].start({y: "100%"})
    }

    return (

        <div>
            <div className='w-full py-20 bg-zinc-800'>
                <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                    <h1 className="text-5xl font-['Neue_Montreal'] tracking-tight">Featured projects</h1>
                </div>
                <div className='px-20'>
                    <div className='cards w-full flex gap-10 mt-10'>
                        
                        <div className='card1 w-1/2 '>
                            <div className='flex gap-3'>
                                <GoDotFill className='mt-1'/>
                                <p className='mb-5'>FYDE</p>
                            </div>
                            <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleEndHover(0)} className='card-container relative h-[70vh]'>
                                <h1 className="flex absolute z-[9] text-[#CDEA68] text-9xl font-semibold leading-none tracking-tight left-full -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden">
                                    {"FYDE".split('').map((item, index) => 
                                        <motion.span 
                                            initial={{y:"100%"}}
                                            animate={cards[0]}
                                            transition={{ease: [0.37, 0, 0.63, 1], delay: index*0.06}}
                                            className='inline-block' 
                                        >
                                            {item}
                                        </motion.span>
                                    )}
                                </h1>
                                <div className='w-full h-full rounded-xl overflow-hidden'>
                                    <img className='w-full h-full bg-cover' src={Fyde} alt="" />
                                </div>
                            </motion.div>
                            <div className='pt-1 flex gap-3'>
                                {
                                    ["AUDIT", "COPYWRITING", "SALE DESK", "SLIDES DESIGN"].map((item, index) =>(
                                        <button key={index} className='px-3 py-1 mt-5 border-2 border-zinc-400 bg-zinc-600 rounded-full hover:bg-zinc-900 hover:border-zinc-950'>{item}</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='card2 w-1/2 '>
                            <div className='flex gap-3'>
                                <GoDotFill className='mt-1'/>
                                <p className='mb-5'>VISE</p>
                            </div>
                            <motion.div 
                                onHoverStart={() => handleHover(1)} onHoverEnd={() => handleEndHover(1)}
                                className='card-container h-[70vh] relative'>
                                <h1 className="overflow-hidden flex absolute z-[9] text-[#CDEA68] text-9xl font-semibold leading-none tracking-tight right-full translate-x-1/2 top-1/2 -translate-y-1/2">{"VISE".split('').map((item, index) => 
                                    <motion.span 
                                        initial={{y:"100%"}}
                                        animate={cards[1]}
                                        transition={{ease: [0.37, 0, 0.63, 1], delay: index*0.06}}
                                        className='inline-block' 
                                    >
                                        {item}
                                    </motion.span>
                                    )}
                                </h1>
                                <div className='w-full h-full rounded-xl overflow-hidden'>
                                    <img className='w-full h-full bg-cover' src={Vise} alt="" />
                                </div>
                                <div className='pt-1 flex gap-3'>
                                    {
                                        ["AGENCY", "COMPANY PRESENTATION"].map((item, index) =>(
                                            <button key={index} 
                                                className='px-3 py-1 mt-5 border-2 border-zinc-400 bg-zinc-600 rounded-full hover:bg-zinc-900 hover:border-zinc-950'
                                            >
                                                {item}
                                            </button>
                                        ))
                                    }
                                </div>
                            </motion.div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
