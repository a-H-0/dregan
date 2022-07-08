import {  Link } from "react-router-dom";
import'./index.css';

 const Menu = () =>
 {
    return(
        <>
        <div className="ln">
            
                <center>
        <Link to="/">Login</Link> &nbsp;
        <Link to="/About">About</Link>
        </center>
        
        </div>
        </>
        
    )
 }
 export default Menu;