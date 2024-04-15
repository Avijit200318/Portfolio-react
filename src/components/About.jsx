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
                    <h3>MERN Stack Developer</h3>
                    <p>Passionate aspiring developer dedicated to launching a dynamic career in Web Development. Proficient in
                        MERN Stack Development, Frontend Web Development, Python, C++, Data Structures, Algorithms, Node.js,
                        and React.js. With a keen interest in leveraging cutting-edge technologies to create innovative solutions,
                        committed to continuous learning and contributing positively to the ever-evolving landscape of technology.
                    </p>
                </div>

                <div className="btn-box btns center mx">
                    <a className="btn" href="">Read More</a>
                </div>

            </section>

        </>
    )
}
export default About;