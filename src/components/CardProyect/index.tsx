import { CardProyectDesc, CardProyectImg } from "./components";

import './CardProyect.css'

interface CardProyectProps {
    img: string;
    title: string;
    alt: string;
}

const CardProyect = ({ img, title, alt }: CardProyectProps) => {
    return (
        <div className="card-proyect">
            <CardProyectImg img={img} alt={alt} />
            <CardProyectDesc title={title} />
        </div>
    )
}


export default CardProyect