import './InfoProyects.css';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useParams } from 'react-router';
import { items } from "../../data/dataProyects";
import { useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'


const InfoProyects = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const proyectId = useParams().proyectId;

  let proyect = null;

  for (const category of items) {
    const proyectInCategory = category.items.find((proyecto) => proyecto.title === proyectId);
    if (proyectInCategory) {
      proyect = proyectInCategory;
      break;
    }
  }

  if (!proyect) {
    return (
      <div>
        <p>El componente no se ha encontrado.</p>
      </div>
    );
  }

  return (
    <>
      <div className='header-proyect'>
        <div className='contain-title'>
          <div onClick={() =>  navigate(-1)}>
            <ArrowBackIcon style={{ fontSize: '38px', cursor:'pointer' }}/>
          </div>
          <h1 className='title-proyect'>{proyect.title}</h1>
        </div>
        <div className="by-date-proyect">
          <div className="by">
            <PersonIcon className='icon' />
            <span>{proyect.members}</span>
          </div>
          <div className="date">
            <p>{proyect.day}</p>
            <CalendarMonthIcon className='icon' />
          </div>
        </div>
        <div className="contain-image-proyect">
          <img src={proyect.img} alt="" />
        </div>
      </div>
      <div className="description-proyect">
        {proyect.desc.map((desc) => (
          <div key={desc.title}>
            <h3 className='title-description'>{desc.title}</h3>
            {desc.img?.map((img) => (
              <img className='image-description' src={img} alt="" key={img} />
            ))}
            {desc.body?.map((body, index) => (
              <p className='body-description' key={index}>
                {body}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default InfoProyects;
