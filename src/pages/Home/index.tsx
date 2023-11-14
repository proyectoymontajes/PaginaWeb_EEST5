import {Proyectos} from './components/Proyectos/Proyectos';
import {SobreNosotros} from './components/SobreNosotros/SobreNosotros';

const Home = () => {

    return (
        <>
            <div className="container-home" >
                <h1 className="title-home">Taller de&nbsp;</h1>
                <h1 className="title-home-sub">Electrónica</h1>
            </div>
            <Proyectos/>
            <SobreNosotros/>
        </>

    )
}

export default Home
