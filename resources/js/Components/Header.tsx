import React from "react";
import {FC} from "react";
import {Link} from "react-router-dom";
import {useMenu} from "@/Contexts/MenuContext";
interface HeaderProps {
}

const Menu = {
    Home: '/',
    Blog: '/blog',
    About: '/about',
    Contact: '/contact'
}
const Header: FC<HeaderProps> = () => {
    const { active, child } = useMenu();

    return <div className="top-section">
        <div className="header-container">
            <div className="header">
                <a className="header-logo" href="#"><img src="/image/Prashanna-Tamrakar-Logo.webp" alt="Prashanna Tamrakar Logo" /></a>
                <div className="header-space"></div>
                    <ul className="header-menu">
                        { Object.entries(Menu).map(([name, url], index) => (
                            <li key={index}><Link className={`decoration-none ${name === active ? 'menu-selected' : ''}`} to={url}>{name}</Link></li>
                        )) }
                    </ul>
            </div>
        </div>
        {child}
    </div>;
}

export default Header;
