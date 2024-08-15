import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { vertex, fragment } from './shader'

export default function Model() {
    const mesh = useRef()


    return (
        <Canvas >
            <mesh ref={mesh}>
                <planeGeometry args={[3, 3, 64, 64]} />
                <shaderMaterial
                    // color="blue"
                    wireframe={false}
                    vertexShader={vertex}
                    fragmentShader={fragment}
                />
            </mesh>
        </Canvas>
    )
}