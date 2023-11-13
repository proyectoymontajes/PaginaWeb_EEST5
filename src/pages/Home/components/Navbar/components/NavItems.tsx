import { NavbarItem } from '@nextui-org/react';
import { ItemDropdown } from './ItemDropdown';
import { NavLink } from 'react-router-dom';
import '../Navbar.css';

export const NavItems = ({ closeMenu }:{closeMenu: () => void}) => {

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
                <NavLink className="item" to="/" onClick={closeMenu}>
                    Inicio
                </NavLink>
            </NavbarItem>

            <NavbarItem>
                <NavLink className="item" to="/proyects" onClick={closeMenu}>
                    Proyectos
                </NavLink>
            </NavbarItem>

            <NavbarItem>
                <NavLink className="item" to="/" onClick={() => {
                    closeMenu()
                    scrollToSection('about-us')
                }}>
                    Sobre nosotros
                </NavLink>
            </NavbarItem>

            <ItemDropdown />
        </>
    );
}
