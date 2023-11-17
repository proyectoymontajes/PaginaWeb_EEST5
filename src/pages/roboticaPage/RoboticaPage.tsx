import { robotic, roboticStats } from '../../assets'
import './index.css'

 const RoboticaPage = () => {
  return (
    <div className='roboticaPage'>
        <img src={roboticStats} alt='roboticStats' className='roboticaPage-Img ml10'/>
        <h1 className='titleRobotica'>Club de Robotica</h1>
        <img src={robotic} alt='roboticStats' className='roboticaPage-Img mr10'/>
    </div>
  )
}

export default RoboticaPage
