function EducationPreview({university, degree}){
    return(
        <div className="education-preview">
            <h2>{university}</h2>
            <h3>{degree}</h3>
        </div>
    )
}

export default EducationPreview