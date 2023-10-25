import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailSubject, setEmailSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
    
        const emailParams = {
            subject: emailSubject,
            from_name: fullName,
            reply_to: email, // Set reply_to to the sender's email address
            mobile_number: mobileNumber,
            message: message
        };
    
        emailjs.send('service_q92dj9a', 'template_8rr8n8j', emailParams, '64_U7aVeIiSuk7m3t')
            .then((response) => {
                setFullName('');
                setEmail('');
                setMobileNumber('');
                setEmailSubject('');
                setMessage('');
                alert('Email sent successfully:', response);
                // You can add a success message or redirect the user to a thank you page here.
            })
            .catch((error) => {
                setFullName('');
                setEmail('');
                setMobileNumber('');
                setEmailSubject('');
                setMessage('');
                alert.error('Email failed to send:', error);
                // Handle email sending failure, show an error message to the user, etc.
            });
    };
    

    return (
        <>
            <section className="contact" id="contact">
                <h2 className="heading">Contact <span>Me</span></h2>

                <form onSubmit={sendEmail}>
                    <div className="input-box">
                        <div className="input-field">
                            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                            <span className="focus"></span>
                        </div>

                        <div className="input-field">
                            <input type="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <span className="focus"></span>
                        </div>
                    </div>

                    <div className="input-box">
                        <div className="input-field">
                            <input type="tel" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
                            <span className="focus"></span>
                        </div>

                        <div className="input-field">
                            <input type="text" placeholder="Email Subject" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} required />
                            <span className="focus"></span>
                        </div>
                    </div>

                    <div className="text-field">
                        <textarea cols="30" rows="10" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        <span className="focus"></span>
                    </div>

                    <div className="btn-box btn center mx">
                        <a className="submitBtn" onClick={sendEmail}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Contact;
