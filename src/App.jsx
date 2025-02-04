import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './Layout/Navbar/Navbar'
import Home from './Pages/Home/Home'
function App() {
  
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={[<Navbar/>,<Home/>]}></Route>
    </Routes>
   </Router>
    </>
  )
}

export default App
