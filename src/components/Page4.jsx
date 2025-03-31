import React, { useState } from 'react';
import { db } from '../firebase-config'
import { collection, addDoc } from "firebase/firestore"; 
import './page4.css'


export default function Page4() {

  let [email,setEmail] = useState();
  let [password, setPassword] = useState();

  async function saveData(){
    try {
      const docRef = await addDoc(collection(db, "students"), {
        userEmail: email,
        userPassword: password,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


return (
    <div>
        <div className="inputs">
            <h5>enter email and passowrd</h5>
            <input type='email'name='Email' placeholder='enter email' onChange={(event)=>setEmail(event.target.value)}/>
            <input type='password' name='password' placeholder='enter password' onChange={(event)=>setPassword(event.target.value)}/>

        </div>
        <div className="saveBtn">
            <button id='page4Btn' onClick={saveData}>save data</button>
        </div>
    </div>
  )
}


