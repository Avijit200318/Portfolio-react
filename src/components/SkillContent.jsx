import React from "react";

function SkillContent(props) {
    return (
        <>
            <div className="progress">
                <h3>{props.heading} <span>{props.headingPercent}%</span></h3>
                <div className="bar"><span style={{width: props.headingPercent+"%"}}></span></div>
            </div>
        </>
    )
}
export default SkillContent;