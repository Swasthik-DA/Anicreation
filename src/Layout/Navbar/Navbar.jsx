import Button from '../../Component/Button/Button'
import './Navbar.css'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <div className="navbar navbar-expand fixed-top">
     <Link to="/" className="navbar-brand ">
        <img src="/assets/i7.png" alt="" />
     </Link>
     <div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Recomndation</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Contact</Link>
            </li>
        </ul>
     </div>
     <div className="secondDiv">
        <select name="" id="">
            <option value="IN">IN</option>
            <option value="HN">HN</option>
        </select>
        < Button BtnText={"Sign In"}/>

     </div>
    </div>
    </>
  )
}

export default Navbar