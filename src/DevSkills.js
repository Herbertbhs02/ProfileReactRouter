import React from "react";
import "./DevSkills/DevSkill.css";

import "bootstrap/dist/css/bootstrap.css";


const DevSkills = () => (
  <div className="DevSkills" >
    <h2>Front End and Back End Experience</h2>
    <div >
    
       <ul >
          <li style={{textIndent:'20px'}}>
           <span style={{fontWeight:"bold"}}>Front End Development skills:</span> HTML, CSS(Flex-box, css grid,saas and bootstrap), JavaScript, REST API, JSON, Reactjs--Redux and Github. This profile website 
           was developed and being updated and maintained by me.
          </li><br/>

          <li style={{textIndent:'20px'}}>
          <span style={{fontWeight:"bold"}}>Back End skills: </span>Nodejs, Express, bcrypt, jwtToken, mongoose and MongoDB.
          </li><br/>

          <li style={{textIndent:'20px'}}>
          <span style={{fontWeight:"bold"}}>DataBase: </span>I have used the following databases in my projects: MongoDB, Firebase and Mysql.
          </li><br/>

          <li style={{textIndent:'20px'}}>
          <span style={{fontWeight:"bold"}}>Certification: </span>JavaScript certificate in algorithm and data structures from freecodecamp.
           </li><br/>

          
           <li style={{textIndent:'20px'}}>
           <span style={{fontWeight:"bold"}}>Boilerplate: </span>I have written several small programs which I normally use in my projects, to decipher tricky concepts to grasp, e.g CSS Grid, Forms in Reactjs and Redux for state management.
            </li><br/>

            <li style={{textIndent:'20px'}}>
            <span style={{fontWeight:"bold"}}>Docker: </span>A Good understanding of Docker concept and the advantages of Docker over Virtual Machine.
             </li><br/>

             <li style={{textIndent:'20px'}}>
             <span style={{fontWeight:"bold"}}>Self Development Road Map: </span>Consolidation of Reactjs and Nodjs and learn more about AWS, Docker,Testing and Application of AI in web development
                </li>

       </ul>
     
    </div>
  </div>
);

export default DevSkills;
