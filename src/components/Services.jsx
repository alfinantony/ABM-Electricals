import React from 'react';
import Service1 from "../assets/service3.jpg"; // Electrical Engineering image
import Service2 from "../assets/solar-services1.jpg"; // On-Grid Solar image
import Service3 from "../assets/service2.jpeg"; 
import Service4 from "../assets/service4.jpeg"; 
import { FaLightbulb, FaDraftingCompass, FaHardHat, FaCheckCircle } from 'react-icons/fa';

const servicesData = [
  { id: 1, img: Service1 },
  { id: 2, img: Service2 },
  { id: 3, img: Service3 },
  { id: 4, img: Service4 },
];

const flowChartData = [
  { id: 1, title: "Conceptualising", icon: <FaLightbulb />, description: "Crafting innovative and practical ideas to solve real-world problems, blending technical skills with innovative thinking." },
  { id: 2, title: "Design", icon: <FaDraftingCompass />, description: "Designing and developing an electrical system and layout with precision and creativity." },
  { id: 3, title: "Execution", icon: <FaHardHat />, description: "Bringing designs to life with precision, ensuring every project is delivered on schedule without compromising quality or safety." },
  { id: 4, title: "Testing & Commissioning", icon: <FaCheckCircle />, description: "Ensuring every system and component functions safely and efficiently, in accordance with industry standards." },
];

const additionalServices = [
  "Supply, erection, testing, and commissioning of high-tension (HT) substations.",
  "Fabrication, supply, erection, testing, and commissioning of low-tension (LT) panels, including Motor Control Centre panels, Automatic Power Factor Correction panels, Control and Relay panels, Automatic Mains Failure panels, Control Panels for special applications, Synchronization Panels, and more.",
  "Supply, erection, testing, and commissioning of HT and LT diesel generator sets.",
  "Supply, installation, testing, and commissioning of underground and overhead cables rated up to 33 kV.",
  "Supply, installation, testing, and commissioning of transformers, Ring Main Units, Vacuum Circuit Breakers, and Bus Bar Trunking.",
  "Electrification of residential and industrial buildings.",
  "Electrification of various facilities, including hospitals, malls, offices, software parks, hotels, resorts, high-rise buildings, industrial parks, townships, auditoriums, theaters, as well as tea and rubber industries, schools, and colleges.",
  "Turnkey electrification services from concept to realization."
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
          <p className="text-gray-400 text-lg leading-relaxed">
          </p>
        </div>

        {/* Services cards */}
        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {servicesData.map(service => (
            <div key={service.id} className="relative group">
              <img
                src={service.img}
                // alt={service.title}
                className="w-full h-56 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_15px_rgba(255,0,0,0.4)]"
              />
              <div className="absolute inset-0  rounded-2xl transition-opacity duration-300 group-hover:bg-opacity-0"></div> 
              <div className="absolute bottom-4 left-4">
                {/* <h2 className="text-lg font-bold text-white">{service.title}</h2> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="mt-16">
        <div className="bg-gray-900 bg-opacity-50 rounded-2xl p-6 lg:p-12 shadow-lg">
          <div className="space-y-6 text-gray-300 lg:text-lg">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-4 border-l-4 border-red-500 hover:bg-gray-800 transition duration-300 rounded-md"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flowchart Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Our Service Flow</h3>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
          From ideation to execution, our streamlined process ensures timely delivery and unmatched quality. We follow a systematic flow to transform concepts into operational excellence.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {flowChartData.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center max-w-xs">
              <div className="text-5xl text-red-500 mb-4">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
