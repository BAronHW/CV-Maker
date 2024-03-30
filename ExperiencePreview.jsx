function ExperiencePreview({ companyname, position, startdate, enddate, location, description }) {
    return (
        <div className="experience-preview">
            <h3>{companyname}</h3>
            <h3>{position}</h3>
            <h3>{startdate}</h3>
            <h3>{enddate}</h3>
            <h3>{location}</h3>
            <p>{description}</p> {/* Assuming description might be longer text */}
        </div>
    );
}

export default ExperiencePreview