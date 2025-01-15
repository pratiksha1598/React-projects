
import React, { useState } from 'react';
import css from './App.module.css';
import Buttoncontainer from './components/ButtonContainer';
import Display from './components/Display';

function App() {
 
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    }else if(buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    }else {
      const newCalVal = calVal + buttonText;
      setCalVal(newCalVal);
    }

  }

  return (
  
      <div className={css['calculator']}>
        <Display displayValue={calVal}></Display>
        <Buttoncontainer onButtonClick={onButtonClick}/>
       </div>
  );
}

export default App
