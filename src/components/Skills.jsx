import React from "react";
import SkillColOne from "./SkillColOne";
import SkillColTwo from "./SkillColTwo";

function Skills() {
    return (
        <>
            <section className="skills" id="skills">
                <h2 className="heading">My <span>Skills</span></h2>

                <div className="skills-row">
                    <div className="skills-column">
                        <SkillColOne />
                    </div>
                    
                    <div className="skills-column">
                        <SkillColTwo />
                    </div>

                </div>
            </section>
        </>
    )
}
export default Skills;