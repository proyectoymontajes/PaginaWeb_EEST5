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
                    startContent={<FacebookIcon/>}>
                    Facebook
                </DropdownItem>

                <DropdownItem key="usage_metrics"
                    startContent={<LocationOnIcon/>}>Pringles 27-Temperley</DropdownItem>
                <DropdownItem key="usage_metrics"
                    startContent={<LocalPhoneIcon/>}>011 - 4244 - 3639</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
