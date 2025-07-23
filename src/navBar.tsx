import "./styles/navBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div> 
        <nav className="navbar">
            <NavLink className="nav-link" to="/" >Home</NavLink>
            <NavLink className="nav-link" to="/history" >History</NavLink>
        </nav>
    </div>
  );
}