import React from 'react';
import Service1 from "../assets/service3.jpg"; // Changed to Electrical Engineering image
import Service2 from "../assets/solar-services1.jpg"; // Changed to On-Grid Solar image
import Service3 from "../assets/underfloor-service2.jpg"; // Changed to HVAC image
import Service4 from "../assets/service4.jpg"; // Changed to AI Smart Solutions image
import { FaLightbulb, FaDraftingCompass, FaHardHat, FaCheckCircle } from 'react-icons/fa';

const servicesData = [
  { id: 1, img: Service1, title: "Electrical Engineering" },
  { id: 2, img: Service2, title: "On-Grid Solar" },
  { id: 3, img: Service3, title: "HVAC" },
  { id: 4, img: Service4, title: "Automation" },
];

const flowChartData = [
  { id: 1, title: "Conceptualising", icon: <FaLightbulb />, description: "Crafting innovative and practical ideas to solve real-world problems, blending technical skills with innovative thinking." },
  { id: 2, title: "Design", icon: <FaDraftingCompass />, description: "Designing and developing an electrical system and layout with precision and creativity." },
  { id: 3, title: "Execution", icon: <FaHardHat />, description: "Bringing designs to life with precision, ensuring every project is delivered on schedule without compromising quality or safety." },
  { id: 4, title: "Testing & Commissioning", icon: <FaCheckCircle />, description: "Ensuring every system and component functions safely and efficiently, in accordance with industry standards." },
];

const Services = () => {
  return (
    <div id="services" className="text-white lg:px-24 px-4 py-12">
      {/* Service section */}
      <div className="lg:flex lg:justify-between items-start">
        {/* Content */}
        <div className="lg:w-1/3 space-y-4">
          <h3 className="text-gray-400 font-semibold text-lg">Our Services</h3> 
          <h2 className="text-4xl font-bold leading-snug">What we do</h2> 
        </div>

        {/* Services cards */}
        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4"> {/* Updated to show 4 columns */}
          {servicesData.map(service => (
            <div key={service.id} className="relative group">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_15px_rgba(255,0,0,0.4)]" // Adjusted height
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl transition-opacity duration-300 group-hover:bg-opacity-0"></div>
              <div className="absolute bottom-4 left-4">
                <h2 className="text-lg font-bold text-white">{service.title}</h2> {/* Reduced font size */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flowchart section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold mb-10">Our Service Flow</h3>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {flowChartData.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center max-w-xs">
              {/* Service step icon */}
              <div className="text-5xl text-red-500 mb-4">
                {step.icon}
              </div>
              {/* Step title */}
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              {/* Step description */}
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
