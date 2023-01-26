import React from "react";
import axios from 'axios';
import { useState } from "react";


const Emp =()=>{
    const[name,setName]=useState('')
  const[salary,setSalary]=useState('')

  const addData = ()=>{
    axios.post("http://localhost:4000/",{name,salary})
  }

  return (
    <div className="App">
      <form id="form1">
        <label>Name</label>
        <input type="text" onChange={e=>setName(e.target.value)} placeholder="enter your name"></input><br/>
        
        <label>salary</label>
        <input type="text" onChange={e=>setSalary(e.target.value)} placeholder="enter salary"></input><br/>
        <button onClick={addData}>submit</button>
      </form>
    </div>
  );
}
export default Emp