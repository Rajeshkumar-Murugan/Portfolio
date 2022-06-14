import React from 'react'
import './Skills.css'

function Skills() {
  return (< div className='bg_two'>    
        <div className='mainheading '>
        <b>Skills</b></div>
        <br/>
        <div className='container '>
            <div className='row'>
            <div className='col-12 col-md-6'>
            <div className='transparentbg in-left' style={{animationDuration:"1s"}}>
            Fronend (HTML, CSS, JavaScript, React)
            </div>
            <br/>

            <div className='transparentbg in-left' style={{animationDuration:"2s"}}>
            Backend (Node Js, Express, MangoDB)
            </div>
            <br/>

            <div className='transparentbg in-left' style={{animationDuration:"3s"}}>
            Libraries (Bootstrap, formik, axios)
            </div>
            <br/>

            </div>
            <div className='col-12 col-md-6'>
            <div className='transparentbg in-right' style={{animationDuration:"2.5s"}}>
            
            Software Testing-Manual and Selenium Automation Tool
            </div>
            <br/>
            <div className='transparentbg in-right'>
            Computer Hardware - Proficient
            </div>
            <br/>
            <div className='transparentbg in-right'>
            Tae Kwon Do player - Senior level
            </div>
            <br/>
            </div>
            </div>
        </div>
        </div>

  )
}

export default Skills