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


export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);



    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}
            className="dark nav">
            <NavbarContent className="mb-custom brand">
                <NavbarMenuToggle aria-label={
                        isMenuOpen ? "Close menu" : "Open menu"
                    }
                    className="sm:hidden"/>

            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 mb-custom items-custom" justify="center">
                <NavItems/>
            </NavbarContent>
            <NavbarContent className="mb-custom items-extend" justify="end" />
            <NavbarMenu className="menu mb-custom">
                <NavbarMenuItem>
                    <NavItems/>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
