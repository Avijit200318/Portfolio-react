import React, {useState, useEffect} from "react";


function Home() {

    const [text, setText] = useState("Programmer");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (prevText === "Programmer") {
          return "Web Developer";
        } else if (prevText === "Web Developer") {
          return "Frontend Developer";
        } else {
          return "Programmer";
        }
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

    return (
        <>
            <section className="home" id="home">
                <div className="home-content">
                    <h1>Hi, I'm <span>Avijit Hira</span></h1>
                    <div className="text-animate">
                        <span className="text first-text">I'm a </span>
                        <span className="text sec-text">{text} </span>
                        
                    </div>
                    <p>As an aspiring developer with a strong passion for coding and technology, I am committed to launch a carrer in the field of Web Development. Proficient in Fontend Web Development, Python, C, C++, Data Structures and Algorithms.</p>

                    <div className="btn-box">
                        <a href="" className="btn">Hire Me</a>
                        <a href="" className="btn">Resume</a>
                    </div>
                </div>

                <div className="home-sci">
                    <a href="https://www.facebook.com/avijit.hira.332?mibextid=2JQ9oc"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/avijit-hira-819a99258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin"></i></a>
                </div>

                <div className="home-imgHover"></div>
            </section>
        </>
    )
}
export default Home;