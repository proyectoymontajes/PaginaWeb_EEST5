import { Proyectos } from './components/Proyectos/Proyectos';
import { SobreNosotros } from './components/SobreNosotros/SobreNosotros';
import { Carousel } from './components/Carousel/Carousel';
import { Canvas } from 'react-three-fiber';
import { Robot } from '../../components/3d/Robot';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

const Home = () => {


    return (

        <>
            <div style={{
                width: 'auto', height: '92vh', backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center', justifyContent: 'center'
            }}>
                <div style={{
                    width: '80%',
                    height: '80%',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'start', justifyContent: 'center',
                    // borderRadius:'17px',
                    overflow:'hidden',
                }}>
                    <div style={{
                        backgroundColor: 'white', 
                        width: '60%', height: '50%',
                        // marginTop:'100px'
                    }}>
                        <Canvas 
                        camera={{ zoom: 4, position: [-0.5,0,1] }}>
                            <ambientLight intensity={3} />
                            <pointLight position={[35, 35, 0]} intensity={1} />
                            <pointLight position={[-35, 35, 0]} intensity={1} />
                            <Suspense fallback={null}>
                                <Robot />

                            </Suspense>
                            <OrbitControls />
                        </Canvas>
                    </div>
                    <div style={{
                        // backgroundColor:'#000',
                        display: 'flex',
                        width: '50%',
                        height: '60%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000'
                    }}>
                        <h1>Escuela Técnica N°5 Temperley.</h1>
                    </div>
                </div>
            </div>
            <Proyectos />
            <SobreNosotros />
            <Carousel />
        </>

    )
}

export default Home
