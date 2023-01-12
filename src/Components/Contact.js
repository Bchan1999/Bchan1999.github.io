import React from 'react'
import '../Style/Contact.css'

const Contact = (props) => {
    return (
        <div className = "contact-hero" id='contact' >
             <form className="container" action="https://formsubmit.co/linda_mcchan@hotmail.com" method="POST">
               <fieldset id="box" className="has-background-white-ter">
                  <legend className="is-size-3">Contact Me</legend>
                  <label className="label">Full Name</label>
                  <input className="input" type="text" name="name" required/>
                  <label className="label">Email</label>
                  <input className="input" type="email" name="email" required/>
                  <label className="label">Message</label>
                  <textarea className="textarea" name="comments"></textarea>
                  <button className="button is-link" type="submit">Send</button>
               </fieldset>                                   
         </form>
        </div>
    )
}
export default Contact;