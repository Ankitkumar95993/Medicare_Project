import logo from "../../assets/images/logo.png";
import userImage from "../../assets/images/avatar-icon.png";
import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import {BiMenu} from "react-icons/bi";
import { icons } from "react-icons";
// import {headerBg} from "../../assets/images/mask.png";
 
const navlinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctor",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center px-12 p-2">
      <div className="container w-10/12 mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>

          {/* *.............menu.............* */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[3rem]">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} className={navClass=>navClass.isActive
                  ? "text-blue-600 text-[16px] leading-7 font-extrabold"
                  : "text-gray text-[16px] leading-7 hover:text-richblack-700"
                  }
                  >{link.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* .............................nav right part............................ */}
            <div className="flex items-center gap-4">
              <div className="hidden">
                <Link to = '/'>
                  <img className="w-[35px]  h-[35px] rounded-full"  src={userImage} alt=""/>
                
                </Link>
              </div>

              <Link to="/login">
              <button className="py-2 px-6 text-white bg-richblack-700 font-bold h-[44px] rounded-[50px] flex justify-center items-center">Login</button>
              </Link>

              <span className="md:hidden">
                <BiMenu className="w-6 h-6 cursor-pointer"/>
              </span>


            
            </div>

           


        </div>
      </div>
    </header>
  );
};
export default Header;
