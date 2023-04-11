import Wrapper from "../assets/wrappers/Navbar";
import { BsTextLeft, BsFillPersonFill,BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import Logo  from './Logo'

import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, clearStore } from "../features/user/userSlice";

const Navbar = () => {
  const { user } = useSelector((store)=> store.user);
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false)

  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div className="nav-center">
        <button 
        type="button" 
        className="toggle-btn" 
        onClick={toggle}>
          <BsTextLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={()=>setShowLogout(!showLogout)}>
            <BsFillPersonFill/>
              {user?.name}
            <BsCaretDownFill />
          </button>
          <div className={showLogout?'dropdown show-dropdown':'dropdown'}>
            <button 
            type="button" 
            className="dropdown-btn" 
            onClick={()=>dispatch(clearStore('Logging out...'))}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  
  )
  
};

export default Navbar;