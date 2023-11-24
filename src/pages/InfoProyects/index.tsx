import './InfoProyects.css';
import { useParams } from 'react-router';
import { items } from "../../data/dataProyects";
import { useEffect } from 'react';
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

  console.log(proyectId);

  return (
    <>
      <div className='header-proyect'>
        <div className='contain-title'>
          <div onClick={() =>  navigate(-1)}>
            {/* <ArrowBackIcon style={{ fontSize: '38px', cursor:'pointer' }}/> */}
            <p style={{ fontSize: '38px', cursor:'pointer' }}>←</p>
          </div>
          <h1 className='title-proyect'>{proyect.title}</h1>
        </div>
        <div className="by-date-proyect">
          <div className="by">
            <span>{proyect.members}</span>
          </div>
          <div className="date">
            <p>{proyect.day}</p>
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
