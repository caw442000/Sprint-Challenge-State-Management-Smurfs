import React, { useContext } from "react";
import { SmurfContext } from '../contexts/SmurfContext';
import styled from 'styled-components';


const SmurfListDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;

`;
  const SmurfDiv = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    align-items: center;
    max-width: 100%;
    flex-direction: column;
    width:300px; 
    height: 350px;
    border: 1px solid;
    padding: 10px;
  
  
  `

const SmurfList = props => {
  const { smurfList } = useContext(SmurfContext)
  console.log("from smurf context", smurfList )


  return (
    <SmurfListDiv>
      {smurfList.map(smurf => (
        <SmurfDiv key= {smurf.id}>
          <h1>Name: {smurf.name}</h1>
          <p>Age: {smurf.age} </p>
          <p> Height: {smurf.height}</p>
        </SmurfDiv>
      ))}
    </SmurfListDiv>
  );
};
export default SmurfList;
