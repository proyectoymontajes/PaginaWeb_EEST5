import frenteEscuela from "../../../assets/carousel/frente-escuela.jpg";
import frenteEscuela2 from "../../../assets/carousel/frente-escuela2.jpg";
import patio from "../../../assets/carousel/patio.jpg";
import robotica from "../../../assets/carousel/robotica.jpg";
import robotica2 from "../../../assets/carousel/robotica2.jpg";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../styles.css'

export const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={frenteEscuela}
                        className="d-block w-100"
                        alt="..."/>
                    <div className="overlay">
                        <h1 className="container__typing">
                            Escuela Tecnica N°5 Temperley.
                        </h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={frenteEscuela2}
                        className="d-block w-100"
                        alt="..."/>
                    <div className="overlay-proyectos">
                        <h1 className="container__proyectos">
                            CONOCE ACERCA DE NUESTROS PROYECTOS
                        </h1>
                        <button className="button-informacion">MÁS INFORMACIÓN</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={patio}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={robotica}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={robotica2}
                        className="d-block w-100"
                        alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <div className="contain-button-carousel">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </div>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <div className="contain-button-carousel">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </div>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
