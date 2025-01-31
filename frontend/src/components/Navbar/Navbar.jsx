import "./navbar.css";
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const {getTotalCartItems}=useContext(ShopContext);
    return (
        <div className="navbar" >
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("Shop")}} > <Link style={{textDecoration: 'none'}}  to="/" >Shop</Link> {menu==="Shop"? <hr/>:<></>} </li>
                <li onClick={() => {setMenu("Men")}} > <Link style={{textDecoration: 'none'}} to="/men" >Men</Link> {menu==="Men"? <hr/>:<></>} </li>
                <li onClick={() => {setMenu("Women")}} > <Link style={{textDecoration: 'none'}} to="/women" >Women</Link> {menu==="Women"? <hr/>:<></>} </li>
                <li onClick={() => {setMenu("Kids")}} > <Link style={{textDecoration: 'none'}} to="/kids" >Kids</Link> {menu==="Kids"? <hr/>:<></>} </li>
            </ul>

            <div className="nav-login-cart" >
                {localStorage.getItem('auth-token') ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/') } }> Logout</button>
                              :  <Link to="/login" ><button>Login</button></Link>}
                                <Link to="/cart" ><img src={cart_icon} alt="" /></Link>
                
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            
        </div>
    )
}

export default Navbar;

// or kuch????????? nahi bta duga tre kitna hogya? kl ek new concept kra tha usme hi error ate gae abi nhi error m h code mje bhi krdio f rvo concept hn hn abh to n aega ko conecpt new?ae geeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee iska baad bhi? jitnna mne kra habhi to ek hi aya h acha aa m 1.5 tak krluga jitna h 2.25 pe h new concept mtb tri 2.25 tak hogi? hn gud m bhi 1.25 tak krta hu aj lapotp ana thaaaj? kya pta  kb ki dekha rha h aaj ka but ae nhi mere according acha hnn chl shi h m pdhlu hn hn