import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
   //anything can be default value in paranthisis 
  
   // here counter is varible and setCounter  is function name could be anything

   // let counter = 15

  const addValue = () => {



    // console.log("value added", Math.random());
     // counter = counter + 1
     // setCounter( counter)
    //  or direct 

    if (counter<20) {
      setCounter( counter + 1)
    } 
    console.log(counter);
  }

  const removeValue = ()=> {
    if (counter>0) {
      setCounter( counter - 1)
    } 
  }

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}
      >ADD Value</button> <br />
      <button onClick={removeValue} >REmove value</button>
    </>
  )
}

export default App
