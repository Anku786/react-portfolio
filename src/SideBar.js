import React , {useEffect} from 'react';
import profilePic from './Images/image.jpg';
import M from 'materialize-css';

const SideBar = () => {
  useEffect(()=>{
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {});
  },[])

  return(
    <>
    <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col s3 offset-s2">
                <h5 class="white-text">GET IN TOUCH</h5>
                <ul>
                  <li>
                    <i className="material-icons tooltipped emailStyle" data-position="bottom" data-tooltip="8708922315">phone</i>
                  </li>
                  <li>
                <i className="material-icons tooltipped emailStyle" data-position="bottom" data-tooltip="bishnoiankita23@gmail.com">email</i>
                </li>
                </ul>
              </div>
              <div class="col s3 offset-s4">
                <ul>
                <h5 class="white-text">Social</h5>
                  <li><a className="link"  href="https://github.com/Anku786" target="_blank">
                    GitHub</a></li>
                  <li><a class="link" href="https://www.linkedin.com/in/ankita2929" target="_blank"
                  >LinkedIn</a></li>
                  <li><a class="link" href="https://www.instagram.com/anki0926/" target="_blank"
                  >Instagram</a></li>
                  <li><a class="link" href="https://twitter.com/Ankita28886981" target="_blank"
                  >Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  
</>
  );
}

export default SideBar;