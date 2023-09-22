import {Carousel} from "./components/Carousel";
import Navbar from './components/Navbar/Navbar';
import {Proyectos} from './components/Proyectos';
import {SobreNosotros} from './components/SobreNosotros/SobreNosotros';

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
