import React from 'react'

function Header() {
  return (
    <div className='sticky-top ' >
        
<nav id="navbar-example2" class="navbar-nav-scroll  navbar-light bg-light p-2">
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link text-primary" href="#About">ABOUT</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-primary" href="#Skills ">SKILLS</a>
    </li>
    <li class="nav-item"><a class="nav-link text-primary" href="#Projects">PROJECTS</a></li>
    <li class="nav-item"><a class="nav-link text-primary" href="#Workexperience"> EXPERIENCE</a></li>
    <li class="nav-item"><a class="nav-link text-primary" href="#AdditionalCourse">COURSE</a></li>
    {/* <li class="nav-item"><a class="nav-link text-white" href="#Achievements">Social Activities</a></li> */}
    <li class="nav-item"><a class="nav-link text-primary" href="#Footer">CONTACT</a></li>
    </ul>
</nav>

    </div>
  )
}

export default Header