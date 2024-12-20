import React, { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpeg';
import gallery9 from '../assets/gallery9.jpg';
import gallery10 from '../assets/gallery10.jpg';
// import gallery11 from '../assets/gallery11.JPG';
import gallery13 from '../assets/gallery13.JPG';
import gallery14 from '../assets/gallery14.png';
import gallery15 from '../assets/gallery15.png';
import gallery16 from '../assets/gallery16.jpg';
import gallery17 from '../assets/gallery17.png';
import gallery18 from '../assets/gallery18.jpg';
import gallery19 from '../assets/gallery19.jpg';
import gallery20 from '../assets/gallery20.jpg';
import gallery21 from '../assets/gallery21.png';





const images = [
    { 
      src: gallery1, 
      alt: 'Gallery Image 1', 
      desc: `Thejus Engineering College, Thrissur:
      Installation of 500KVA USS, 63KVA & 250KVA DG Sets, including 
      connected electrics, internal electrification, and ELV systems.` 
    },
    { 
      src: gallery2, 
      alt: 'Gallery Image 2', 
      desc: `Audi Kochi Showroom, KP Cars Pvt Ltd:
      Installation of 200KVA USS, 160KVA DG Sets, and associated 
      electrical works.` 
    },
    { 
      src: gallery3, 
      alt: 'Gallery Image 3', 
      desc: `DCSMAT, Vagamon Campus:
      Comprehensive electrification using bus trunking and associated 
      electrical systems.` 
    },
    { 
      src: gallery4, 
      alt: 'Gallery Image 4', 
      desc: 'IBS Apartments Thiruvanthapuram :  Installation of 200kVA USS, 160kVA DG set & connected electrics.' 
    },
    { 
      src: gallery5, 
      alt: 'Gallery Image 5', 
      desc: 'Chavara Cultural Centre: Providing 250 KVA Transformer,  PLC controlled DG panel,Capacitor panel, complete electrification.' 
    },
    { 
      src: gallery6, 
      alt: 'Gallery Image 6', 
      desc: 'Holiday City Centre : Installation of 1250 kVa Transformer, 160 kVA DG set and connected electrics.' 
    },
    { 
      src: gallery7, 
      alt: 'Gallery Image 7', 
      desc: 'Lakeshore Hospital: Completed 1st phase of international electrification with metal conduit wiring (Subcontract from Harrison Malayalam Ltd). Added MV at the hospital, electrified AC units, and modified the main MV panel by replacing a 630 Amps SFU with a 400 Amps in minimal shutdown.' 
    },
    { 
      src: gallery8, 
      alt: 'Gallery Image 8', 
      desc: 'Enchanted Island Resorts, Victoria, Seychelles: Completed internal and external electrification, including 1x500 KVA transformer and 2x250 KVA DG sets.' 
    },
    { 
      src: gallery9, 
      alt: 'Gallery Image 9', 
      desc: 'Issac Group, Suthan Bathery, Wayanad - 3 Nos Multiplex and Mall: Detailed engineering, outdoor 11 KV structure, 11 KV 3 panel, 500 KVA transformer, 250 & 160 KVA DG sets, multiplex electrification, shopping complex wiring, power panels, etc.' 
    },
    { 
      src: gallery10, 
      alt: 'Gallery Image 10', 
      desc: 'Holiday Group: Installation of Transformers 500KVA, 400KVA, 200KVA, 160 kVA DG Set, and complete internal electrification.' 
    },

    // { 
    //   src: gallery11, 
    //   alt: 'Gallery Image 11', 
    //   desc: `Technopark Phase I campus, Trivandrum: Electrical installation work for a 150 TR chiller plant at Park Centre building.` 
    // },
    // { 
    //   src: gallery12, 
    //   alt: 'Gallery Image 12', 
    //   desc: `` 
    // },
    { 
      src: gallery13, 
      alt: 'Gallery Image 13', 
      desc: ` Installation of an electrical ring main unit for the 450 kLD STP augmentation at ISRO staff quarters, Thumba, VSSC.      
          Maintenance of HT and EHT substations and equipment at VSSC, CMSE, and IISU.  
         Operation of the 11 kV substation at VRC, VSSC.  
Operation of the 110 kV substation at TERLS, VSSC.  ` 
    },

    { 
      src: gallery14, 
      alt: 'Gallery Image 14', 
      desc: `Electrical installation work for the administrative block, boiler, and polishing plant at the Ernakulam dairy expansion project.` 
    },

    
    { 
      src: gallery15, 
      alt: 'Gallery Image 15', 
      desc: `Supply and installation of an 82.5 KVA diesel generator at the KINFRA Corporate Office, located in Sasthamangalam, Trivandrum.` 
    },

    
    { 
      src: gallery16, 
      alt: 'Gallery Image 16', 
      desc: `Extension of 11kV Ring Main Unit for Semi-Cryogenic Substation at IPRC, Mahendragiri.` 
    },

    { 
      src: gallery17, 
      alt: 'Gallery Image 17', 
      desc: `Revamping the existing electrical panel and feeding cable for the warehouse at Plot No. 17, CSEZ, Kakkanad.` 
    },

    { 
      src: gallery18, 
      alt: 'Gallery Image 18', 
      desc: `Supply and installation of 11kV grade commercial metering unit at the premises of M/s. Tata Global Beverages Limited, Cochin Port Trust.` 
    },

    { 
      src: gallery19, 
      alt: 'Gallery Image 19', 
      desc: `Supply, installation and commissioning of 1000 KVA, 11 KV 433V, 3 phase 50 Hz Transformer by replacing the existing faulty Transformer` 
    },

    { 
      src: gallery20, 
      alt: 'Gallery Image 20', 
      desc: `Supply and installation of two 200 KVAR capacitor panels for the underground electrical substation at the Secretariat in Thiruvananthapuram.` 
    },

    { 
      src: gallery21, 
      alt: 'Gallery Image 21', 
      desc: `Supply, installation, testing, and commissioning of medium voltage panels for the extension of the existing cleanroom facility at the main campus of URSC.` 
    },

  ];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleToggleSeeMore = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section id='gallery'>
      <div className="galleryHeader">
        <h2 className="galleryTitle">Projects</h2>
        <p className="galleryDesc">
        Explore the scope and scale of our engineering expertise through these featured projects.
        </p>
      </div>

      <div className="galleryGrid">
        {images.slice(0, showAll ? images.length : 3).map((image, index) => (
          <div
            key={index}
            className="galleryItem"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.src} alt={image.alt} className="galleryImg" />
          </div>
        ))}
      </div>

      <button className="galleryBtn" onClick={handleToggleSeeMore}>
        {showAll ? 'See Less' : 'See More'}
      </button>

      {selectedImage && (
        <div className="popupOverlay" onClick={closePopup}>
          <div className="popupContent" onClick={(e) => e.stopPropagation()}>
            <FaXmark className="popupClose" onClick={closePopup} />
            <img src={selectedImage.src} alt={selectedImage.alt} className="popupImg" />
            <p className="popupDesc">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
