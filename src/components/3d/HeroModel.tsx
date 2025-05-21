import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, Environment } from '@react-three/drei';
import PassiveOrbitControls from './PassiveOrbitControls';
import * as THREE from 'three';

const GeometricElements = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Create materials with different colors
  const materials = [
    new THREE.MeshStandardMaterial({ color: 0x3B82F6, roughness: 0.2, metalness: 0.8 }),
    new THREE.MeshStandardMaterial({ color: 0x2563EB, roughness: 0.4, metalness: 0.6 }),
    new THREE.MeshStandardMaterial({ color: 0x1D4ED8, roughness: 0.3, metalness: 0.7 }),
    new THREE.MeshStandardMaterial({ color: 0x10B981, roughness: 0.5, metalness: 0.5 }),
  ];

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;

      // Apply different rotations to child meshes
      groupRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.x = Math.sin(clock.getElapsedTime() * (0.2 + i * 0.05)) * 0.2;
          child.rotation.z = Math.cos(clock.getElapsedTime() * (0.3 + i * 0.05)) * 0.2;

          // Subtle position animation
          child.position.y = Math.sin(clock.getElapsedTime() * (0.5 + i * 0.1)) * 0.5;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cube */}
      <mesh position={[0, 0, 0]} material={materials[0]} castShadow>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
      </mesh>

      {/* Sphere */}
      <mesh position={[3, 1, -2]} material={materials[1]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
      </mesh>

      {/* Torus */}
      <mesh position={[-3, -1, -1]} material={materials[2]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[1, 0.3, 16, 32]} />
      </mesh>

      {/* Octahedron */}
      <mesh position={[2, -2, 1]} material={materials[3]} castShadow>
        <octahedronGeometry args={[1.2]} />
      </mesh>

      {/* Dodecahedron */}
      <mesh position={[-2, 2, 2]} material={materials[0]} castShadow>
        <dodecahedronGeometry args={[1]} />
      </mesh>
    </group>
  );
};

const HeroModel = () => {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <Environment preset="sunset" />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <GeometricElements />

      <PassiveOrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
};

export default HeroModel;