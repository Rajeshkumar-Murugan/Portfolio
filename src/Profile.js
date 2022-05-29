import React from 'react'
import './Profile.css';
function Profile() {
  return (
      <>
      <div className='mainheading '>
        <b>About</b></div>
    <div className='background'>
        <div className='container' > 
        <div className='row' id="contactUs"> 
              <div className='col-12 col-md-6 in-left' id='contactForm'>        
              <img className='profile_img' src='https://static.wixstatic.com/media/46a30b_a8b5006753a44e24afa097be62d8824b~mv2.jpg/v1/fill/w_484,h_484,al_c,lg_1,q_80,enc_auto/46a30b_a8b5006753a44e24afa097be62d8824b~mv2.jpg'></img>          
              </div>
              
            <div className='col-12 col-md-6 in-right' id="contactDetails">
              <div className='contactinform'>

               <h4>Rajesh Kumar . M
               </h4>
               
               <p>Computer Science Engineer
            </p>            
            <p>
            <b>Phone:
            </b><br/>
            9551052326
            </p>
            <p>
            <b>
            Email:
            </b>
            <br/>
            rajeshkumarmurugan1@gmail.com
            </p>
            <p>
            <b>
            Address:
            </b>
            <br/>
            No:111/75 Palla Street,<br/>
            Korattur North,<br/>
            Tamilnadu,<br/>
            Chennai-600 049
            </p>
            <p>
            <b>
            Date of Birth:
            </b>
            <br/>
            July 30th, 1996
            </p>
                
                    
              </div>
            <div > 

           
            </div>
            </div>
        </div>
        </div>
 
 
 
 
    </div>
    </>
  )
}

export default Profile