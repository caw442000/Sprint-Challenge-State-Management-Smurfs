import React, { useContext } from "react";
import { SmurfFormContext } from '../contexts/SmurfFormContext'

const SmurfForm = props => {
  const {handleChanges, submitForm, smurf} = useContext(SmurfFormContext)




  return (
    <form onSubmit= {submitForm}>

      <label htmlFor="name">Member Name</label>
      <input 
        id="name" 
        name="name" 
        type="text"
        onChange={handleChanges}
        placeholder="Enter Smurf Name"
        value ={smurf.name}
      />

      <label htmlFor="age">Smurf Age</label>
      <input 
        id="age" 
        name="age" 
        type="text"
        onChange={handleChanges}
        placeholder="Enter Smurf Age"
        value ={smurf.age}
      />


      <label htmlFor="height">Smurf Height</label>
      <input 
        id="height" 
        name="height" 
        type="text"
        onChange={handleChanges}
        placeholder="Enter Height"
        value ={smurf.height}
      />

      <button type="submit">Add Smurf</button>

    </form>
  );
};

export default SmurfForm;