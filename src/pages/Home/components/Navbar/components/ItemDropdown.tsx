import {
    DropdownItem,
    Dropdown,
    DropdownMenu,
    DropdownTrigger,
    NavbarItem,
    Button
} from "@nextui-org/react";
import {ChevronDown} from "./Icons.jsx";
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from '@nextui-org/react';


export const ItemDropdown = () => {

    const icons = {
        chevron: <ChevronDown fill="currentColor"
            size={16}/>
    };

    return (
        <Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                    <Button disableRipple className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                        endContent={
                            icons.chevron
                        }
                        radius="sm"
                        variant="light">
                        Contactanos
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="ACME features" className="w-[340px]"
                itemClasses={
                    {base: "gap-4"}
            }>
                <DropdownItem key="autoscaling"
                    startContent={<FacebookIcon/>}
                >
                    <Link color="foreground" target="_blank" href="https://www.facebook.com/industrialdetemperleyoficial/?locale=es_LA">
                        Industrial de Temperley - Oficial
                    </Link>
                </DropdownItem>

                <DropdownItem key="usage_metrics" startContent={<LocationOnIcon/>}>
                    <Link color="foreground" target="_blank"  href="https://www.google.com/maps/place/Escuela+T%C3%A9cnica+Secundaria+N%C2%B05/@-34.7689249,-58.4013915,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd2e9201ff88f:0xedba7d92ae3757af!8m2!3d-34.7689293!4d-58.3988166!16s%2Fg%2F11r8gqdf2?entry=ttu">
                        Pringles 27-Temperley
                    </Link>
                </DropdownItem>

                <DropdownItem key="usage_metrics"
                    startContent={<LocalPhoneIcon/>}>011 - 4244 - 3639</DropdownItem>

                <DropdownItem key="usage_metrics"
                    startContent={<InstagramIcon/>}>
                    <Link color="foreground" target="_blank" href="https://www.instagram.com/">
                        @robotic
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
