import { robotic, roboticAbout, roboticStats } from '../../assets'
import './index.css'

const RoboticaPage = () => {
  return (
    <>
      <div className='roboticaPage'>
        <img src={roboticStats} alt='roboticStats' className='roboticaPage-Img ml10' />
        <h1 className='titleRobotica'>Club de Robotica</h1>
        <img src={robotic} alt='roboticStats' className='roboticaPage-Img mr10' />
      </div>
      <div className="aboutRobotic">
        <h2 className='subtitle'>Sobre Nuestro Club</h2>
        <div className='description-container'>
          <p className='robotic-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur, asperiores eligendi ex, fugit quod aperiam quos commodi impedit enim dicta iste veritatis, molestias dignissimos sit! Magnam suscipit recusandae quo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui, reprehenderit at ipsa perspiciatis earum. Accusamus quae tempora provident impedit earum saepe suscipit fuga, animi velit ipsa nemo, dicta eum.
          </p>
          <img className='img-description' src={roboticAbout} alt="image computer and code" />
        </div>
      </div>
    </>
  )
}

export default RoboticaPage
