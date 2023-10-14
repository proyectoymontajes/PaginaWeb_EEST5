import { NavbarItem } from '@nextui-org/react';
import { ItemDropdown } from './ItemDropdown';
import { NavLink } from 'react-router-dom';

import '../Navbar.css'

export const NavItems = () => {

    return (
        <>
            <NavbarItem>
                <NavLink className="item" to="/">Inicio</NavLink>
            </NavbarItem>

            <NavbarItem>
                <NavLink className="item" to="/proyects">Proyectos</NavLink>
            </NavbarItem>

            <NavbarItem>
                <NavLink className="item" to="/proyects">Sobre nosotros</NavLink>
            </NavbarItem>

            <ItemDropdown />
        </>
    )
}
