import React , {useEffect} from 'react';
import M from 'materialize-css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems,{});
}, [])
useEffect(() => {
    Aos.init({duration:2000}); //gives global animation 
}, [])
  return(
    <>
        <div className="row center" id="skills" data-aos="zoom-in">
            <h2 className="headingFont">Skill</h2>
			<div className="col s3 zoom">
				<div className="card #e0e0e0 grey lighten-2 set">
				    <div className="card-content black-text">
				        <p>React.Js</p>
				    </div>
				</div>
			</div>
			<div className="col s3 zoom">
				<div className="card #e0e0e0 grey lighten-2 set">
				    <div className="card-content black-text">
				        <p>Node.Js</p>
				    </div>
				</div>
			</div>
			<div className="col s3  zoom">
				<div className="card #e0e0e0 grey lighten-2 set">
				    <div className="card-content black-text">
				        <p>Express.Js</p>
				    </div>
				</div>
			</div>
			<div className="col s3  zoom">
				<div className="card #e0e0e0 grey lighten-2 set">
				    <div className="card-content black-text">
				        <p>MongoDB</p>
				    </div>
				</div>
			</div>
		</div>
		<div className="row center" data-aos="zoom-in">
			<div className="col s3  zoom">
				<div className="card #e0e0e0 grey lighten-2 set">
				    <div className="card-content black-text">
				        <p>JavaScript</p>
				    </div>
				</div>
			</div>
			<div className="col s3  zoom">
				<div className="card #e0e0e0 grey lighten-2 set">
				    <div className="card-content black-text">
				        <p>BootStrap</p>
				    </div>
				</div>
			</div>
			<div className="col s3  zoom">
				<div className="card #e0e0e0 grey lighten-2 set">
				    <div className="card-content black-text">
				        <p>Laravel</p>
				    </div>
				</div>
			</div>
			<div className="col s3  zoom">
				<div className="card #e0e0e0 grey lighten-2 set">
				    <div className="card-content black-text">
				        <p>HTML/CSS</p>
				    </div>
				</div>
			</div>
		</div>
</>

  );
}

export default Skills;