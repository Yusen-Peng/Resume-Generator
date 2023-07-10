import React, { useState }  from 'react';
import Headers from './components/Headers';
import Prompt from './components/Prompt';
import {Page, Text, Image, Document, DownloadLink} from '@react-pdf/renderer';
import './App.css';


function App() { 
  /*
   * personal information
   */
  const [personalInfo, setPersonalInfo] = useState({
    first_name: '', 
    last_name: '', 
    email: '', 
    address: '', 
    phone: '', 
    linkedin: ''
  })

  /*
   * individual education
   */
  const [education, setEducation] = useState({
    university: '',
    graduation_date: '', 
    major: '', 
    GPA: '', 
    honor_scholar:''
  })
  /*
   * array of educations
   */
  const [educations, setEducations] = useState([])

  /*
   * individual skill
   */
  const [skill, setSkill] = useState({
    skill_name: ''
  })

  /*
   * array of skills
   */
  const [skills, setSkills] = useState([])

  /*
   * individual experience
   */
  const [experience, setExperience] = useState({
    company:'',
    company_address:'',
    position:'',
    work_date:'',
    job_summary:'',
    applied_skills:''
  })

  /*
   * array of experiences
   */
  const [experiences, setExperiences] = useState([])

  /*
   * individual project
   */
  const [project, setProject] = useState({
    project_name:'',
    project_date:'',
    project_link:'',
    project_summary:'',
    project_applied_skills: ''
  })

  /*
   * array of projects
   */
  const [projects, setProjects] = useState([])

  /*
   * individual leadership
   */
  const [leadership, setLeadership] = useState({
    organization_name:'',
    role: '',
    role_date:'',
    leadership_summary:''
  })

  /*
   * array of leaderships
   */  
  const[leaderships,setLeaderships] = useState([])


  /*
   * onChange handlers: update information with the user
   */
  function onChange_info(e) {
    setPersonalInfo(() => {
      return ({
        ...personalInfo,
        [e.target.name]: e.target.value
      });
    });
  }

  function onChange_education(e){
    setEducation(() => {
      return({
        ...education,
        [e.target.name]:e.target.value
      });
    });
  }
  
  function onChange_skill(e){
    setSkill(() => {
      return({
        ...skill,
        [e.target.name]: e.target.value
      })
    });
  }
  
  function onChange_experience(e){
    setExperience(() => {
      return ({
        ...experience,
        [e.target.name]: e.target.value
      })
    });
  }

  function onChnage_project(e){
    setProject(() => {
      return ({
        ...project,
        [e.target.name]:e.target.value
      })
    });
  }

  function onChange_leadership(e){
    setLeadership(() => {
      return({
        ...leadership,
        [e.target.name]: e.target.value
      })
    });
  }

  /*
   * add one education to the array
   */
  function add_education(){
    console.log(education.university)
    setEducations((currentEducation) => {
      return [ 
        ...currentEducation,        
        {id: crypto.randomUUID(),
         uni : education.university,
         grad_date: education.graduation_date,
         maj : education.major,
         grade : education.GPA,
         honor : education.honor_scholar
        }  
      ]
    });
  }
  /*
   * add one skill to the array
   */
  function add_skill(){
    console.log(skill.skill_name)
    setSkills((currentSkill) => {
      return [
        ...currentSkill,
        {id: crypto.randomUUID(),
         ski_name: skill.skill_name
        }
      ]
    });
  }
  /*
   * add one experience to the array
   */
  function add_experience(){
    setExperiences((currentExperience) => {
      return [
        ...currentExperience,
        {id: crypto.randomUUID(),
         com: experience.company,
         com_a: experience.company_address,
         pos: experience.position,
         w_date: experience.work_date,
         sum: experience.job_summary,
         app: experience.applied_skills
        }
      ]
    })
  }
  /*
   * add one project to the array
   */
  function add_project(){
    setProjects((currentProject) => {
      return [
        ...currentProject,
        {id: crypto.randomUUID(),
          name: project.project_name,
          date: project.project_date,
          link:project.project_link,
          sum: project.project_summary,
          ski: project.project_applied_skills
        }
      ]
    })
  }
  /*
   * add a leadership to the array
   */
  function add_leadership(){
    setLeaderships((currentLeadership) => {
      return [
        ...currentLeadership,
        {id: crypto.randomUUID(),
          rol: leadership.role,
          org: leadership.organization_name,
          date: leadership.role_date,
          sum: leadership.leadership_summary
        }
      ]
    })
  }

  //final UI below:
  return (
    <div className="App">
      <header className="App-header">
        <p className='App-title'>
          Yusen's Resume Generator
        </p>
        <p>
          Feel free close the window if you don't want a stunning resume just in 2 minutes<br/><br/>
          more information about the author:<br/>
          <a className="App-link" href="https://www.linkedin.com/in/yusen-peng-864a75260/">Yusen's LinkedIn</a>
        </p>
      </header>
      <body>

            <Headers className='App-section' sectionNum='Section1' sectionName='PERSONAL INFO'/>
            <div className='App-prompt'>
              <Prompt entry='First Name: '/>
              <input onChange={onChange_info} name='first_name'/>
              <Prompt entry='Last Name: '/>
              <input onChange={onChange_info} name='last_name'/>
              <Prompt entry='Work Email: '/>
              <input onChange={onChange_info} name='email'/>
              <Prompt entry='Current Address: '/>
              <input onChange={onChange_info} name='address'/>
              <Prompt entry='Work Phone: '/>
              <input onChange={onChange_info} name='phone'/>
              <Prompt entry='LinkedIn Profile: '/>
              <input onChange={onChange_info} name='linkedin'/>
            </div>


            <Headers sectionNum='Section2' sectionName='EDUCATION'/> 
            <div className='App-prompt'>
              <Prompt entry='University: '/>
              <input onChange={onChange_education} name='university'/>
              <Prompt entry='Graduation Date: '/>
              <input onChange={onChange_education} name='graduation_date'/>
              <Prompt entry='Major: '/>
              <input onChange={onChange_education} name='major'/>
              <Prompt entry='GPA: '/>
              <input onChange={onChange_education} name='GPA'/>
              <Prompt entry='Honor/Scholar (if any): '/>
              <input onChange={onChange_education} name='honor_scholar'/>
              <h1>Do you have more education?</h1>
              <button className='App-button' onClick={add_education}>Add more!</button>
            </div>

            <Headers sectionNum='Section3' sectionName='SKILLS'/>
            <div className='App-prompt'>
            <Prompt entry='Skill: '/>
            <input onChange={onChange_skill} name='skill_name'/>
            <h1>Add more skills!</h1>
            <button className='App-button' onClick={add_skill}>Add more!</button>
            </div>


            <Headers sectionNum='Section4' sectionName='WORK EXPERIENCE'/>      
            <div className='App-prompt'>
              <Prompt entry='Company: '/>
              <input onChange={onChange_experience} name='company'/>
              <Prompt entry='Company address: '/>
              <input onChange={onChange_experience} name='company_address'/>
              <Prompt entry='Position: '/>
              <input onChange={onChange_experience} name='position'/>
              <Prompt entry='Work date: '/>
              <input onChange={onChange_experience} name='work_date'/>
              <Prompt entry='Job summary: '/>
              <input onChange={onChange_experience} name='job_summary'/>
              <Prompt entry='Applied skills: '/>
              <input onChange={onChange_experience} name='applied_skills'/>
              <h1>Do you have more experience?</h1>
              <button className='App-button' onClick={add_experience}>Add more!</button>
            </div>
            <br/>


            <Headers sectionNum='Section5' sectionName='PROJECTS'/>
            <div className='App-prompt'>
              <Prompt entry='Project name: '/>
              <input onChange={onChnage_project} name='project_name'/>
              <Prompt entry='Project date: '/>
              <input onChange={onChnage_project} name='project_date'/>
              <Prompt entry='Project link: '/>
              <input onChange={onChnage_project} name='project_link'/>
              <Prompt entry='Project summary: '/>
              <input onChange={onChnage_project} name='project_summary'/>
              <Prompt entry='Applied skills: '/>
              <input onChange={onChnage_project} name='project_applied_skills'/>
              <h1>Don't hesitate to add more projects!</h1>
              <button className='App-button' onClick={add_project}>Add more!</button>

            </div>
            <br/>
       
  
            <Headers sectionNum='Section6' sectionName='LEADERSHIP/INVOLVEMENT'/>
            <div className='App-prompt'>
              <Prompt entry='Organization name: '/>
              <input onChange={onChange_leadership} name='organization_name'/>
              <Prompt entry='role:'/>
              <input onChange={onChange_leadership} name='role'/>
              <Prompt entry='role date: '/>
              <input onChange={onChange_leadership} name='role_date'/>
              <Prompt entry='Leadership/involvement summary: '/>
              <input onChange={onChange_leadership} name='leadership_summary'/>
              <h1>More leadership/involvement?</h1>
              <button className='App-button' onClick={add_leadership}>Add more!</button>


            </div>
            <br/>

            <br/>
            <Text className='App-final'>Your resume preview is here </Text><br/><br/><br/>
            <Text className='App-final'>&#128521;&#128521;&#128521;&#128521;</Text><br/><br/><br/><br/>
            
            <Document><Page>
            <div className='App-center'>
            <Text className='App-personal'><b>{personalInfo.first_name} {personalInfo.last_name}</b></Text><br/>
            <Text className='App-personal'>{personalInfo.email} | {personalInfo.address} | {personalInfo.phone}</Text><br/>
            <Text className='App-personal'>{personalInfo.linkedin}</Text><br/>
            </div>
            <br/>
            <Text className='App-content'><b>EDUCATION</b></Text><br/>
            {educations.map(one_education => {
                return(
                  <div>
                      <Text className='App-content'>{one_education.uni}, {one_education.grad_date}</Text><br/>
                      <Text className='App-content'> {one_education.honor} {one_education.maj}, Overall GPA: {one_education.grade}</Text><br/>
                  </div>
                )
              }
            )}

            <br/>
            <Text className='App-content'><b>SKILL</b></Text><br/>
            {skills.map(one_skill => {
                return(
                  <div>
                    <Text className='App-content'>{one_skill.ski_name} </Text>
                  </div>
                )
              }
            )}

            <Text className='App-content'><b>WORK EXPERIENCE</b></Text><br/>
            {experiences.map(one_experience => {
                return(
                  <div>
                    <Text className='App-content'>{one_experience.com}, {one_experience.com_a}</Text><br/>
                    <Text className='App-content'>{one_experience.pos}, {one_experience.w_date}</Text><br/>
                    <Text className='App-content'>Summary: {one_experience.sum}</Text><br/>
                    <Text className='App-content'>Applied skills: {one_experience.app}</Text><br/>
                  </div>
                )
              }
            )}

          <Text className='App-content'><b>PROJECTS</b></Text><br/>
            {projects.map(one_project => {
                return(
                  <div>
                    <Text className='App-content'>{one_project.name}, {one_project.date}</Text><br/>
                    <Text className='App-content'>{one_project.link}</Text><br/>
                    <Text className='App-content'>Summary: {one_project.sum}</Text><br/>
                    <Text className='App-content'>Applied skills: {one_project.ski}</Text><br/>
                  </div>
                )
              }
            )}

          <Text className='App-content'><b>LEADERSHIP/INVOLVEMENT</b></Text><br/>
            {leaderships.map(one_leadership => {
                return(
                  <div>
                    <Text className='App-content'>{one_leadership.rol}, {one_leadership.org}, {one_leadership.date}</Text><br/>
                    <Text className='App-content'>Summary: {one_leadership.sum}</Text><br/>
                  </div>
                )
              }
            )}
            </Page></Document>
             
          </body>
    </div>
  );
}

export default App;
