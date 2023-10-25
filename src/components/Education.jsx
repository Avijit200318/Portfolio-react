import React from "react";
// import EducationContent from "./EducationContent";
import AllEducation from "./AllEducation";
import AllExpreience from "./AllExperience";

function Education() {
    return (
        <>
            <section className="education" id="education">
                <h2 className="heading">My <span>Journey</span></h2>

                <div className="education-row">
                    <div className="education-column">
                        <h3 className="title">Education</h3>
                        <div className="education-box">
                            <AllEducation />
                        </div>
                    </div>

                    <div className="education-column">
                        <h3 className="title">Exprience</h3>
                        <div className="education-box">
                            <AllExpreience />                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Education;