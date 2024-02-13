import { Button, ButtonGroup } from "@chakra-ui/react"

import { useState, useEffect } from 'react'

import '../styles/SignIn.css'

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const dots = new Array(6).fill(false)

const password = '232433';
function App() {

  const [pressedNumber, setPressedNumber] = useState<number[]>([]);
  
  const [dots, setDots] = useState(new Array(6).fill(false));

  const [dotIndex, setDotIndex] = useState(0);

  useEffect(()=>{
      if(pressedNumber.length === password.length && dots.every((dot)=> dot === true)) {
        if(pressedNumber.join('') === password) {
          setTimeout(()=>{
            alert('successfully logged in');
            setPressedNumber([]);
            setDots(new Array(6).fill(false))
            setDotIndex(0);
          }, 100)
        } else {
          setTimeout(()=>{
            alert('log in failed');
            setPressedNumber([]);
            setDots(new Array(6).fill(false))
            setDotIndex(0);
          }, 100)
        }
      }
  },[pressedNumber])

  function fillDots() {
    const newDots = [...dots];
    newDots[dotIndex] = true;
    setDots([...newDots])
    setDotIndex(dotIndex + 1);
  }

  return (
    <div className='passcode'>
      <h1>Touch ID or Enter Passcode</h1>
      <div className='password-input'>
        {dots.map((dot)=>(
          <div className={!dot ? 'no-fill-cell' : 'fill-cell'}></div>
        ))}
      </div>
      
      <div className='digits-grid'>
        {digits.map((digit, index)=>(
          <button key={index} className={digit === 0 ? "zero" : "digit"}
            onClick={()=>{
              fillDots();
              setPressedNumber((curr) => ([...curr, digit]))}}
          >{digit}</button>
        ))}
      </div>
    </div>
    
  )
}

export default App