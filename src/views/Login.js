import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import '../assets/Design/Form.css'
import { setDoc, doc, collection, getDocs } from "firebase/firestore"; 
import { db, storage } from './Firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { async } from '@firebase/util';

const Login = () => {



  const [photo, setPhoto]= useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedIn: '',
    gitHub: '',
    role: '',
    imgLink: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  

  const handleFileChange = (e) => {
   setPhoto(e.target.files[0])
  }

const [loading, setLoading]= useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    const newId = doc(collection(db,"Team-2023")).id;
    setDoc(doc(db, "Team-2023",newId), formData).then(()=>{
      alert("Submitted!!!")
    });  

 const imageRef= ref(storage, `team-images/${photo.name}`)//making reference
uploadBytes(imageRef, photo).then(()=>{//uploading
 

})
  }

 
  return (
    <div className='form-main'>
    <div class="login-root">
    <div class="box-root flex-flex flex-direction--column" style={{minHeight: "100vh;flex-grow: 1"}}>
      <div class="loginbackground box-background--white padding-top--64">
        <div class="loginbackground-gridContainer">
          <div class="box-root flex-flex" style={{gridArea: "top / start / 8 / end"}}>
            <div class="box-root" style={{backgroundImage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1"}}>
            </div>
          </div>
          <div class="box-root flex-flex" style={{gridArea: "4 / 2 / auto / 5"}}>
            <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
          </div>
          <div class="box-root flex-flex" style={{gridArea: "6 / start / auto / 2"}}>
            <div class="box-root box-background--blue800" style={{flexGrow: 1}}></div>
          </div>
          <div class="box-root flex-flex" style={{gridArea: "7 / start / auto / 4"}}>
            <div class="box-root box-background--blue animationLeftRight" style={{flexGrow: 1}}></div>
          </div>
          <div class="box-root flex-flex" style={{gridArea: "8 / 4 / auto / 6"}}>
            <div class="box-root box-background--gray100 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
          </div>
          <div class="box-root flex-flex" style={{gridArea:" 2 / 15 / auto / end"}}>
            <div class="box-root box-background--cyan200 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
          </div>
          <div class="box-root flex-flex" style={{gridArea: "3 / 14 / auto / end"}}>
            <div class="box-root box-background--blue animationRightLeft" style={{flexGrow: 1}}></div>
          </div>
          <div class="box-root flex-flex" style={{gridArea: "4 / 17 / auto / 20"}}>
            <div class="box-root box-background--gray100 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
          </div>
          <div class="box-root flex-flex" style={{gridArea: "5 / 14 / auto / 17"}}>
            <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{flexGrow: 1}}></div>
          </div>
        </div>
      </div>
      <div class="box-root padding-top--24 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9, userSelect:"none"}}>
        <div class="box-root padding-top--10 padding-bottom--24 flex-flex flex-justifyContent--center">
          <img src={require("../assets/images/logo.png" )}  width={100}
            height={100} style={{userSelect:"none"}}/>
        </div>
        <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15"></span>
              <form id="stripe-login">
                <div class="field padding-bottom--24">
                  <label for="name">Name</label>
                  <input type="text" id='name' name="name" onChange={handleChange} required/>
                </div>


                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="email">Email</label>  
                  </div>
                  <input type="email" id='email' name="email" onChange={handleChange} required/>
                </div>


                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="linkedIn">Linked In</label>  
                  </div>
                  <input type="text" id='linkedIn' name="linkedIn" onChange={handleChange}/>
                </div>

                


                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="gitHub">GitHub</label>  
                  </div>
                  <input type="text" id='gitHub' name="gitHub" onChange={handleChange}/>
                </div>


                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="role">Your Position</label>  
                  </div>
                  <Input type="select" name="role" id="role" onChange={handleChange} required>
          <option>Select</option>
          <option>Mentor</option>
          <option>President</option>
          <option>CP Lead</option>
          <option>Manager</option>
          <option>Event Coordinator</option>
          <option>Web Developer</option>
          <option>Outreach Media Lead</option>
          <option>CP Team Member</option>
          <option>Social Media Team</option>
          <option>Volunteer</option>

        </Input>
                </div>



                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="photo">Upload Photo</label>  
                  </div>
                  <Input type="file"    name="imgLink" id="photo" onChange={handleFileChange} />
                </div>


                <div class="field padding-bottom--24">
               
                  <input type="submit" name="submit" value="Submit" onClick={handleSubmit}/>
                </div>

              </form>
            </div>
          </div>
          <div class="footer-link padding-top--24">
            
            <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   {/* <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="name" required="" placeholder='Enter Your Name' onChange={handleChange}/>
      
    </div>
    <div class="user-box">
      <input type="email" name="email"  placeholder='Enter Your Email' onChange={handleChange}/>
      
    </div>
    <div class="user-box">
      <input type="text" name="linkedIn"  placeholder='LinkedIn link' onChange={handleChange}/>
    
    </div>
    <div class="user-box">
      <input type="text" name="gitHub"  placeholder='gitHub link' onChange={handleChange}/>
      
    </div>
    <div class="user-box">
      
    <Input type="select" name="role" id="role" onChange={handleChange}>
          <option>Your Position</option>
          <option>Mentor</option>
          <option>President</option>
          <option>CP Lead</option>
          <option>Manager</option>
          <option>Event Coordinator</option>
          <option>Web Developer</option>
          <option>Outreach Media Lead</option>
          <option>CP Team Member</option>
          <option>Social Media Team</option>
          <option>Volunteer</option>

        </Input>
    </div>
    <div class="user-box">
      
    <Input type="file"    name="imgLink" id="photo" onChange={handleFileChange} />
    </div>
    <a href=''  onClick={handleSubmit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div> */}
</div>
  );
}

export default Login
