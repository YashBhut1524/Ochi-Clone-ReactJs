import React, { useState, useRef, useEffect } from 'react';


function ClientReviews() {
    const [activeReview, setActiveReview] = useState(0);
    const detailRefs = useRef({});
    const containerRef = useRef(null);

    const handleReadClick = (index) => {
        if (activeReview === index) {
            setActiveReview(null);
        } else {
            setActiveReview(index);
            setTimeout(() => {
                if (detailRefs.current[index]) {
                    const offsetPosition = detailRefs.current[index].offsetTop - 50;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 1000);
        }
    };

    useEffect(() => {
        if (activeReview === null && containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [activeReview]);

    //hardcoded client data
    const reviews = [
        {
            company: 'Karman Ventures',
            person: 'William Barnes',
            services: ['Investor Deck', 'Sales Deck'],
            feedback: 'They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5',
            image: 'https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png'
        },
        {
            company: 'Planetly',
            person: 'Nina Walloch',
            services: ['Agency', 'Big News Deck', "Branded Template", 'Investor Deck', "Product Presentation", 'Sales Deck', 'Startup Pitch'],
            feedback: 'Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.',
            image: 'https://ochi.design/wp-content/uploads/2022/05/Nina.jpg.png'
        },
        {
            company: 'Workiz Easy',
            person: 'Tomer Levy',
            services: ['Company Presentation', 'Onboarding Presentation', 'Policy Deck & Playbook', 'Redesign', "Sales Deck"], 
            feedback: 'OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients.',
            image: 'https://ochi.design/wp-content/uploads/2022/05/Tomer.png'
        },
        {
            company: 'Premium Blend',
            person: 'Ellen Kim',
            services: ['Branded Template', 'Illustrations'], 
            feedback: 'They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations..',
            image: 'https://ochi.design/wp-content/uploads/2022/12/image-677-300x298.png'
        },
        {
            company: 'Hypercare Systems',
            person: 'Brendan Goss',
            services: ['Investor Deck', 'Startup Pitch'], 
            feedback: 'The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough.',
            image: 'https://ochi.design/wp-content/uploads/2022/05/1627398835558-11.png'
        },
        {
            company: 'Officevibe',
            person: 'Raff Labrie',
            services: ['Branded Template'], 
            feedback: 'Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!',
            image: 'https://ochi.design/wp-content/uploads/2023/10/Photo-300x300.png'
        },
        {
            company: 'Orderlion',
            person: 'Stefan Strohmer',
            services: ['Agency', 'Investor Deck', 'Product Presentation', 'Review', 'Sales Deck'], 
            feedback: 'The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!',
            image: 'https://ochi.design/wp-content/uploads/2022/05/Stefan-300x300.jpg'
        },
        {
            company: 'Black Book',
            person: 'Jaci Smith',
            services: ['Review', 'Startup Pitch'], 
            feedback: 'They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally.',
            image: 'https://ochi.design/wp-content/uploads/2022/05/Jaci.jpg.png'
        },
        {
            company: 'Trawa Energy',
            person: 'David Budde',
            services: ['Branding', 'Investor Deck', 'Startup Pitch'], 
            feedback: 'We were surprised by the accuracy with which Ochi Design nailed the overall design language that perfectly aligned with our personal preferences and the vision that we have for our young company.',
            image: 'https://ochi.design/wp-content/uploads/2023/02/David-Budde-1-300x300.png'
        }
    ];

    return (
        <div ref={containerRef} className='pt-[8vh] px-20 bg-[#27272A] w-full text-white'>
            <h1 className="font-['Neue_Montreal', Arial] text-6xl font-light pb-14 border-b-2">Clients' reviews</h1>
            <div>
                {reviews.map((review, index) => (
                    <div key={index} className='border-b-2'>
                        <div className='Header flex justify-between py-5 gap-16'>
                            <div className='flex justify-between items-center w-1/2'>
                                <p className=''>{review.company}</p>
                                {activeReview === index && 
                                    <p className='pr-[13vw] underline font-semibold'>Services:</p>
                                }
                            </div>
                            <div className='w-1/2 items-center flex justify-between'>
                                <p className='text-center'>{review.person}</p>
                                <button onClick={() => handleReadClick(index)} className='text-right'>
                                    {activeReview === index ? <p className='font-bold'>READ</p> : <p className='underline'>READ</p>}
                                </button>
                            </div>
                        </div>
                        <div 
                            ref={(el) => (detailRefs.current[index] = el)} 
                            className={`transition-all duration-1000 ${activeReview === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                        >
                            <div className='mt-4 p-4 flex gap-10 mb-10'>
                                <div className='w-1/2 flex gap-5'>
                                    <div className='w-1/2'></div>
                                    <div className='w-1/2 flex flex-col space-y-4'>
                                        {review.services.map((service, idx) => (
                                            <button key={idx} className='min-w-32 max-w-fit p-1 px-4 bg-zinc-600 border-zinc-400 rounded-full  hover:bg-zinc-900 hover:border-zinc-950'>{service.toUpperCase()}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex flex-col w-1/2 pl-3 gap-5'>
                                    <img src={review.image} alt={review.person} className='w-24 h-24 rounded-2xl mr-4'/>
                                    <p className='w-3/4'>{review.feedback}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientReviews;
