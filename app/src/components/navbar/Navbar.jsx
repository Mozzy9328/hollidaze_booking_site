import "./navbar.css"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate();
  
  const login = () =>{ 
    history.push("/login");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <a href="/#" className="logo"> Holidaze </a>
        <div className="navItems">
        {/* <a href="http://localhost:3000/register"> <button className="navButton">Register</button> </a> */}
         <a href="https://hollidaze-admin-panel.netlify.app/"><button className="navButton">Login</button> </a> 
        </div>
      </div>
    </div>
  )
}

export default Navbar