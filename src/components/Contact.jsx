import React, { useRef } from 'react';
import facebookicon from '../assets/facebookicon.jpg';
import linkedinicon from '../assets/linkedinicon.jpg';
import twittericon from '../assets/twittericon.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_z0uiifk', 'template_5vghfm2', form.current, '2yrFSpXNrteMuRH9_')
      .then(
        (result) => {
          alert('Submitted!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send email, please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" style={styles.contactPage}>
      <div style={styles.contactContainer}>
        <h1 style={styles.contactPageTitle}>Contact Us</h1>
        <p style={styles.contactParagraph}>We would love to hear from you! Please use the form below to get in touch or visit our location.</p>

        <div style={styles.contactContent}>
          <div style={styles.contactInfo}>
            <div style={styles.location}>
              {/* Map location */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0606462800038!2d76.31918587450866!3d10.011849472831816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cfe6aaaaaab%3A0xc3d68b87a5561776!2sABM%20Electricals!5e0!3m2!1sen!2sin!4v1724931213374!5m2!1sen!2sin"
                width="600"
                height="450"
                style={styles.map}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <address style={styles.address}>
                Chembumukku, Thrikakara, Ernakulam, Kochi, Kerala 682021
              </address>
              <p style={styles.contactDetails}>Gmail: abmelectricals123@gmail.com</p>
              <p style={styles.contactDetails}>Contact No: +91 9387316881</p>
            </div>
            <div style={styles.socialLinks}>
              <a href="https://www.facebook.com/profile.php?id=100006318671212" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                <img src={facebookicon} alt="facebook" style={styles.linkIcon} />
              </a>
              <a href="https://www.linkedin.com/company/abm-electricals/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                <img src={linkedinicon} alt="instagram" style={styles.linkIcon} />
              </a>
              <a href="https://x.com/ABM_Electricals" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                <img src={twittericon} alt="twitter" style={styles.linkIcon} />
              </a>
            </div>
          </div>

          <div style={styles.contactFormWrapper}>
            <form style={styles.contactForm} ref={form} onSubmit={sendEmail}>
              <input type="text" style={styles.inputField} placeholder='Your Name' name='from_name' required />
              <input type="email" style={styles.inputField} placeholder='Your Email' name='your_email' required />
              {/* Mobile number input is now optional */}
              <input type="tel" style={styles.inputField} placeholder='Your Mobile Number (Optional)' name='mobile_number' />
              <textarea style={styles.messageBox} name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type='submit' style={styles.submitBtn}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contactPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 20px',
    backgroundColor: '#000',
    color: '#fff',
  },
  contactContainer: {
    maxWidth: '1200px',
    width: '100%',
    backgroundColor: '#111',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
  },
  contactPageTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  contactParagraph: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginBottom: '40px',
  },
  contactContent: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  contactInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  location: {
    width: '100%',
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '300px',
    border: 'none',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  address: {
    fontSize: '1rem',
    marginBottom: '10px',
    lineHeight: '1.5',
    fontWeight: 'normal',
    fontFamily: 'Arial, sans-serif',
  },
  contactDetails: {
    fontSize: '1rem',
    marginBottom: '10px',
    lineHeight: '1.5',
    fontWeight: 'normal',
    fontFamily: 'Arial, sans-serif',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  iconLink: {
    transition: 'transform 0.3s, box-shadow 0.3s',
    display: 'inline-block',
    borderRadius: '50%',
  },
  linkIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    transition: 'transform 0.3s',
  },
  contactFormWrapper: {
    flex: 1,
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#222',
    color: '#fff',
  },
  messageBox: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#222',
    color: '#fff',
  },
  submitBtn: {
    padding: '12px 20px',
    backgroundColor: '#f00',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Contact;
