import React from "react";
import AllProjectCards from "./AllProjectCards";

function Projects() {
    return (
        <>
            <section className="projects" id="projects">
                <h2 className="heading">Personal <span>Projects</span></h2>
                <AllProjectCards />
            </section>
        </>
    )
}
export default Projects;