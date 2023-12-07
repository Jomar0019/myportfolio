import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name='home' className='page dark-mode'>
      
        {/* container  */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-white/50'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white/90'>Jomar Magpoot</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-white/50'>I'm a Full Stack Developer.</h2>
            <p className='text-white/50 py-4 max-w-[700px]'>I'm a full-stack developer specializing in building(and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
            <div>
                <button className='home-btn'>View Work
                        <HiArrowNarrowRight className='ml-3' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home
