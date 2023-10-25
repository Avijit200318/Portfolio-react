import React from "react";
import { skillsDetailsTwo } from "../SkillDetails";
import SkillContent from "./SkillContent";

function SkillColTwo() {
    return (
        <>
            <h3 className="title">Coding Skils</h3>

            <div className="skills-box">
                <div className="skills-content">
                    {
                        skillsDetailsTwo.map((element, index) => {
                            return <SkillContent key={index} heading={element.heading} headingPercent={element.headingPercent} />
                        })
                    }

                </div>
            </div>
        </>
    )
}
export default SkillColTwo;