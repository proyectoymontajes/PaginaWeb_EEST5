
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
// import { useRef } from 'react';

interface GLTF {
  nodes: any;
  materials: any;
  animations: any;
}

export function Robot(props : any) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/robot.gltf') as unknown as GLTF ;
  // const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
          <group name="900c78215d8943b3939e71d8f325badffbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="sphere_body" position={[0, 0.004, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="sphere_body_sphere_color_0" geometry={nodes.sphere_body_sphere_color_0.geometry} material={materials.sphere_color} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/robot.gltf')
