import reactLogo from './assets/react.svg'
import './App.css'
import { useState, useEffect } from "react";

function App() {

  const [location, setLocation] = useState<string>('')
  const [redirect, setRedirect] = useState<boolean>(false)
  
  useEffect(() => {
    setLocation(window.location.pathname.slice(1))

    if(location){
      setRedirect(true)
    }
  },[location])

  if(redirect){
    window.location.href = 'https://www.google.com'
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Enter URL</h1>
      <div className="card">
      </div>
      <form action="submit">
        <input type="text" className='form'/>
      </form>
      {/* <p>
      {window.location.pathname}</p> */}
    </>
  )
}

export default App
