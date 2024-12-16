import React from 'react';
import ownerphoto from '../assets/owner_photo.jpeg'

const About = () => {
  return (

    <div id="about" className='text-white md:-mt-[100px] -mt-10 bg-gradient-to-tr from-[#161616] to-[#080808] lg:mx-24 md:py-20 mx-4 py-12 md:px-16 px-6 rounded-xl z-50 relative flex flex-col gap-12'  >
      {/* Background Image */}
      <div className='absolute inset-0 bg-[url(/src/assets/funfact_bg-Copy)] bg-no-repeat bg-center opacity-75 z-0'></div>

      {/* Content Wrapper */}
      <div className='relative z-10 flex flex-col md:flex-row gap-12'>
        
        {/* About Us Section */}
<div className="md:w-2/5 flex flex-col items-start">
  {/* About Us Title */}
  <h2 className="text-4xl font-bold text-white mb-4">
    About Us
  </h2>
  <div className="w-16 h-1 bg-gray-500 mb-8"></div> {/* Underline with a subtle gray for elegance */}

  {/* Founder Info */}
  <div className="flex items-center mb-6">
    <div className="relative w-48 h-48 mr-6">
      {/* Image with enhanced styling */}
      <img 
        src={ownerphoto}
        alt="Founder of the Company" 
        className="w-full h-full object-cover rounded-full border-4 border-gray-500 shadow-xl"
      />
    </div>
    <div>
      <h3 className="text-3xl font-semibold text-white">Antony Joseph Kooliyath</h3>
      <p className="text-lg text-gray-300 mt-1 italic">Founder</p> {/* Soft gray for an elegant look */}
    </div>
  </div>

  {/* Founder's Information */}
  <div className="text-left">
    <p className="text-base text-gray-300 leading-relaxed text-justify">
    Sri Antony Joseph Kooliyath (1933–2019), the esteemed founder of ABM Electricals, steered the company to substantial success in the 1980s through his hands-on approach, exceptional efficiency, and unwavering leadership. Mr Joseph Basil (Proprietor, ABM Electricals).


    </p>
  </div>
</div>




        {/* Right Side - Company Details and Stats */}
        <div className='md:w-3/5 flex flex-col justify-center'>
          {/* Company Details */}
          <div className='mb-8'>
            {/* <h3 className='text-4xl font-semibold mb-4'>Company Name</h3> */}
            <p className='text-gray-300 leading-relaxed text-justify'>
            FOREVER an Inspiration, his emphasis on delivering high-quality work while reducing costs for his clients brought in important industrial and commercial projects from across India and abroad, notably working for M/s. Harrisons & Cross Field(India) Ltd., one of the leading multi-disciplinary companies in India till the 90s. <br /> <br />
            ABM Electricals is a premier A-Grade electrical contracting firm with a distinguished 40-year track record of operations in India and internationally. Founded in 1984 in Kerala by the late Mr. Antony Joseph, in collaboration with his sons Joseph Basil and Antony Bennen, our firm stands as one of the foremost electrical contractors in Kerala, demonstrating unwavering commitment and expertise over the past four decades.      <br />      <br/>
            We have had the privilege of establishing associations with highly esteemed organizations including The Holiday Group, Audi Kochi, GCDA, Cochin Port Trust Ltd, Cochin Shipyard Ltd, Rajagiri Institutions, and Techno Park.  We are dedicated to upholding the values of our founder by ensuring the highest level of excellence in design, execution, and the timely completion of your projects.


            </p>
          </div>

          {/* Global Clients Stats */}
          <div className='flex flex-col sm:flex-row items-center gap-8'>
            <div className='flex items-center gap-3'>
              <h4 className='md:text-5xl text-3xl font-semibold'>1000</h4>
              <div>
                <span className='text-red-500 font-bold text-lg'>+</span>
                <p className='mb-2 text-sm leading-tight text-gray-300'>Projects</p>
              </div>
            </div>
            
            <div className='flex items-center gap-3'>
              <h4 className='md:text-5xl text-3xl font-semibold'>1000</h4>
              <div>
                <span className='text-red-500 font-bold text-lg'>+</span>
                <p className='mb-2 text-sm leading-tight text-gray-300'> Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
