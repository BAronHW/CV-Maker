function Experience({personalInfo, onInfoChange: handlePersonalInfoChange}){
    return(
        <div className="experience-div">
            <h2>Experience</h2>
            <input 
                type="text" 
                name="companyname" 
                placeholder="Company Name"
                value={personalInfo.companyname}
                onChange={handlePersonalInfoChange}
            />
            <input 
                type="text" 
                name="position"
                placeholder="Position Title"
                value={personalInfo.position}
                onChange={handlePersonalInfoChange}
            />
            <input 
                type="text" 
                name="startdate"
                placeholder="Start Date"
                value={personalInfo.startdate}
                onChange={handlePersonalInfoChange}
            />
            <input 
                type="text" 
                name="enddate"
                placeholder="End Date"
                value={personalInfo.enddate}
                onChange={handlePersonalInfoChange}
            />
            <input 
                type="text" 
                name="location"
                placeholder="Location"
                value={personalInfo.location}
                onChange={handlePersonalInfoChange}
            />
            <input 
                type="text" 
                name="description"
                placeholder="Description"
                value={personalInfo.description}
                onChange={handlePersonalInfoChange}
            />
        </div>
    )
}

export default Experience