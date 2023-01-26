import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Emp from './emp';
import { useState,useEffect } from 'react';

function App() {
  const[employee,setEmployee]=useState([])
  useEffect(()=>{
   axios.get('http://localhost:4000/').then(res=>console.log(res.data))
  },[])
  return(
<div>
  <Emp/>
</div>
  )
}
export default App;
