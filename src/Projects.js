import React , {useEffect} from 'react';
import M from 'materialize-css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems,{});
}, [])
useEffect(()=>{
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  },[])
  useEffect(() => {
    Aos.init({duration:2000}); //gives global animation 
}, [])
  return(
    <>
		<section className="project">
        <div className="row project_content" id="projects">
			<div className="col s3 offset-s1 intro" data-aos="fade-up">
			<h6 className="subhead" data-aos="fade-up">My Projects</h6>
				<h4 className="display-1">I focus on crafting web experiences and designs that works.</h4>
			</div>
			<div class="col s4 offset-s2" data-aos="flip-right">
			<ul class="collapsible #1d1b37">
    		<li>
				<div class="collapsible-header collapStyle"><span className="card-title">Insta-clone
					<h6>May 2020 - June 2020</h6></span><br />
				</div>
				<div class="collapsible-body">
					<p>A webapp in which user can create account , create Post , like/unlike  other user’s post , 
					follow/unfollow other user’s, search other user’s profile and view other user’s profile.</p><br />
					<p><span style={{fontWeight:"bold"}}>Key Skills</span> : React.Js, Node.Js, Express.Js, MongoDB</p>
					<a href="https://instaclone23.herokuapp.com/signin" style={{color:"#1b5e20"}} target="_blank">
						Click to visit Website
					</a>
				</div>
    		</li>
    		<li>
				<div class="collapsible-header collapStyle"><span className="card-title">Daily Expense Tracker
					<h6>March 2020 - April 2020</h6></span><br />
				</div>
				<div class="collapsible-body">
					<p>Developed a webapp where user can make record of his/her daily expenditures and view it later.</p><br />
					<p><span style={{fontWeight:"bold"}}>Key Skills</span> : HTML, CSS, Laravel , Mysql</p>
					<a href="https://github.com/Anku786/LaravelProject" style={{color:"#1b5e20"}} target="_blank">
						Github Link
					</a>
				</div>
    		</li>
			<li>
				<div class="collapsible-header collapStyle"><span className="card-title">Blogging Website
					<h6>March 2019 - November 2019</h6></span><br />
				</div>
				<div class="collapsible-body">
					<p>Developed a front-end UI where user can write, view, edit ,like/unlike blogs of other user’s.</p><br />
					<p><span style={{fontWeight:"bold"}}>Key Skills</span> : HTML, CSS, BootStrap , Javascript</p>
					<a href="https://github.com/Anku786/WriteBlog" style={{color:"#1b5e20"}} target="_blank">
						Github Link
					</a>
				</div>
    		</li>
  		</ul>
		</div>
				    
		</div>
		</section>
</>

  );
}

export default Projects;