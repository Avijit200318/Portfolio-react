import React from "react";
import projectDetails from "../ProjectDetails";
import ProjectCard from "./ProjectCard";

function AllProjectCards() {
    return (
        <>
            <div className="projectContent">
                {
                    projectDetails.map((element, index) => {
                        return <ProjectCard key={index} link={element.link} img={element.img} heading={element.heading} info={element.info} />
                    })
                }
            </div>
        </>
    )
}
export default AllProjectCards;