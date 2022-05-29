import React from 'react'

function Education() {
  return (
    <div  >
        <div className='container-fluid mainheading'>
        <b>Educational Profile</b>
        </div> 
        
            {/* School details */}
            <div className='row highlights'>
                <div className='col in-left'>
                
                    <h4 style={{textAlign:"right"}}>2012<br/>SSLC
                        </h4>
                    
                </div>
  <div class="vr"></div>
                <div className='col in-right'>
                <p> Course : SSLC<br/>
                    Institution : K B J G MAT HSS<br/>
                    University/board : STATE BOARD<br/>
                    Year of passing : 2012<br/>
                </p>
                </div>
                </div>
                {/* High School details */}
                <div className='row highlights'>
                <div className='col in-left'>
                
                <h4 style={{textAlign:"right"}}>2012-2014<br/>HSC
                    </h4>
                
            </div>
            <div class="vr"></div>
            <div className='col in-right'>
           <p> Course : HSC<br/>

    Institution : K B J G MAT HSS<br/>

    University/board : STATE BOARD<br/>

    Year of passing : 2014<br/></p>
            </div>
                </div>
            {/* College details */}
                <div className='row highlights'>
    <div className='col in-left'>
                    
                    <h4 style={{textAlign:"right"}}>2014-2018<br/>B.E.CSE
                        </h4>
                    
                </div>
  <div class="vr"></div>
                <div className='col in-right'>
            <p>
            Course : B.E.CSE<br/>

    Institution : St.Peter’s University<br/>

    University/board : University<br/>

    Year of passing : 2018<br/>
            </p>
                </div>
                </div>
        <div>

        </div>

        </div>
  )
}

export default Education