import React from "react";
import Image from "../../../../assets/logo-escuela.png";
import './Navbar.css'
import {NavItems} from './components/NavItems';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);



    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}
            className="dark nav">
            <NavbarContent>
                <NavbarMenuToggle aria-label={
                        isMenuOpen ? "Close menu" : "Open menu"
                    }
                    className="sm:hidden"/>
                <NavbarBrand>
                    <img alt=""
                        src={Image}
                        className='logo-nav'/>
                    <p className="font-bold">E.E.S.T N°5</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavItems/>
            </NavbarContent>
            <NavbarContent justify="end" />
            <NavbarMenu className="menu">
                <NavbarMenuItem>
                    <NavItems/>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
