import bonaerenses2023 from "../../../../assets/carousel/bonaerenses2023.jpg";
import frenteEscuela2 from "../../../../assets/carousel/frente-escuela2.jpg";
import patio from "../../../../assets/carousel/patio.jpg";
import robotica from "../../../../assets/carousel/robotica.jpg";
import robotica2 from "../../../../assets/carousel/robotica2.jpg";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Carousel.css'
import Item from "./components/item";
import { Button } from "./components/button";

export const Carousel = () => {

    const scrollToSection = (section: string) => {
        const sectionScroll = document.getElementById(section); // Reemplaza 'targetSection' con el ID de la sección a la que deseas desplazarte.

        if (sectionScroll) {
            sectionScroll.scrollIntoView({
                behavior: 'smooth', // Esto activa la animación de desplazamiento suave.
                block: 'start',     // Esto alineará la parte superior de la sección con la parte superior de la ventana.
            });
        }
    };

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <Item
                    active={true}
                    src={bonaerenses2023}
                >
                    <h1
                        className="container__typing"
                        // style={{ marginTop: '0' }}
                    >
                        Escuela Técnica N°5 Temperley.
                    </h1>
                </Item>

                <Item src={frenteEscuela2} >
                    <div className="overlay-proyectos">
                        <h1 className="container__proyectos">
                            CONOCÉ ACERCA DE NUESTROS PROYECTOS
                        </h1>
                        <button className="button-informacion" onClick={() => scrollToSection('proyects')}>MÁS INFORMACIÓN</button>
                    </div>
                </Item>

                <Item src={patio}>
                    <div className="overlay-proyectos">
                        <h1 className="container__proyectos">
                            CONOCÉ ACERCA DE NOSOTROS
                        </h1>
                        <button className="button-informacion" onClick={() => scrollToSection('about-us')}>MÁS INFORMACIÓN</button>
                    </div>
                </Item>

                <Item src={robotica} />

                <Item src={robotica2} />

            </div>
            <Button type="prev" />
            <Button type="next" />
        </div>
    )
}
