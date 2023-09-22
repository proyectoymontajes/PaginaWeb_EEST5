import {Link, NavbarItem} from '@nextui-org/react';
import {ItemDropdown} from './ItemDropdown';

export const NavItems = () => {

    return (
        <>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Inicio
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Proyectos
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Sobre nosotros
                </Link>
            </NavbarItem>
            <ItemDropdown/>
        </>
    )
}
