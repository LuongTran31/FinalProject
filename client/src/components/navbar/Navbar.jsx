import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
import newRequest from "../../utils/newRequest";

const Navbar = () =>{
    const [active,setActive] = useState(false)
    const [open,setOpen] = useState(false)
    const navigate = useNavigate();
    const isActive =()=>{
        window.scrollY>0 ?setActive(true) : setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll",isActive);
        return ()=>{
            window.removeEventListener("scroll",isActive)
        };
    },[])
     const {pathname}  =useLocation();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const handleLogout = async()=> {
        try {
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser",null);
            navigate("/");
        } catch (error) {
            console.log(error)
            
        }

    }
    return (
        <div className={active || pathname !=="/" ?"navbar active": "navbar"}>
            <div className="container">
                <div className="logo">
                <Link to="/" className="link">
                    <span className="text">Hanler</span>
                </Link>    
                    <span className=".">.</span>
                </div>
                <div className="links">
                    <span>Explore</span>
                    <span>English</span>
                   <Link to="/login"> {currentUser?.isSeller && <span className="link">Sign In</span>}</Link>
                   {!currentUser?.isSeller && <span>Become a seller </span>}
                    {!currentUser &&<button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={()=> setOpen(!open)}>
                            <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
                            <span>{currentUser?.username}</span>
                        {open && <div className="option">
                            {
                                currentUser?.isSeller && (
                                    <>
                                   <Link to="/myproduct" className="link"> <span>Product</span></Link>
                                   <Link to="/add" className="link"> <span>Add New Product</span></Link>
                                    </>
                                )
                            }
                            <Link to="/orders" className="link">
                            <span>Orders</span>
                            </Link>
                            <Link to="/messages" className="link"><span>Messages</span></Link>
                           <Link onClick={handleLogout} className="link"> <span>Logout</span></Link> 
                        </div>}
                        </div>
                    )}
                </div>
            </div>
           { active || pathname !=="/" && (
           <>
           <hr/>
          <div className="menu">
            <Link className="link menuLink" to="/products?cat=design">
              Phone
            </Link>
            <Link className="link menuLink" to="/products?cat=design">
              Laptop
            </Link>
            <Link className="link menuLink" to="/products?cat=design">
             Desktop
            </Link>
            <Link className="link menuLink" to="/products?cat=design">
             Ipad
            </Link>
            <Link className="link menuLink" to="/products?cat=design">
             Pc
            </Link>
           
          </div>
          <hr />
        </>
      )}
        </div>
    )
}

export default Navbar