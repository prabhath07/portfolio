import React from 'react'
import Nav from  './Nav';
import emailjs from 'emailjs-com'

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
            </div>
        </div>


    </div>
    )
}

export default Contact
