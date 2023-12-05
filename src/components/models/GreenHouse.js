'use client'
import React, { useRef, Suspense } from 'react'
import {Canvas, useLoader} from '@react-three/fiber'
import {GLTFLoader} from "three/addons";
import {OrbitControls} from "@react-three/drei";

export function Model() {
    const ref = useRef();
    const all = useLoader(GLTFLoader, 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/temp/all.glb')
    return (
        <Canvas style={{height: '100%'}}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <primitive ref={ref} object={all.scene}/>
            </Suspense>
            <OrbitControls/>
        </Canvas>
    )
}
