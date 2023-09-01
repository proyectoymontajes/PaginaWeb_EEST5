import Image from "../../../assets/logo-escuela.png";

import '../styles.css'
import { Section } from '../components/Section';

import { useState } from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


export const Navbar = () => {

    
    const [contactos] = useState([
        {
            item: "FACEBOOK",
            path: "https://www.facebook.com/IndustrialDeTemperley/?locale=es_LA",
            logo: <FacebookIcon className="logo"/>
        },
        {
            item: "Pringles 27-Temperley",
            path: "https://www.google.com/maps/place/Escuela+T%C3%A9cnica+Secundaria+N%C2%B05/@-34.7689249,-58.4013915,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd2e9201ff88f:0xedba7d92ae3757af!8m2!3d-34.7689293!4d-58.3988166!16s%2Fg%2F11r8gqdf2?entry=ttu",
            logo: <LocationOnIcon className="logo"/>
        },
        {
            item: "011 - 4244 - 3639",
            path: "https://www.google.com/maps/place/Escuela+T%C3%A9cnica+Secundaria+N%C2%B05/@-34.7689249,-58.4013915,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd2e9201ff88f:0xedba7d92ae3757af!8m2!3d-34.7689293!4d-58.3988166!16s%2Fg%2F11r8gqdf2?entry=ttu",
            logo:   <LocalPhoneIcon className="logo"/>
        }
    ])

    const [sobreNosotros] = useState([
        {
            item: "HISTORIA"
        },
    ])

    const [proyectos] = useState([
        {
            item: "Robot sumos"
        },
        {
            item: "Brazo robotico"
        },
        {
            item: "Seguidor de linea"
        },
        {
            item: "Smartwatch"
        },
    ])

    return (
        <div className="header">
            <div className='contain-title'>
                <img alt="" src={Image}
                    className='image'/>
                <div className="title">
                    <h3 className="name-page">TALLER</h3>
                    <h3 className="name-page">ELECTRÓNICA</h3>
                </div>
            </div>

            <div className="sections">
                <Section title="INICIO" url="/"/>
                <Section title="CONTACTANOS"
                    items={contactos}/>
                <Section title="SOBRE NOSOTROS"
                    items={sobreNosotros}/>
                <Section title="PROYECTOS"
                    items={proyectos}/>
            </div>
        </div>
    )
}
