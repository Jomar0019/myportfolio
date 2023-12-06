import React from 'react'
import RealEstate from '../assets/projects/realestate.jpg'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen dark-mode'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='title'>Work</p>
            <p className='py-6 text-white/50'>Check out some of my recent work</p>
        </div>

        <div className=' grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

        <div className="group">
          <div className="work-content">
          <img
              src={RealEstate}
              class="work-img"
              alt="Louvre" />
              <div className="work-overlay">
                <button className='work-light-btn'>Code</button>
                <button className='work-dark-btn'>Demo</button>
              </div>
          </div>
        </div>

        <div className="group">
          <div className="work-content">
          <img
              src={RealEstate}
              class="work-img"
              alt="Louvre" />
              <div className="work-overlay">
                <button className='work-light-btn'>Code</button>
                <button className='work-dark-btn'>Demo</button>
              </div>
          </div>
        </div>

        <div className="group">
          <div className="work-content">
          <img
              src={RealEstate}
              class="work-img"
              alt="Louvre" />
              <div className="work-overlay">
                <button className='work-light-btn'>Code</button>
                <button className='work-dark-btn'>Demo</button>
              </div>
          </div>
        </div>
   
           
        </div>

      </div>
    </div>
  )
}

export default Work


// <div 
//               style={{backgroundImage: `url(${RealEstate})`}} 
//               className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto object-cover h-[250px]'>
                
//                 {/*  Hover Effects  */}
//                 <div className='opacity-0 group-hover:opacity-100 '>
//                     <span className='text-2xl font-bold text-white tracking-wider'>
//                       React JS Application
//                     </span>
//                     <div className='pt-8 text-center'>
//                         <a href="/">
//                             <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
//                         </a>
//                         <a href="/">
//                             <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
//                         </a>
//                     </div>
//                 </div>
//             </div>