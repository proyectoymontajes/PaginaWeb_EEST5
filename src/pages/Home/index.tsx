import Navbar from './components/Navbar/Navbar';
import {Proyectos} from './components/Proyectos/Proyectos';
import {SobreNosotros} from './components/SobreNosotros/SobreNosotros';
import { Carousel } from './components/Carousel/Carousel';

const Home = () => {


    return (    

        <>
            <Navbar/>
            <Carousel/>
            <Proyectos/>
            <SobreNosotros/>
        </>

    )
}

export default Home
