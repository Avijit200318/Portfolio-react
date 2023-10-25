import React from "react";
import EduactionContent from "./EducationContent";
import EducationDetails from "../EducationDetails";

function AllEducation()
{
    return(
        <>
        {
            EducationDetails.map((element, index) => {
                return<EduactionContent key={index} year={element.year} heading={element.heading} info={element.info} />
            })
        }
        </>
    )
}
export default AllEducation;