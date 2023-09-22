import React from "react";
import Image from "../../../../assets/logo-escuela.png";
import './Navbar.css'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = ["Inicio", "Sobre Nosotros", "Contactanos", "Proyectos",];

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
                {
                menuItems.map((item, index) => (
                    <NavbarItem key={
                        `${item}-${index}`
                    }>
                        <Link color="foreground" className="w-full" href="#" size="lg">
                            {item} </Link>
                    </NavbarItem>
                ))
            } </NavbarContent>
            <NavbarContent justify="end">
                
            </NavbarContent>
            <NavbarMenu className="menu"> {
                menuItems.map((item, index) => (
                    <NavbarMenuItem key={
                            `${item}-${index}`
                        }
                        >
                        <Link color="foreground" className="w-full" href="#" size="lg">
                            {item} </Link>
                    </NavbarMenuItem>
                ))
            } </NavbarMenu>
        </Navbar>
    );
}
