import React from "react";

function EducationContent(props) {
    return (
        <>
            <div className="education-content">
                <div className="content">
                    <div className="year"><i className="fa-regular fa-calendar-days"></i> {props.year}</div>
                    <h3>{props.heading}</h3>
                    <p>{props.info}</p>
                </div>
            </div>
        </>
    )
}
export default EducationContent;