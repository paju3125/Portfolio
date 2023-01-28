import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className='footer'>
            <div className="container row">
                <div className="col-4 social-links text-light p-2" onClick={()=>window.location.href="https://www.linkedin.com/in/prajval-gandhi-648504211/"}>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    {/* https://www.linkedin.com/in/prajval-gandhi-648504211/ */}
                    <span>LinkedIn</span>
                </div>
                <div className="col-4 social-links  text-light p-2"  onClick={()=>window.location.href="https://www.instagram.com/paju_3105/"}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    <span>Instagram</span>
                </div>
                <div className="col-4 social-links text-light p-2"  onClick={()=>window.location.href="https://www.facebook.com/prajval.gandhi.9"}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    <span>Facebook</span>
                </div>
            </div>
        </div>
    )
}
