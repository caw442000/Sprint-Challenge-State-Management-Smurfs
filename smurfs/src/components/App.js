import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';
import { SmurfFormContext } from '../contexts/SmurfFormContext';
import cuid from 'cuid';

//components
import SmurfList  from './SmurfList'
import SmurfForm from "./SmurfForm";

import "./App.css";




const App = () => {
  const [ smurf, setSmurf ] = useState({
    name: "", 
    age: "", 
    height: "",
  });

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

  }, [smurf]);

  const handleChanges = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
      e.preventDefault();
      addSmurf(smurf);
      setSmurf({name: "", age: "", height: ""})

  };

  const addSmurf = smurf => {
    //add new smurf to smurf list
    const newSmurf = {
      id: cuid(),
      name: smurf.name, 
      age: smurf.age, 
      height: smurf.height,

    }
      Axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        console.log("this is the response", res);
        setSmurfList(res.data)
  
      })
      .catch(err => {
        console.error("there was an error: ", err);
      })

    setSmurfList([...smurfList, newSmurf]);
    console.log("this is smurfList", smurfList)
  }

  return (
    <div className="App">
      <SmurfContext.Provider value= {{ smurfList }}>
      <SmurfFormContext.Provider value= {{ handleChanges, smurf, submitForm}}>
        <SmurfList />
        <SmurfForm />
      </SmurfFormContext.Provider>
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
