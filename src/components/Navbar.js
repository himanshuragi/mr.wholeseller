import React, { useEffect, useState } from "react";
import "../components_css/Navbar.css";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`} id='top'>
      <LocalShippingIcon fontSize='large' className='logo'/>
      <h2>Mr. Wholeseller</h2>
      <ShoppingCartIcon className='user'/>
    </div>
  );
}

export default Navbar;
