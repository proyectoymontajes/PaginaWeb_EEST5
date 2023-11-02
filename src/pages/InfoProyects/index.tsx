import './InfoProyects.css';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {useParams} from 'react-router';
import {items} from "../../data/dataProyects";

const InfoProyects = () => {

    const proyectId = useParams().proyectId;

    // const proyect = items.find(proyect => proyect.items.map(item => (item.title)) === proyectId);

    const section = items.find(proyect => proyect.items.some(item => item.title === proyectId));

    const proyect = section ?. items.find(proyecto => proyecto.title)

    return (
        <>
            <div className='header-proyect'>
                <h1 className='title-proyect'>
                    {
                    proyect ?. title
                }</h1>
                <div className="by-date-proyect">
                    <div className="by">
                        <PersonIcon className='icon'/>
                        <span>Julian Alvares, Lionel Messi, Angel Di Maria</span>
                    </div>
                    <div className="date">
                        <p>9/12/18</p>
                        <CalendarMonthIcon className='icon'/>
                    </div>
                </div>
                <div className="contain-image-proyect">
                    <img src="https://www.esneca.com/wp-content/uploads/clasificacion-de-los-robots.jpg" alt=""/>
                </div>
            </div>
            <div className="description-proyect">
                {
                proyect ?. desc.map(desc => (
                    <>
                        <h3 className='title-description'>{desc.title}</h3>
                        <p>{desc.body}</p>
                    </>

                ))
            } </div>
        </>
    )
}

export default InfoProyects;
