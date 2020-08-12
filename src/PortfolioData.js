import React , {useEffect} from 'react';
import M from 'materialize-css';
import Carousel from './Images/Carousel.jpg';
import Skills from './skills.js';
import Projects from './Projects.js';
import Certificates from './Certificates.js';
import Education from './Education.js';
import Pdf from './Images/AnkitaCV.pdf';
import profilePic from './Images/image.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Port = () => {
  useEffect(() => {
    Aos.init({duration:2000}); //gives global animation 
}, [])
  return(
    <>
    <section className="navStyle">
    <div className="row portfolioStyle">
      <nav>
    <div class="nav-wrapper black">
      <ul id="nav-mobile" class="left">
      <li style={{display:'inline',marginLeft:'50px',color:'white'}}>
      <a href="#home">Home</a></li>
          <li style={{display:'inline',marginLeft:'50px',color:'white'}}>
          <a href="#certificate">Certifications</a></li>
          <li style={{display:'inline',marginLeft:'50px',color:'white'}}>
          <a href="#projects">Projects</a></li>
          <li style={{marginLeft:'600px'}}><a href={Pdf} class="btn btn--small" target="_blank">Download CV</a></li>
      </ul>
    </div>
  </nav>
        <div className="col s6 offset-s2 contentStyle" data-aos="fade-up" id='home'>
          <h1> <span style={{color:'#f9861a'}}>-</span> Hello,I'm Ankita Bishnoi <br />
          A young web developer aspirant, who is passionate to learn new things and is ready to face new challenges in the journey in life</h1>
          <ul class="hero-social">
                    <li>
                        <a href="#0" title="">LinkedIn</a>
                    </li>
                    <li>
                        <a href="#0" title="">GitHub</a>
                    </li>
                </ul>
        </div>
      </div>
      </section>
      <section className="about">
      <div className="profile">
      <div className="row">
      <div className="col s5 offset-s1" data-aos="fade-up">
      <h5 className="subhead"> ABOUT ME</h5>
      <h4 className="display-1">A web developer with passion for building scalable web applications 
        having decent knowledge of JavaScript and React.Js and working experience 
        with Node.Js, Express.Js and Mongodb</h4>
        <Skills />
      </div>
        <div className="profile-pic" data-aos="fade-up">
      <img src={profilePic} width="100%" height="100%" />
      </div>
    </div>
    </div>
    </section>
    <div className="row">
      <div className="col s12">
        <Projects />
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <Certificates />
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <Education />
      </div>
    </div>
</>

  );
}

export default Port;