import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Navbar=()=>{
    const{setCategory,setcountry} = useContext(Context);
    const ChangeCountry= (value) =>{
        setcountry(value);
        console.log("counrty changed to = ",value);
    }
    const ChangeCateg = (value) =>{
        setCategory(value);
        console.log("category changed to = ",value);
    }
    return(
        <nav className="navbar-main">
            <h1 className="navbar-logo">R N</h1>
            <ul className="navbar-layout">
                <li className="remove">Latest</li>
                <li>
                    <div className="dropdown">
                        <button type="button" className="dropbtn">Country</button>
                        <ul className="dropdown-content">
                            <li onClick={()=>ChangeCountry("in")}>India</li>
                            <li onClick={()=>ChangeCountry("us")}>USA</li>
                            <li onClick={()=>ChangeCountry("cn")}>China</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="dropdown">
                        <button type="button" className="dropbtn">Categories</button>
                        <ul className="dropdown-content">
                            <li onClick={()=>ChangeCateg("business")}>Business</li>
                            <li onClick={()=>ChangeCateg("entertainment")}>Entertainment</li>
                            <li onClick={()=>ChangeCateg("general")}>General</li>
                            <li onClick={()=>ChangeCateg("health")}>Health</li>
                            <li onClick={()=>ChangeCateg("science")}>Science</li>
                            <li onClick={()=>ChangeCateg("sports")}>Sports</li>
                            <li onClick={()=>ChangeCateg("technology")}>Technology</li>
                        </ul>
                    </div>
                </li>
            </ul>

        </nav>
    )
}
export default Navbar;