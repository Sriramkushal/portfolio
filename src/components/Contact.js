import React from 'react'

const Contact = () => {
  return (
     <section id="contact" className="contact-section">
        <div className="container">
            <h1 className="section-title">Contact Details</h1>
            <div className="contact-form-container">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlForr="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter Your Name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email ID:</label>
                        <input type="email" id="email" name="email" placeholder="Email ID" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" placeholder="Subject" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" placeholder="Enter your message" rows="4"
                            required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact