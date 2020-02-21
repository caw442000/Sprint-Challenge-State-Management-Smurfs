import React, { useContext } from "react";
import { SmurfFormContext } from '../contexts/SmurfFormContext'
import styled from 'styled-components';

const Sform = styled.form `
display:flex;
align-items: center;
justify-content: center;
margin: 0 auto;
align-items: center;
max-width: 100%;
flex-direction: column;
width:300px; 
height: 350px;

padding: 30px;


`
const Slabel = styled.label `
padding: 10px;
text-align: left;



`

const Sinput = styled.input `
padding: 10px;
margin: 10px;



`

const Sbutton = styled.button `
padding: 10px;
margin: 20px;


`


const SmurfForm = props => {
  const {handleChanges, submitForm, smurf} = useContext(SmurfFormContext)






  return (
    <Sform onSubmit= {submitForm}>

      <Slabel htmlFor="name">Smurf Name</Slabel>
      <Sinput 
        id="name" 
        name="name" 
        type="text"
        onChange={handleChanges}
        placeholder="Enter Smurf Name"
        value ={smurf.name}
      />

      <Slabel htmlFor="age">Smurf Age</Slabel>
      <Sinput 
        id="age" 
        name="age" 
        type="text"
        onChange={handleChanges}
        placeholder="Enter Smurf Age"
        value ={smurf.age}
      />


      <Slabel htmlFor="height">Smurf Height</Slabel>
      <Sinput 
        id="height" 
        name="height" 
        type="text"
        onChange={handleChanges}
        placeholder="Enter Height"
        value ={smurf.height}
      />

      <Sbutton type="submit">Add Smurf</Sbutton>

    </Sform>
  );
};

export default SmurfForm;