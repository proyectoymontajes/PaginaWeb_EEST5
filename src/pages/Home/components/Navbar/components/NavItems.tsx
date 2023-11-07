import { NavbarItem } from '@nextui-org/react';
import { ItemDropdown } from './ItemDropdown';
import { NavLink } from 'react-router-dom';

import '../Navbar.css'

export const NavItems = () => {
    
    const scrollToSection = (section: string) => {
        const sectionScroll = document.getElementById(section);

        if (sectionScroll) {
            sectionScroll.scrollIntoView({
                behavior: 'smooth', 
                block: 'start',     
            });
        }
    };

    return (
        <>
            <NavbarItem>
                <NavLink className="item link-navbar" to="/" >Inicio</NavLink>
            </NavbarItem>

            <NavbarItem>
                <NavLink className="item" to="/proyects">Proyectos</NavLink>
            </NavbarItem>

            <NavbarItem>
                <NavLink className="item" to="/ "onClick={() => scrollToSection('about-us')}>Sobre nosotros</NavLink>
            </NavbarItem>

            <ItemDropdown />
        </>
    )
}
