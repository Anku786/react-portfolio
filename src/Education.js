import React , {useEffect} from 'react';
import M from 'materialize-css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import lpu from './Images/lpu.png';
import eastwood from './Images/eastwood.png';
import joseph from './Images/joseph.jpg';

const Education = () => {
  
  return(
    <>
        <section className="EduStyle">
        <h5 className="subhead center">Education</h5>
        <div className="row">
            <div className="col s6 offset-s1">
                <h5>Lovely Professional University</h5>
                <p>B. Tech Computer Science & Engineering, 2017to 2021</p>
                 <p>   - Pursuing B. Tech in Computer Science & Engineering at
                Lovely Professional University, Jalandhar in Punjab</p>
            </div>
            <div className="col s4 offset-s1">
                <img src={lpu} width="100%"/>
            </div>
        </div>
        <div className="row">
        <div className="col s6 offset-s1">
                <h5>Eastwood International School</h5>
                <p>Grades 11 to 12, 2015 to 2017</p>
                 <p>- Completed Grades - 11 to 12 (CBSE) at Eastwood International School, 
                     Punjab</p>
            </div>
            <div className="col s4 offset-s1">
                <img src={eastwood} width="100%"/>
            </div>
        </div>
        <div className="row">
        <div className="col s6 offset-s1">
                <h5>St.Joseph's High School</h5>
                <p>Grades 1 to 10, till 2015</p>
                 <p>- Completed Grades - 1 to 10 (ICSE) at St.Joseph's High School, 
                     Haryana</p>
            </div>
            <div className="col s4 offset-s1">
                <img src={joseph} width="100%"/>
            </div>
        </div>
        </section>
    </>

  );
}

export default Education;