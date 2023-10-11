import './InfoProyects.css';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const InfoProyects = () => {
    return (
        <>
            <div className='header-proyect'>
                <h1 className='title-proyect'>Nombre del proyecto a mostrar</h1>
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
              <h3 className='title-description'>Acerca del proyecto</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat dolorem eveniet provident eius quas, illum atque, non est quae at, incidunt voluptas officia quisquam sapiente hic in nostrum consequuntur.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis explicabo rerum nemo sunt aut repudiandae? Vel, labore dignissimos dolore quam accusamus qui quod quis, harum nesciunt, repellendus similique ullam ipsa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi temporibus perspiciatis facere eos eaque repudiandae quisquam labore harum, necessitatibus inventore voluptatibus velit, minus provident totam! Placeat culpa dolore magni suscipit?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sunt ratione assumenda maiores itaque at, quis molestiae libero voluptatem ex, fugit quae enim, doloremque exercitationem consequuntur minus dolor ad cupiditate.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sunt ratione assumenda maiores itaque at, quis molestiae libero voluptatem ex, fugit quae enim, doloremque exercitationem consequuntur minus dolor ad cupiditate.
              </p>
            </div>
        </>
    )
}

export default InfoProyects;
