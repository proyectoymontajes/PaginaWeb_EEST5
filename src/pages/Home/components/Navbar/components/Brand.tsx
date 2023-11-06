import { NavbarBrand } from '@nextui-org/navbar'
import { Link } from 'react-router-dom';
import "../Navbar.css"

interface Props {
    img: string;
}

export const Brand = ({ img }: Props) => {
    return (
        <NavbarBrand>
            <Link to="/" className='brand-items'>
                <img alt=""
                    src={img}
                    className='logo-nav' />
                <p className="font-bold">E.E.S.T N°5</p>
            </Link>
        </NavbarBrand>
    )
}