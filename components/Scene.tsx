'use client'

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';


function createInfinityGeometry(
  radius = 2,
  tubeRadius = 0.2,
  segments = 100,
  tubeSegments = 20
) {
  class InfinityCurve extends THREE.Curve<THREE.Vector3> {
    scale: number;

    constructor(scale = 1) {
      super();
      this.scale = scale;
    }

    getPoint(t: number, optionalTarget = new THREE.Vector3()): THREE.Vector3 {
      const theta = t * Math.PI * 2;
      const sin = Math.sin(theta);
      const cos = Math.cos(theta);

      const tx = cos / (1 + sin * sin);
      const ty = (sin * cos) / (1 + sin * sin);
      const tz = 0;

      return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
    }
  }

  const curve = new InfinityCurve(radius);

  const geometry = new THREE.TubeGeometry(curve, segments, tubeRadius, tubeSegments, true); 

  return geometry;
}


const Scene = () => {

    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(typeof window !== undefined){
            const width = window.innerWidth < 768 ? window.innerWidth : window.innerWidth/2;
            const height = window.innerHeight < 768 ? window.innerHeight/2 : window.innerHeight;

            const renderer = new THREE.WebGLRenderer({antialias : true})
            renderer.setSize(width, height)
            
            if (divRef.current?.firstChild) {
              divRef.current.removeChild(divRef.current.firstChild);
            }
            divRef.current?.appendChild(renderer.domElement);

            const fov = 75
            const aspectRatio = width / height
            const near = 0.1
            const far  = 10
            const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far)
            camera.position.z = 5;

            const orbitController = new OrbitControls(camera, renderer.domElement)
            orbitController.enableDamping = true;
            orbitController.dampingFactor = 0.03

            const scene = new THREE.Scene()
            scene.background = new THREE.Color('#000');

            const infGeometry = createInfinityGeometry();
            const material = new THREE.MeshStandardMaterial({
                color : '#ffffff',
                metalness : 0.3,
                roughness : 0.3,
                emissive: '#ffffff',
                emissiveIntensity: 1.2
            })
            const mesh = new THREE.Mesh(infGeometry, material);
            scene.add(mesh)

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);
            const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
            dirLight.position.set(5, 10, 5);
            scene.add(dirLight);

            const composer = new EffectComposer(renderer);
            composer.addPass(new RenderPass(scene, camera));

            const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
                0.7, // strength
                0.4, // radius
                0.5 // threshold
            );
            composer.addPass(bloomPass);

            function animate() {
                mesh.rotation.z += 0.01
                mesh.rotation.x += 0.01
                mesh.rotation.y += 0.01
                renderer.render( scene, camera );
                orbitController.update()
                composer.render();
            }
            renderer.setAnimationLoop( animate );



        }
    }, [])

    return (
        <div ref={divRef}/>
    );
}

export default Scene;
