import React , {useEffect} from 'react';
import M from 'materialize-css';
import background from './Images/background.jpg';
import cert1 from './Images/Server.pdf';
import cert2 from './Images/Mern.pdf';
import cert3 from './Images/Javascript.pdf';
import cert4 from './Images/Basic.pdf';
import cert5 from './Images/Upgrad.pdf';
import cert6 from './Images/Python.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Certificates = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems,{});
}, [])
useEffect(() => {
    Aos.init({duration:2000}); //gives global animation 
}, [])
  return(
    <>
        <div className="row" id="certificate" data-aos="zoom-in">
        <h2 className=" headingFont">My Certificates</h2>
			<div className="col s5  offset-s1">
				<div className="shape">
				    <div className="card-content black-text set">
				        <span className="card-title">Server-side Development with NodeJS, Express and MongoDB          
				        <h6 style={{float:"right"}}> 28/06/2020</h6></span>
				    </div>
				    <div className="card-action" style={{borderRadius:"30px"}}>
				        <a href={cert1} style={{color:"#1b5e20"}} target="_blank">View Certificate</a>
				    </div>
				</div><hr />
			</div>
			<div className="col s5 ">
				<div className="shape">
				    <div className="card-content black-text set">
				        <span className="card-title">Mern Stack Master Course       
				        <h6 style={{float:"right"}}> 28/06/2020</h6></span>
				    </div>
				    <div className="card-action" style={{borderRadius:"30px"}}>
				        <a href={cert2} style={{color:"#1b5e20"}} target="_blank">View Certificate</a>
				    </div>
				</div><hr />
			</div>
		</div><br />
        <div className="row" data-aos="zoom-in">
			<div className="col s5  offset-s1">
				<div className="shape">
				    <div className="card-content black-text set">
				        <span className="card-title">Javascript Modern ES6 – The complete course        
				        <h6 style={{float:"right"}}> 17/04/2020</h6></span>
				    </div>
				    <div className="card-action" style={{borderRadius:"30px"}}>
				        <a href={cert3} style={{color:"#1b5e20"}} target="_blank">View Certificate</a>
				    </div>
				</div><hr />
			</div>
			<div className="col s5 ">
				<div className="shape">
				    <div className="card-content black-text set">
				        <span className="card-title">Responsive Website Basics : Code with HTML,CSS and Javascript           
				        <h6 style={{float:"right"}}> 25/11/2019</h6></span>
				    </div>
				    <div className="card-action" style={{borderRadius:"30px"}}>
				        <a href={cert4} style={{color:"#1b5e20"}} target="_blank">View Certificate</a>
				    </div>
				</div><hr />
			</div>
		</div><br />
		<div className="row" data-aos="zoom-in">
			<div className="col s4  offset-s2">
				<div className="shape">
				    <div className="card-content black-text set">
				        <span className="card-title">Summer Training on full stack by UPGRAD          
				        <h6 style={{float:"right"}}> 20/07/2019</h6></span>
				    </div>
				    <div className="card-action" style={{borderRadius:"30px"}}>
				        <a href={cert5} style={{color:"#1b5e20"}} target="_blank">View Certificate</a>
				    </div>
				</div>
			</div>
			<div className="col s4  offset-s2">
				<div className="shape">
				    <div className="card-content black-text set">
				        <span className="card-title">Programming with Python          
				        <h6 style={{float:"right"}}> 21/07/2018</h6></span>
				    </div>
				    <div className="card-action" style={{borderRadius:"30px"}}>
				        <a href={cert6} style={{color:"#1b5e20"}} target="_blank">View Certificate</a>
				    </div>
				</div>
			</div>
		</div>
        
</>

  );
}

export default Certificates;