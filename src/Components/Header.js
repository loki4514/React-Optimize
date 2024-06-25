import LOGO_URL from "../utils/constant"
import { useState } from "react"
const Header = () => {

   
    

    const [btnNameReact,setbtnNameReact] = useState("Login")
    console.log("thie button", btnNameReact)


    return (
        <div className='header'>
            <div className='LogoContainer'>
                <img src = {LOGO_URL}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        if(btnNameReact === "Login") {
                            setbtnNameReact("Logout")
                        }else{
                            setbtnNameReact("Login")
                        }
                     
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header