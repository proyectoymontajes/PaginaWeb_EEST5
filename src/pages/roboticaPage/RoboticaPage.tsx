import { logoLnr, robotic, roboticAbout, roboticStats } from '../../assets'
import Timeline from '../Home/components/SobreNosotros/Timeline'
import './index.css'

const RoboticaPage = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
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

      <Timeline />

      <div className='lnr-container'>
        <h2 className='subtitle text-center'>Nuestro camino por la Liga Nacional</h2>
        <div className="desc-lnr">
          <div className='robotic-description'>
          <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur asperiores facilis quae aut vitae officiis numquam, reiciendis illum esse atque maiores ducimus molestiae quidem aliquam quasi pariatur, eius ut. Amet.</p>
          </div>
          <img className='logo-lnr' src={logoLnr} alt="" />
        </div>
      </div>

    </div>
  )
}

export default RoboticaPage
