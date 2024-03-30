import React, { useState } from 'react';
import { useEffect } from 'react';
import './assets/index.css';
import Header from './Components/Header';
// import Preview from './Components/prev/Preview';
import PersonalData from './Components/PersonData';
import Education from './Components/Education';
import EducationPreview from "./Components/prev/EducationPreview";
import PreviewHeader from "./Components/prev/PreviewHeader";
import ExperiencePreview from "./Components/prev/ExperiencePreview";
import Experiences from './Components/Experiences';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    university: '',
    degree: '',
    companyname: '',
    position: '',
    startdate: '',
    enddate: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    console.log(personalInfo);
  }, [personalInfo]);
  

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    // console.log("name: "+ name + "value: "+value)
    setPersonalInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
    console.log(personalInfo)
  };

  const onautofill = () => {
    setPersonalInfo({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com',
      address: '1234 Elm Street',
      university: 'Dream University',
      degree: 'Computer Science',
    });
  };
  
  function alert(){
    console.log("hi")
  }

  return (
    <div className='main-container'>
      <div className='form-container'>
        <Header name={"Aaron Wan"}/>
        <PersonalData personalInfo={personalInfo} onInfoChange={handlePersonalInfoChange} />
        <Education personalInfo={personalInfo} onInfoChange={handlePersonalInfoChange}/>
        <Experiences personalInfo={personalInfo} onInfoChange={handlePersonalInfoChange}/>
      </div>
      <div className='preview-container'>
        <PreviewHeader firstname={personalInfo.firstName} lastname={personalInfo.lastName} email={personalInfo.email} address={personalInfo.address}/>
        <EducationPreview university={personalInfo.university} degree={personalInfo.degree} />
        <ExperiencePreview companyname={personalInfo.companyname} position={personalInfo.position} startdate={personalInfo.startdate} enddate={personalInfo.enddate} location={personalInfo.location} description={personalInfo.description}/>
      </div>
    </div>
  );
}

export default App;
