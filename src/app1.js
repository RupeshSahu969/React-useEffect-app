import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

let A= () => <div>Componnet A </div>
let B= () => <div>Componnet B </div>

function App() {

const [showComplited,setSHowCompleted] =useState(false);

console.log(1)
var a=5

useEffect(() =>{

console.log("Inside 1")

});
useEffect(() =>{

  console.log("Inside 2")
  
  });
  useEffect(() =>{

    console.log("Inside 3")
    
    });
    useEffect(() =>{

      console.log("Inside 4")
      
      });
    console.log(3)


  return (
    <div className="App"
    //  onClick={() => setCount(count +1)}
     
     onClick={() => setSHowCompleted(!showComplited)}
     >
      

{/* Hello :{count} */}
Hello
{showComplited ? <A/> : <B />}
    </div>
  );
}

export default App;
