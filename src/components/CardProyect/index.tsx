import { CardProyectDesc, CardProyectImg } from "./components";

import './CardProyect.css'
import { useNavigate } from "react-router";

interface CardProyectProps {
    img: string;
    title: string;
}

const CardProyect = ({ img, title }: CardProyectProps) => {

    const navigation = useNavigate()

    return (
        <div className="card-proyect" onClick={ () => navigation(`/proyects/${title}`) }>
            <CardProyectImg img={img} alt={title} />
            <CardProyectDesc title={title} />
        </div>
    )
}


export default CardProyect