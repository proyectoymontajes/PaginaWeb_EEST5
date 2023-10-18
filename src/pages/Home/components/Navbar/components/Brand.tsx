import { NavbarBrand } from '@nextui-org/navbar'

interface Props {
    img: string;
}

export const Brand = ({ img }: Props) => {
    return (
        <NavbarBrand>
            <img alt=""
                src={img}
                className='logo-nav' />
            <p className="font-bold">E.E.S.T N°5</p>
        </NavbarBrand>
    )
}