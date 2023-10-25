import React from "react";
import EducationContent from "./EducationContent";
import { ExperienceDetails } from "../EducationDetails"

function AllExpreience() {
    return (
        <>
            {
                ExperienceDetails.map((element, index) => {
                    return <EducationContent key={index} year={element.year} heading={element.heading} info={element.info} />
                })
            }
        </>
    )
}
export default AllExpreience;