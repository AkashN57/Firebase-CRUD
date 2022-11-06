import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config';
import {collection, getDocs,addDoc,updateDoc,doc,deleteDoc} from "firebase/firestore"
import { async } from '@firebase/util';

function App() {
  const [newName,setNewName] = useState('')
  const [newAge,setNewAge] = useState(0)
  const [newJob,setNewJob] = useState ('');

  const [users,setUsers] = useState([])
  const usersCollectionRef = collection(db,"users")

  const createUsers = async()=>{
   
    
    await addDoc(usersCollectionRef,{Name:newName,Age:Number(newAge),Job:newJob})
  } 

  useEffect(()=>{

   const getUsers = async function(){

      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }

    getUsers();
  },[])

  const deleteUser = async function(id){
   const userDoc = doc(db,"users",id)
   await deleteDoc(userDoc)
  }

  const increAge = async function(id,Age){ 

      const userDoc = doc(db,"users",id)
      const increment = {Age:Age+1}
      await updateDoc(userDoc,increment)
  }
  const degreAge = async function(id,Age){

      const userDoc = doc(db,"users",id)
      const decrement = {Age:Age-1}
      await updateDoc(userDoc,decrement)
}
  return (
    <div className="App">
     <div class="container">
        <div class="header">
            <h2>Create Account</h2>

     </div>
     
     <div class="form" id="form" >
        <div class="form-control">
            <label for="">
               Name
            </label>
            <input type="text"  placeholder="Name" autocomplete="off" 
            onChange={(e)=>{setNewName(e.target.value)}}/>
            
        </div>
        <div class="form-control ">
            <label for="">
               Age
            </label>
            <input type="number"  placeholder="Age" autocomplete="off" 
            onChange={(e)=>{setNewAge(e.target.value)}}/>
           
            
        </div>
        <div class="form-control ">
            <label for="">
               Occupation
            </label>
            <input type="text"  placeholder=" Occupation" autocomplete="off" 
            onChange={(e)=>{setNewJob(e.target.value)}}/>
           
            
        </div>
        <button onClick={createUsers} >Submit</button>
     </div>
    </div>
        <h1 className='h1'>Results</h1>
       {users.map((user)=>{
          return(
            
          <div className='results'>
          
          <h2 className='result'>Name : {user.Name}</h2>
          <h2 className='result'>Age : {user.Age}</h2> 
          
          <h2 className='result'>Occupation : {user.Job}</h2>

          <button onClick={()=>{increAge(user.id,user.Age)}} className="btn">Increase Age</button>
          <button onClick={()=>{degreAge(user.id,user.Age)}} className="btn">Decrease Age</button>
          <button className="btn" onClick={()=>{deleteUser(user.id)}}>Delete</button>
          </div>
          
          )
        })}
    </div>
  );
}

export default App;
