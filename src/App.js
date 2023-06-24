import React, { useState }  from 'react';
import Headers from './components/Headers';
import Prompt from './components/Prompt';
import {Page, Text, Image, Document} from '@react-pdf/renderer';
import './App.css';


function App() { 

  /*
   * keep track of attributes
   */
  const [formData, setFormData] = useState({
    first_name: '', last_name: '', email: '', address: '', phone: '', linkedin: '',
    university: '', graduation_date: '', major: '', GPA: '', honor_scholar:'',
    company:'', company_address: '',position:'',work_date:'',job_summary:'',applied_skills:'',
    company2:'',company_address2: '',position2:'',work_date2:'',job_summary2:'',applied_skills2:'',
    JavaScript: false,Python: false,Java: false,HTML: false,Cpp:false,CSS: false,Linux:false,additional_skills:'',
    project_name:'',project_date:'',project_link:'',project_summary:'',project_applied_skills: '',
    project_name2:'',project_date2:'',project_link2:'',project_summary2:'',project_applied_skills2: '',
    project_name3:'',project_date3:'',project_link3:'',project_summary3:'',project_applied_skills3: '',
    organization_name:'',role: '',role_date:'',leadership_summary:'',
  })


  /*
      * update states
    */
  function onChangeHandler(event) {
    setFormData(() => {
      return ({
        ...formData,
        [event.target.name]: event.target.value
      });
    });
  }
  
  function codingSkillChecked(){
    let result = '';
    if(formData.Java){
      result += 'Java  ';
    }
    if(formData.Python){
      result += 'Python  ';
    }
    if(formData.JavaScript){
      result += 'JavaScript  ';
    }
    if(formData.Cpp){
      result += 'C++  ';
    }
    if(formData.HTML){
      result += 'HTML  ';
    }
    if(formData.CSS){
      result += 'CSS  ';
    }
    return result;
  }

  function linuxChecked(){
    var result ='';
    if(formData.Linux){
      result = 'Linux  ';
    }
    return result;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className='App-title'>
          Yusen's Resume Generator
        </p>
        <p>
          Wanna create a stunning resume in 10 seconds?<br/> This React app is for you!<br/>
          By filling some blanks<br/> 
          you are gonna be hired tomorrow!<br/>
          more information about the author:<br/>
          <a className="App-link" href="https://www.linkedin.com/in/yusen-peng-864a75260/">Yusen's LinkedIn</a>
        </p>
      </header>
      <body>

            <Headers className='App-section' sectionNum='Section1' sectionName='PERSONAL INFO'/>
            <div className='App-prompt'>
              <Prompt entry='First Name: '/>
              <input onChange={onChangeHandler} name='first_name'/>
              <Prompt entry='Last Name: '/>
              <input onChange={onChangeHandler} name='last_name'/>
              <Prompt entry='Work Email: '/>
              <input onChange={onChangeHandler} name='email'/>
              <Prompt entry='Current Address: '/>
              <input onChange={onChangeHandler} name='address'/>
              <Prompt entry='Work Phone: '/>
              <input onChange={onChangeHandler} name='phone'/>
              <Prompt entry='LinkedIn Profile: '/>
              <input onChange={onChangeHandler} name='linkedin'/>
            </div>


            <Headers sectionNum='Section2' sectionName='EDUCATION'/> 
            <div className='App-prompt'>
              <Prompt entry='University: '/>
              <input onChange={onChangeHandler} name='university'/>
              <Prompt entry='Graduation Date: '/>
              <input onChange={onChangeHandler} name='graduation_date'/>
              <Prompt entry='Major: '/>
              <input onChange={onChangeHandler} name='major'/>
              <Prompt entry='GPA: '/>
              <input onChange={onChangeHandler} name='GPA'/>
              <Prompt entry='Honor/Scholar (if any): '/>
              <input onChange={onChangeHandler} name='honor_scholar'/>
            </div>

            <Headers sectionNum='Section3' sectionName='SKILLS'/>
            <div className='App-prompt'>
              <Prompt id='1' entry='Java:'/>
              <input onChange={onChangeHandler} className='checked' type='checkbox' name='Java'/>
              <Prompt entry='Python:'/>
              <input onChange={onChangeHandler} className='checked' type='checkbox' name='Python'/>
              <Prompt entry='C++:'/>
              <input onChange={onChangeHandler} className='checked' type='checkbox' name='Cpp'/>
              <Prompt entry='JavaScript:'/>
              <input onChange={onChangeHandler} className='checked' type='checkbox' name='JavaScript'/>
              <Prompt entry='HTML:'/>
              <input onChange={onChangeHandler} className='checked' type='checkbox' name='HTML'/> 
              <Prompt entry='CSS:'/>
              <input onChange={onChangeHandler} className='checked' type='checkbox' name='CSS'/>  
              <Prompt entry='Linux:'/>
              <input onChange={onChangeHandler} className='checked' type='checkbox' name='Linux'/>
              <Prompt entry='Other additional skills:'/>
              <input onChange={onChangeHandler} name='additional_skills'/>
            </div>


            <Headers sectionNum='Section4' sectionName='WORK EXPERIENCE'/>      
            <div className='App-prompt'>
              <Prompt entry='Company: '/>
              <input onChange={onChangeHandler} name='company'/>
              <Prompt entry='Company address: '/>
              <input onChange={onChangeHandler} name='company_address'/>
              <Prompt entry='Position: '/>
              <input onChange={onChangeHandler} name='position'/>
              <Prompt entry='Work date: '/>
              <input onChange={onChangeHandler} name='work_date'/>
              <Prompt entry='Job summary: '/>
              <input onChange={onChangeHandler} name='job_summary'/>
              <Prompt entry='Applied skills: '/>
              <input onChange={onChangeHandler} name='applied_skills'/>
            </div>
            <br/>
            <div className='App-prompt'>
              <Prompt entry='Company: '/>
              <input onChange={onChangeHandler} name='company2'/>
              <Prompt entry='Company address: '/>
              <input onChange={onChangeHandler} name='company_address2'/>
              <Prompt entry='Position: '/>
              <input onChange={onChangeHandler} name='position2'/>
              <Prompt entry='Work date: '/>
              <input onChange={onChangeHandler} name='work_date2'/>
              <Prompt entry='Job summary: '/>
              <input onChange={onChangeHandler} name='job_summary2'/>
              <Prompt entry='Applied skills: '/>
              <input onChange={onChangeHandler} name='applied_skills2'/>
            </div>
            <br/>


            <Headers sectionNum='Section5' sectionName='PROJECTS'/>
            <div className='App-prompt'>
              <Prompt entry='Project name: '/>
              <input onChange={onChangeHandler} name='project_name'/>
              <Prompt entry='Project date: '/>
              <input onChange={onChangeHandler} name='project_date'/>
              <Prompt entry='Project link: '/>
              <input onChange={onChangeHandler} name='project_link'/>
              <Prompt entry='Project summary: '/>
              <input onChange={onChangeHandler} name='project_summary'/>
              <Prompt entry='Applied skills: '/>
              <input onChange={onChangeHandler} name='project_applied_skills'/>
            </div>
            <br/>
            <div className='App-prompt'>
              <Prompt entry='Project name: '/>
              <input onChange={onChangeHandler} name='project_name2'/>
              <Prompt entry='Project date: '/>
              <input onChange={onChangeHandler} name='project_date2'/>
              <Prompt entry='Project link: '/>
              <input onChange={onChangeHandler} name='project_link2'/>
              <Prompt entry='Project summary: '/>
              <input onChange={onChangeHandler} name='project_summary2'/>
              <Prompt entry='Applied skills: '/>
              <input onChange={onChangeHandler} name='project_applied_skills2'/>
            </div>
            <br/>
            <div className='App-prompt'>
              <Prompt entry='Project name: '/>
              <input onChange={onChangeHandler} name='project_name3'/>
              <Prompt entry='Project date: '/>
              <input onChange={onChangeHandler} name='project_date3'/>
              <Prompt entry='Project link: '/>
              <input onChange={onChangeHandler} name='project_link3'/>
              <Prompt entry='Project summary: '/>
              <input onChange={onChangeHandler} name='project_summary3'/>
              <Prompt entry='Applied skills: '/>
              <input onChange={onChangeHandler} name='project_applied_skills3'/>
            </div>
            <br/>
  
            <Headers sectionNum='Section6' sectionName='LEADERSHIP/INVOLVEMENT'/>
            <div className='App-prompt'>
              <Prompt entry='Organization name: '/>
              <input onChange={onChangeHandler} name='organization_name'/>
              <Prompt entry='role:'/>
              <input onChange={onChangeHandler} name='role'/>
              <Prompt entry='role date: '/>
              <input onChange={onChangeHandler} name='role_date'/>
              <Prompt entry='Leadership/involvement summary: '/>
              <input onChange={onChangeHandler} name='leadership_summary'/>
            </div>
            <br/>

            <br/>
            <Text className='App-final'>Your resume is here </Text><br/>
            <Text className='App-final'>&#128521;&#128521;&#128521;&#128521;</Text><br/>
            <Document><Page>
            <div className='App-center'>
            <Text className='App-personal'><b>{formData.first_name} {formData.last_name}</b></Text><br/>
            <Text className='App-personal'>{formData.email} | {formData.address} | {formData.phone}</Text><br/>
            <Text className='App-personal'>{formData.linkedin}</Text><br/>
            </div>
            <br/>
            <Text className='App-content'><b>EDUCATION</b></Text><br/>
            <Text className='App-content'>{formData.university}, {formData.graduation_date}   </Text><br/>
            <Text className='App-content'> {formData.honor_scholar} {formData.major}  Overall GPA: {formData.GPA}</Text><br/>
            <br/>
            <Text className='App-content'><b>SKILLS</b></Text><br/>
            <Text className='App-content'>Coding languages: {codingSkillChecked()}</Text><br/>
            <Text className='App-content'>Operating Systems: {linuxChecked()}  Windows</Text><br/>
            <Text className='App-content'>Other skills: {formData.additional_skills}</Text><br/>      
            <br/>
            <Text className='App-content'><b>WORK EXPERIENCE</b></Text><br/>
            <Text className='App-content'>{formData.company}, {formData.company_address}</Text><br/>
            <Text className='App-content'>{formData.position}, {formData.work_date}</Text><br/>
            <Text className='App-content'>Summary: {formData.job_summary}</Text><br/>
            <Text className='App-content'>Applied skills: {formData.applied_skills}</Text><br/>
            <Text className='App-content'>{formData.company2}, {formData.company_address2}</Text><br/>
            <Text className='App-content'>{formData.position2}, {formData.work_date2}</Text><br/>
            <Text className='App-content'>Summary: {formData.job_summary2}</Text><br/>
            <Text className='App-content'>Applied skills: {formData.applied_skills2}</Text><br/>
            <br/>
            <Text className='App-content'><b>PROJECTS</b></Text><br/>
            <Text className='App-content'>{formData.project_name}, {formData.project_date}   {formData.project_link}</Text><br/>
            <Text className='App-content'>Summary: {formData.project_summary}</Text><br/>
            <Text className='App-content'>Applied skills: {formData.project_applied_skills}</Text><br/>
            <Text className='App-content'>{formData.project_name2}, {formData.project_date2}   {formData.project_link2}</Text><br/>
            <Text className='App-content'>Summary: {formData.project_summary2}</Text><br/>
            <Text className='App-content'>Applied skills: {formData.project_applied_skills2}</Text><br/>
            <Text className='App-content'>{formData.project_name3}, {formData.project_date3}   {formData.project_link3}</Text><br/>
            <Text className='App-content'>Summary: {formData.project_summary3}</Text><br/>
            <Text className='App-content'>Applied skills: {formData.project_applied_skills3}</Text><br/>
            <br/>
            <Text className='App-content'><b>LEADERSHIP</b></Text><br/>
            <Text className='App-content'>{formData.role}, {formData.organization_name}, {formData.role_date}</Text><br/>
            <Text className='App-content'>Summary: {formData.leadership_summary}</Text><br/>
            
            </Page></Document>
             
          </body>
    </div>
  );
}

export default App;
