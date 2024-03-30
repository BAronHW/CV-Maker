import React from 'react';
import EducationPreview from "./EducationPreview";
import PreviewHeader from "./PreviewHeader";
import ExperiencePreview from "./ExperiencePreview";

function Preview({ personalInfo }) {
    return (
        <div className="preview-container">
            <PreviewHeader 
                firstname={personalInfo.firstName}
                lastname={personalInfo.lastName}
            />
            <EducationPreview
                university={personalInfo.university}
                degree={personalInfo.degree}
            />
            <ExperiencePreview />
        </div>
    );
}

export default Preview;
