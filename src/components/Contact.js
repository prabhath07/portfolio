import React from 'react'
import Nav from  './Nav';
import emailjs from 'emailjs-com'
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_9cfmhjy', 'template_gijaayi', e.target, 'user_dhu6H1h2ztv9L7SZKYukg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className='screen'>
        <Nav/>
        <div className='main'>
        <div className="container">
            <div className='ctit'>
                <span>
                         Contact Me
                </span>
            </div>
            <form onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Name" name="name"/>
            <input type="email" className="email" placeholder="Email Address" name="email"/>
            <input type="text" className="subject" placeholder="Subject" name="subject"/>
            <textarea className="message" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
            <input type="submit" className="sub" value="Send "></input>
            </form>
                <div className='icons'>
                        <a className='link' href='https://www.facebook.com/prabhath.akula.3/'><FacebookIcon/></a>
                        <a className='link' href='https://www.instagram.com/prabhath_akula/'><InstagramIcon/></a>

                        <a className='link' href='https://www.linkedin.com/in/prabhath-akula-a2817a194/'>
                        <LinkedInIcon></LinkedInIcon>

                        </a>
                </div>
                       
         </div>
        </div>


    </div>
    )
}

export default Contact
