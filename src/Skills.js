import React from "react";
import "./Skills.css";

function Skills() {


  
  return (
    <div className="bg_two">
      <div className="mainheading ">
        <b>Skills</b>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div
              className="transparentbg in-left"
              style={{ animationDuration: "1s" }}
            >
              Fronend (HTML, CSS, JavaScript, React)
            </div>
            <br />

            <div
              className="transparentbg in-left"
              style={{ animationDuration: "2s" }}
            >
              Backend (Node Js, Express, MangoDB)
            </div>
            <br />

            <div
              className="transparentbg in-left"
              style={{ animationDuration: "3s" }}
            >
              Libraries (Bootstrap, formik, axios)
            </div>
            <br />
          </div>
          <div className="col-12 col-md-6">
            <div
              className="transparentbg in-right"
              style={{ animationDuration: "2.5s" }}
            >
              Software Testing-Manual and Selenium Automation Tool
            </div>
            <br />
            <div className="transparentbg in-right">
              Computer Hardware - Proficient
            </div>
            <br />
            <div className="transparentbg in-right">
              Tae Kwon Do player - Senior level
            </div>
            <br />
          </div>

          
        </div>
        
      </div>
      <div className="container-fluid ">
      <div className="row">
        
        <div className="col-12 col-md-6 d-flex justify-content-around">
        
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                className="SkillIcons in-left" 
                style={{ animationDuration: "2s" }}
               
              />
           

          
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                className="SkillIcons in-left"
                style={{ animationDuration: "3s" }}
              />
            

            
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                className="SkillIcons in-left"
                style={{ animationDuration: "4s" }}
              />
                        
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-around">        
           
              <img
                src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png"
                className="SkillIcons in-left"
                style={{ animationDuration: "5s" }}
              />
           
            
            
              <img
                src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"
                className="SkillIcons in-left"
                style={{ animationDuration: "6s" }}
              />
           
            
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"
                className="SkillIcons in-left"
                style={{backgroundColor:"white", borderRadius:"10px", animationDuration: "7s" }}
              />
            
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-around">
        
              <img
                src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                className="SkillIcons in-right"
                style={{ animationDuration: "7s" }}
              />
          
            
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/602px-Bootstrap_logo.svg.png"
                className="SkillIcons in-right"
                style={{ animationDuration: "6s" }}
              />
           
            
              <img
                src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png"
                className="SkillIcons in-right"
                style={{ animationDuration: "5s" }}
              />
           
            
          </div>
        <div className=" col-12 col-md-6 d-flex justify-content-around">
                   
           
              <img
                src="https://adilaboulkacim.com/img/icons/vscode.svg"
                className="SkillIcons in-right"
                style={{ animationDuration: "4s" }}
              />
           
            
              <img
                src="https://pngimg.com/uploads/github/github_PNG83.png"
                className="SkillIcons in-right"
                style={{backgroundColor:"white", borderRadius:"50px", animationDuration: "3s" }}
              />
              <div data-aos="zoom-in">

              <img
                src="https://www.pngkey.com/png/full/269-2693201_mysql-logo-circle-png.png"
                className="SkillIcons in-right"
                style={{ animationDuration: "2s" }}
              />
              </div>

            
        </div>
        </div> 
        <br/> 
      </div>
      
    </div>
  );
}

export default Skills;
