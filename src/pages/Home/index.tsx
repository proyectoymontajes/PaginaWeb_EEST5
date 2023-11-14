import {Proyectos} from './components/Proyectos/Proyectos';
import {SobreNosotros} from './components/SobreNosotros/SobreNosotros';
import {Canvas} from 'react-three-fiber';
import {Robot} from '../../components/3d/Robot';
import {Suspense, useEffect, useState} from 'react';
import {OrbitControls} from '@react-three/drei';

const Home = () => {
    const [zoom, setZoom] = useState(4);

    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 1270px)');

        if (isMobile.matches) {
            setZoom(1);
        } else {
            setZoom(4);
        }
    }, []);

    return (
        <>
            <div className="container-home" >
                
            </div>
            <Proyectos/>
            <SobreNosotros/>
        </>

    )
}

export default Home
