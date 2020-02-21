import React, { useState, createContext, useEffect } from "react";
import Axios from 'axios'
import { SmurfContext } from '../contexts/SmurfContext';

import "./App.css";


const App = () => {
  const [ smurf, setSmurf ] = useState({})
  const [ smurfList, setSmurfList ] = useState([]);


  useEffect(()=> {
    Axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log("this is the response", res);
      setSmurfList(res.data)

    })
    .catch(err => {
      console.error("there was an error: ", err);
    })

  }, [smurfList]);

  const addSmurf = smurf => {
    //add new smurf to smurf list
    setSmurfList([...smurfList, smurf]);
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );

}

export default App;
