import React from 'react'
import '../Style/Contact.css'

const Contact = (props) => {
    return (
        <div className = "contact-hero">
             <form className="container" >
               <fieldset id="box" className="has-background-white-ter">
                  <legend className="is-size-3">Contact Me</legend>
                  <label className="label">Full Name</label>
                  <input className="input" type="text" name="name"/>
                  <label className="label">Email</label>
                  <input className="input" type="text" name="name"/>
                  <label className="label">Message</label>
                  <textarea className="textarea" name="comments"></textarea>
                  <button className="button is-link">Submit</button>
               </fieldset>                                   
         </form>
        </div>
    )
}
export default Contact;