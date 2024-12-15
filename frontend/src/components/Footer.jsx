import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
            <div className="sb__footer section__padding"> 
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>For Business</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/healthplan">
                        <p>Health Plan</p>
                    </a>
                    <a href="/individual">
                        <p>Individual</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>For Resources</h4>
                    <a href="/resource">
                        <p>Resource Center</p>
                    </a>
                    <a href="/resource">
                        <p>Testimonials</p>
                    </a>
                    <a href="/resource">
                        <p>STV</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>For Partners</h4>
                    <a href="/employer">
                        <p>Swing Tech</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/career">
                        <p>Career</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/ecell.mit/" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/company/ecellmit" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.youtube.com/@e-cellmit" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://x.com/ecellmit/" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                {/*
                <a href="https://www.facebook.com/projectmanas" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>*/}
              </div>
            </div>

            </div>
        <hr></hr>

            </div>
        </div>
  )
}

export default Footer
