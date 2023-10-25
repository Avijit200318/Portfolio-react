import React from "react";
import AboutPic from "../picture/me.png";
function About() {
    return (
        <>
            <section className="about" id="about">
                <h2 className="heading">About <span>Me</span></h2>
                <div className="about-img">
                    <img src={AboutPic} alt=""></img>
                    <span className="circle-spin"></span>
                </div>

                <div className="about-content">
                    <h3>Fontend Developer</h3>
                    <p>Currently persuing B.Tech IT at University of Calcutta. As an aspiring developer with a strong passion for coding and technology, I am committed to launch a carrer in the field of Web Development. Proficient in Fontend Web Development, Python, C, C++, Data Structures and Algorithms.</p>
                </div>

                <div className="btn-box btns center mx">
                    <a className="btn" href="">Read More</a>
                </div>

            </section>

        </>
    )
}
export default About;