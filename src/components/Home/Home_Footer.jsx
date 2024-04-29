import React from 'react';
import './Home_Footer.css';

const Home_Footer = () => {
  return (
    <div>
      <div className="paddings innerWidth">
        <div className="footer-content">

          <div>
            <div className="flexColStart">
              <span className="primaryText">Directions</span>
              <span className="secondaryText">4345 Wellborn Rd, Bryan, TX 77801</span>
              <div className="flexCenter footer-menu">
              </div>
              {/* Google Maps Embed */}
                <div className="">
                  <iframe
                    title="Google Maps"
                    className="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.187536607826!2d-96.33474908505767!3d30.640304281658253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683fe18855147%3A0x9a51f0c066a0d8a3!2s4345%20Wellborn%20Rd%2C%20Bryan%2C%20TX%2077801%2C%20USA!5e0!3m2!1sen!2sca!4v1649440972931!5m2!1sen!2sca"
                    allowFullScreen=""
                    loading="lazy"
                    frameBorder="0" // Add frameBorder="0" to make it borderless
                  ></iframe>
                </div>
            </div>            
          </div>


          <div>
            <div className="flexColStart">
              <span className="primaryText">Hours</span>
              <span className="secondaryText">
                Sunday: 11 AM–7 PM <br />
                Monday: 10 AM–8:30 PM <br />
                Tuesday: 10 AM–8:30 PM <br />
                Wednesday: 10 AM–8:30 PM <br />
                Thursday: 10 AM–8:30 PM <br />
                Friday: 10 AM–9 PM <br />
                Saturday: 11 AM–9 PM
              </span>
            </div>            
          </div>

        
          <div>
            <div className="flexColStart">
              <span className="primaryText">Contact</span>
              <span className="secondaryText">Phone Number: (979) 450-7863</span>
              <span className="secondaryText">Email: @gmaill.com</span>
              <div className="flexCenter footer-contact">
                <span>Facebook</span>
                <span>Instagram</span>
              </div>
            </div>            
          </div>

        </div>          
      </div>
    </div>
  );
};

export default Home_Footer;
