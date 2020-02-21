import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Route, useHistory} from 'react-router-dom';

import { SmurfContext } from '../contexts/SmurfContext';
import { SmurfFormContext } from '../contexts/SmurfFormContext';
import cuid from 'cuid';

//components
import SmurfList  from './SmurfList'
import SmurfForm from './SmurfForm';
import Header from './Header'

import "./App.css";




const App = (props) => {
 
  // tried to useHistory to do a push to homepage after adding
  // const history = useHistory();
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

  const deleteSmurf = smurf => {

    Axios
        .delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(res => {
          alert("Deleted Smurf")
        })
        .catch(err => alert("Error couldn't delete: ", err))
        .finally(() => window.location.reload())
}

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
        // setSmurfList(res.data);
        props.history.push("/")
        

  
      })
      .catch(err => {
        console.error("there was an error: ", err);
      })

    // setSmurfList([...smurfList, newSmurf]);
    console.log("this is smurfList", smurfList)
    
  }

  return (
    <div className="App">
      <SmurfContext.Provider value= {{ smurfList, deleteSmurf }}>
      <SmurfFormContext.Provider value= {{ handleChanges, smurf, submitForm}}>
        <Router>
          <Header />
          <Route exact path="/">
            <SmurfList />
          </Route>
          <Route path="/addsmurf">
            <SmurfForm />
          </Route>
        </Router>
      </SmurfFormContext.Provider>
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
