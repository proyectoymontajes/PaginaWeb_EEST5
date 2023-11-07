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
            <div style={
                {
                    width: 'auto',
                    height: '82vh',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }>
                <div style={
                    {
                        width: '80%',
                        height: '80%',
                        backgroundColor: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }
                }>
                    <div style={
                        {
                            backgroundColor: 'white',
                            width: '60%',
                            height: '100%',
                        }
                    }>
                        <Canvas camera={
                            {
                                zoom,
                                position: [-0.5, 0, 1],
                            }
                        }>
                            <ambientLight intensity={3}/>
                            <pointLight position={
                                    [35, 35, 0]
                                }
                                intensity={1}/>
                            <pointLight position={
                                    [-35, 35, 0]
                                }
                                intensity={1}/>
                            <Suspense fallback={null}>
                                <Robot/>

                            </Suspense>
                            <OrbitControls enableZoom={false}/>
                        </Canvas>
                    </div>
                    <div style={
                        {
                            display: 'flex',
                            width: '50%',
                            height: '60%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#000'
                        }
                    }>
                        <h1 className='title-header'>Escuela Técnica N°5 Temperley.</h1>
                    </div>
                </div>
            </div>
            <Proyectos/>
            <SobreNosotros/>
        </>

    )
}

export default Home
