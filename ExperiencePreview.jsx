function ExperiencePreview({ companyname, position, startdate, enddate, location, description }) {
    return (
        <div>
            <h2 className="experience-preview-header">Experiences</h2>
            <div className="experience-preview">
                <h3>{companyname}</h3>
                <h3>{position}</h3>
                <h3>{startdate}</h3>
                <h3>{enddate}</h3>
                <h3>{location}</h3>
                <p>{description}</p>
            </div>
        </div>
        
    );
}

export default ExperiencePreview