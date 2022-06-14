import React from "react";
import "./Profile.css";
import MyPDF from "./Rajesh_kumar_Resume.pdf";
import ProfilePic from './Photos/CoverImage.jpg';
function Profile() {
  return (
    <>
     
      <div className="background">
        <div className="container">
          <div className="row d-flex flex-row  justify-content-md-center" id="contactUs">
            <div className="col-12 col-md-6 in-left" id="contactForm" style={{animationDuration:"2s"}}>
              <img
                className="img-fluid"
                src={ProfilePic}
                style={{height:"100%", width:"100%"}}
              />
            </div>
            <div
              className="col-12 col-md-6 in-right"
              id="contactDetails"
              style={{ paddingTop: "30px" }}
            >
              <div className="contactinform">
                <h4>Rajesh Kumar . M</h4>

                <p>Computer Science Engineer</p>
                <p>
                  <b>Phone:</b>
                  <br />
                  9551052326
                </p>
                <p>
                  <b>Email:</b>
                  <br />
                  rajeshkumarmurugan1@gmail.com
                </p>
                <p>
                  <b>Address:</b>
                  <br />
                  No:111/75 Palla Street,
                  
                  Korattur North,
                  <br />
                  Tamilnadu,
                  
                  Chennai-600 076
                </p>
                <p>
                  <b>Date of Birth:</b>
                  <br />
                  July 30th, 1996
                </p>
                <b>Resume:</b>
                <br />
                <a href={MyPDF} download="Rajesh_kumar_Resume.pdf">
                  
                  Download Here
                </a>
                
                
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
