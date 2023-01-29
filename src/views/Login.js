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

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newId = doc(collection(db,"Team-2023")).id;
    await setDoc(doc(db, "Team-2023",newId), formData);  

 const imageRef= ref(storage, `team-images/${photo.name}`)//making reference
uploadBytes(imageRef, photo).then(()=>{//uploading
  alert("Submitted")
})
  }

 
 
  return (
    <>
   <div class="login-box">
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
          <option>Select</option>
          <option>Developer</option>
          <option>President</option>
          <option>Mentor</option>
          <option>Other</option>
        </Input>
    </div>
    <div class="user-box">
    <Input type="file"  name="imgLink" id="photo" onChange={handleFileChange} />
    </div>
    <a href=''  onClick={handleSubmit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
</>
  );
}

export default Login
