import React from 'react'
import aboutImg from "../img/about.jpg"

function About() {
    return (
        <div className='w-full pt-24 px-20 pb-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className="font-['Neue_Montreal','Verdana', 'Geneva', Arial] text-[4vw] leading-[4.5vw] tracking-tight">
            Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>
            <div className='w-full border-t-[1px] border-[#A6BD58] mt-20 pt-5 pb-10 flex gap-5'>
                <div className='w-1/2'>
                    <p>What you can expect:</p>
                </div>
                <div className='w-1/2 flex'>
                    <div className='w-1/2 flex-col px-3'>
                        <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                        <p className='pt-10'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
                    <div className='pl-24 pt-20'>
                        <p>S:</p>
                        <div className='mt-3'>
                            <p>Instagram</p>
                            <p>Behance</p>
                            <p>Facebook</p>
                            <p>Linkedin</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full border-t-[1px] border-[#A6BD58] mt-20 pt-5 flex gap-5'>
                <div className='w-1/2 p-1'>
                    <h1 className='text-6xl'>Our approach</h1>
                    <button className='px-10 py-6 mt-5 bg-zinc-900 rounded-full text-white flex gap-10 items-center'>
                        READ MORE
                        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>
                <div className='w-3/3 h-[70vh]'>
                    <img className='w-full h-full bg-cover rounded-xl' src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
