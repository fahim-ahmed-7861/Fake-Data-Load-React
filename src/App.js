import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  console.log(data);

  const [users,setUsers]=useState([])



  useEffect(() => {

       setUsers(data);
  },[])


  return (
    <div >
     
     <h1 style={{padding:'20px'}}>Fake Data Load</h1>

     <ul>

  {
     users.map((user=><div>
       <li>{user.last_name}</li>
       <img src={user.image}></img>
       </div>))
  }
     </ul>
    </div>
  );
}

export default App;
