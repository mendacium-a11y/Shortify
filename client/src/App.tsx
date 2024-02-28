import './App.css'
import Navbar from './components/Navbar'
import Router from './Router/Router';
import routes from './Router/Routes';


function App() {

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Router routes={routes} />
    </>

  )


}

export default App
