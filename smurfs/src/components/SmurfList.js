import React, { useContext } from "react";
import { SmurfContext } from '../contexts/SmurfContext'

const SmurfList = props => {
  const { smurfList } = useContext(SmurfContext)
  console.log("from smurf context", smurfList )


  return (
    <div>
      {smurfList.map(smurf => (
        <div>
          <h1>Name: {smurf.name}</h1>
          <p>Age: {smurf.age} </p>
          <p> Height: {smurf.height}</p>
        </div>
      ))}
    </div>
  );
};
export default SmurfList;
