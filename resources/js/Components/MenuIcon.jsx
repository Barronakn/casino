import React from 'react';
import Menu_icon from "../../../public/assets/menu_icon.png";

const MenuIcon = ({ handleClick }) => {
    return (
        <div onClick={handleClick} className="menu-icon cursor-pointer">
            <img className='pointer-events-none' loading='lazy' src={Menu_icon} alt="menu-icon" />
        </div>
    );
};

export default MenuIcon;
