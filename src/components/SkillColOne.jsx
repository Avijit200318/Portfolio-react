import React from "react";
import skillsDetails from "../SkillDetails";
import SkillContent from "./SkillContent";

function SkillColOne() {
    return (
        <>
            <h3 className="title">Coding Skils</h3>

            <div className="skills-box">
                <div className="skills-content">
                    {
                        skillsDetails.map((element, index) => {
                            return <SkillContent key={index} heading={element.heading} headingPercent={element.headingPercent} />
                        })
                    }

                </div>
            </div>
        </>
    )
}
export default SkillColOne;