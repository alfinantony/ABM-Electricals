import React from 'react';
import AUDI from '../assets/AUDI.png';
import CIMAMAS from '../assets/CIMAMS.png';
import CPT from '../assets/CPT.png';
import CSIAM from '../assets/CSIAM.jpg';
import CSL from '../assets/CSL.png';
import CUSAT from '../assets/CUSAT.jpg';
import DCSMAT from '../assets/DCSMAT.png';
import DHSK from '../assets/DHSK.png';
import fci from '../assets/fci.jpg';
import GCDA from '../assets/GCDA.png';
import GHE from '../assets/GHE.jpg';
import GHLOGO from '../assets/GHLOGO.jpg';
import HIL from '../assets/HIL.png';
import HML from '../assets/HML.png';
import HOLIDAY from '../assets/HOLIDAY.jpg';
import IBS from '../assets/IBS.png';
import INKEL from '../assets/INKEL.png';
import KEL from '../assets/KEL.jpg';
import Lakeshore from '../assets/Lakeshore.png';
import LG from '../assets/LG.png';
import MC from '../assets/MC.png';
import MFCLOGO from '../assets/MFCLOGO.jpg';
import MGUK from '../assets/MGUK.png';
import MILMA from '../assets/MILMA.png';
import RSET from '../assets/RSET.png';
import SILK from '../assets/SILK.jpg';
import TEC from '../assets/TEC.jpg';
import TECHNOPARK from '../assets/TECHNOPARK.png';
import Traco from '../assets/Traco.jpg';
import WAPCOS from '../assets/WAPCOS.png';
// import ISRO from '../assets/ISRO.png'; 

const clients = [
  { id: 1, src: AUDI, alt: 'AUDI' },
  { id: 2, src: CIMAMAS, alt: 'CIMAMAS' },
  { id: 3, src: CPT, alt: 'CPT' },
  { id: 4, src: CSIAM, alt: 'CSIAM' },
  { id: 5, src: CSL, alt: 'CSL' },
  { id: 6, src: CUSAT, alt: 'CUSAT' },
  { id: 7, src: DCSMAT, alt: 'DCSMAT' },
  { id: 8, src: DHSK, alt: 'DHSK' },
  { id: 9, src: fci, alt: 'FCI' },
  { id: 10, src: GCDA, alt: 'GCDA' },
  { id: 11, src: GHE, alt: 'GHE' },
  { id: 12, src: GHLOGO, alt: 'GHLOGO' },
  { id: 13, src: HIL, alt: 'HIL' },
  { id: 14, src: HML, alt: 'HML' },
  { id: 15, src: HOLIDAY, alt: 'HOLIDAY' },
  { id: 16, src: IBS, alt: 'IBS' },
  { id: 17, src: INKEL, alt: 'INKEL' },
  { id: 18, src: KEL, alt: 'KEL' },
  // { id: 19, src: ISRO, alt: 'ISRO' },
  { id: 20, src: Lakeshore, alt: 'Lakeshore' },
  { id: 21, src: LG, alt: 'LG' },
  { id: 22, src: MC, alt: 'MC' },
  { id: 23, src: MFCLOGO, alt: 'MFCLOGO' },
  { id: 24, src: MGUK, alt: 'MGUK' },
  { id: 25, src: MILMA, alt: 'MILMA' },
  { id: 27, src: RSET, alt: 'RSET' },
  { id: 28, src: SILK, alt: 'SILK' },
  { id: 29, src: TEC, alt: 'TEC' },
  { id: 30, src: TECHNOPARK, alt: 'TECHNOPARK' },
  { id: 31, src: Traco, alt: 'Traco' },
  { id: 32, src: WAPCOS, alt: 'WAPCOS' },
];

const splitIndex = Math.ceil(clients.length / 2);
const firstHalf = clients.slice(0, splitIndex);
const secondHalf = clients.slice(splitIndex);

const Client = () => {
  const sectionStyle = {
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '50px 20px',
  };

  const containerStyle = {
    textAlign: 'center',
    color: '#fff',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    marginBottom: '40px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const rowStyle = {
    width: '100%',
    overflow: 'hidden',
    marginBottom: '20px',
  };

  const carouselStyle = {
    display: 'flex',
    width: '200%',
    animation: 'moveLogos 60s linear infinite',
  };

  const logoStyle = {
    flex: 1,
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imgStyle = {
    maxWidth: '120px',
    height: 'auto',
    transition: 'transform 0.3s ease-in-out',
  };

  const imgHoverStyle = {
    transform: 'scale(1.1)',
  };

  const keyframes = `
    @keyframes moveLogos {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `;

  return (
    <section id="clients" style={sectionStyle} >
      <style>{keyframes}</style>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Our Clients</h2>
        <p style={descriptionStyle}>
          We are proud to have worked with a diverse group of esteemed clients across various industries. Our commitment to excellence and innovation has earned us the trust and loyalty of leading brands worldwide.
        </p>
        <div style={rowStyle}>
          <div style={carouselStyle}>
            {firstHalf.map((client) => (
              <div key={client.id} style={logoStyle}>
                <img
                  src={client.src}
                  alt={client.alt}
                  style={imgStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = imgHoverStyle.transform}
                  onMouseOut={(e) => e.currentTarget.style.transform = ''}
                />
              </div>
            ))}
          </div>
          <div style={carouselStyle}>
            {secondHalf.map((client) => (
              <div key={client.id} style={logoStyle}>
                <img
                  src={client.src}
                  alt={client.alt}
                  style={imgStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = imgHoverStyle.transform}
                  onMouseOut={(e) => e.currentTarget.style.transform = ''}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
