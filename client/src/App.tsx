import reactLogo from './assets/react.svg'
import './App.css'
import { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from 'qrcode.react';

function App() {

  const [location, setLocation] = useState<string>('')
  const [redirect, setRedirect] = useState<boolean>(false)
  const [qrcodeState, setqrcodeState] = useState<boolean>(true)
  const [isHovered, setIsHovered] = useState(false);
  const rotationRef = useRef(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    rotationRef.current = 360; // Set the rotation angle to 360 degrees on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setLocation(window.location.pathname.slice(1))

    if (location) {
      setRedirect(true)
    }
  }, [location])

  if (redirect) {
    window.location.href = 'https://www.google.com'
  }


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            style={{
              transform: `rotate(${isHovered ? rotationRef.current : 0}deg)`,
              filter: "drop-shadow(0 0 2em #646cffaa)",
              transition: "transform 0.5s ease", // Apply a smooth transition for rotation
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </a>
      </div>
      <h1>Enter URL</h1>
      <div className="card">
      </div>
      <form action="submit">
        <input type="text" className='form' />
      </form>
      <div className='qr' style={{ display: qrcodeState ? 'block' : 'none' }}>
        <QRCodeCanvas className='qrcode' value="https://www.google.com"/>
      </div>
      {/* <p>
      {window.location.pathname}</p> */}
    </>
  )
}

export default App
