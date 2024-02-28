import './App.css'
import Navbar from './components/Navbar'
import Router from './Router/Router';
import routes from './Router/Routes';


const App = () => <Router routes={routes} />

export default App
