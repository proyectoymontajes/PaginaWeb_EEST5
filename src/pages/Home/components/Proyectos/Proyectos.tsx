import CardProyect from "../../../../components/CardProyect"
import './Proyectos.css';
import { useNavigate } from "react-router-dom";


export const Proyectos = () => {

    const navigate = useNavigate()

    

    return (
        <>
            <h1 className="title-proyects" id='proyects'>PROYECTOS</h1>
            <div className="contain-proyects">
                <div className='contain-proyects'>
                    <CardProyect img='https://github.com/matias-rolon/img-proyectos/blob/main/auto-smart.png?raw=true' title='AUTO SMART'/>
                    <CardProyect img='https://github.com/matias-rolon/img-proyectos/blob/main/ara%C3%B1a.png?raw=true' title='ARAÑA ROBOTICA'/>
                    <CardProyect img='https://matias-rolon.github.io/pagina_IoT.github.io/WhatsApp%20Image%202022-11-24%20at%2014.13.13.jpeg' title='IOT'/>
                </div>
            </div>
            <div className='read-more' onClick={ () => navigate("/proyects") }>
                <p className='text-read-more'>VER MÁS PROYECTOS</p>
                <div className="spacer"></div>
                <p className="arrow-read-more"> → </p>
            </div>
        </>
    )
}
