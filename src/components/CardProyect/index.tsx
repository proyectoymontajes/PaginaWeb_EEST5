import { CardProyectDesc, CardProyectImg } from "./components";

import './CardProyect.css'

interface CardProyectProps {
    img: string;
    title: string;
}

const CardProyect = ({ img, title }: CardProyectProps) => {
    return (
        <div className="card-proyect">
            <CardProyectImg img={img} alt={title} />
            <CardProyectDesc title={title} />
        </div>
    )
}


export default CardProyect