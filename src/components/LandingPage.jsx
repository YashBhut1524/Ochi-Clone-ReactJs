import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {

    return (
        <div
            data-scroll data-scroll-section data-scroll-speed="-.6"
            className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='text-structure mt-52 px-20 font-bold'>
                {["We Create", "Eye-Opening", "Presentation"].map((item, index) => 
                    <div key={index} className="masker">
                        <div className='w-fit flex'>
                            {index === 1 && (
                                <motion.div 
                                    initial={{width: 0}} 
                                    animate={{width: "9vw"}} 
                                    transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                                    className='mr-[1vw] w-[8vw] h-[5.5vw] relative top-[1vw] bg-[#CC6635] rounded-md '>
                                </motion.div>
                            )}
                            <h1 className="uppercase tracking-normal leading-[6.5vw] font-['Founders_Grotesk_X_condensed', Helvetica, sans-serif] text-[8vw] font-medium">{item}</h1>
                        </div>
                    </div>
                )}
            </div>
            <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => 
                    <p key={index} className='text-md font-light tracking-tight leading-none'>
                        {item}
                    </p>
                )}
                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[2px] uppercase font-light text-sm border-zinc-600 rounded-full'>
                        Start the Project
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-600 '>
                        <span className='rotate-45'>
                            <FaArrowUp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage
