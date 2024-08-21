import { useCallback, useState } from 'react'
import './App.css'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*()"
    }

    for(let i = 0; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

  },[length, numberAllowed, charAllowed, setPassword])

  //start with html now
  return (
    <>
      <div className=''>
        <div></div>

      </div>
    </>
  )
}
//incomplete

export default App
