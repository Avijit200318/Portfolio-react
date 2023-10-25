import React from "react";

function ProjectCard(props) {
    return (
        <>
        <a href={props.link}>

            <div className="card">
                <span></span>
                <span></span>
                <img src={props.img} alt=""></img>
                <h4>{props.heading}</h4>
                <p>{props.info}</p>
            </div>
        </a>
        </>
    )
}
export default ProjectCard;