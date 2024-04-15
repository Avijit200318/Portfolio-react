import React, { useState } from "react";

function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailSubject, setEmailSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <section className="contact" id="contact">
                <h2 className="heading">Contact <span>Me</span></h2>

                <form>
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
                        <a href={`mailto:avijithira14@gmail.com?subject=Regarding ${emailSubject}&body=${message}`} className="submitBtn">
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
