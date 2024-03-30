function EducationPreview({university, degree}){
    return(
        <div>
            <h2 className="education-preview-header">University</h2>
            <div className="education-preview">
            <h2>{university}</h2>
            <h3>{degree}</h3>
        </div>
        </div>
        
    )
}

export default EducationPreview