import './App.css';
import Header from './Header';
import Profile from './Profile';
import Workexperience from './Workexperience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <Header/>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <div id="About">
  
  <Profile/>
  <Education/>
  </div>
  
  <div id="Skills">
  <Skills/>
  
  
  </div>
  
  <div id="Projects">
  <Projects/>
    </div>
  
  <div id="Workexperience">
  <Workexperience/>
  </div>
  
  <div id="Achievements">
    <Achievements/>
  </div>
  
</div>
      
      
      
      
      
    </div>
  );
}

export default App;
