import React from 'react';

// Define CSS in JS object
const footerStyles = {
  footer: {
    background: 'linear-gradient(180deg, #000 50%, #333 100%)',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
  },
  linksSection: {
    marginBottom: '20px',
  },
  linksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap', // Allows wrapping of links on smaller screens
  },
  linkItem: {
    display: 'inline',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'color 0.3s',
  },
  footerBottom: {
    marginTop: '20px',
  },
  copyRight: {
    margin: 0,
  },
  // Responsive styles
  '@media (max-width: 768px)': {
    footer: {
      padding: '15px 10px',
    },
    linksList: {
      flexDirection: 'column',
      gap: '10px',
    },
    linkItem: {
      margin: '5px 0',
    },
  },
  '@media (min-width: 769px)': {
    footer: {
      padding: '20px 0',
    },
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        <div style={footerStyles.linksSection}>
          <ul style={footerStyles.linksList}>
            <li style={footerStyles.linkItem}><a href="#home" style={footerStyles.link}>Home</a></li>
            <li style={footerStyles.linkItem}><a href="#about" style={footerStyles.link}>About Us</a></li>
            <li style={footerStyles.linkItem}><a href="#services" style={footerStyles.link}>Services</a></li>
            <li style={footerStyles.linkItem}><a href="#gallery" style={footerStyles.link}>Projects</a></li>
            <li style={footerStyles.linkItem}><a href="#clients" style={footerStyles.link}>Clients</a></li>
            <li style={footerStyles.linkItem}><a href="#contact" style={footerStyles.link}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div style={footerStyles.footerBottom}>
      <p style={footerStyles.copyRight}>&copy; {new Date().getFullYear()} ABM Electricals.</p>
        <p style={footerStyles.copyRight}>
          <a
            href="mailto:alfinantony77@gmail.com"
            style={{
              color: '#fff',
              fontSize: 12
            }}
          >
            Created By Alfin Antony
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
