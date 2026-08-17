import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Pet = () => {
  const groupRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const targetX = state.mouse.x * 0.9;
    const targetY = state.mouse.y * 0.45;
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.035;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.035;
    groupRef.current.rotation.y += (state.mouse.x * 0.08 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.z = Math.sin(t * 1.4) * 0.035;

    const blink = Math.sin(t * 0.55) > 0.985;
    if (leftEyeRef.current) leftEyeRef.current.scale.y = blink ? 0.12 : 1;
    if (rightEyeRef.current) rightEyeRef.current.scale.y = blink ? 0.12 : 1;
  });

  return (
    <group ref={groupRef} position={[2.4, 0.2, 0.2]} scale={0.9}>
      {/* Body */}
      <Sphere args={[0.72, 32, 32]} position={[0, -0.35, 0]}>
        <MeshDistortMaterial color="#171717" distort={0.18} speed={2} roughness={0.25} metalness={0.75} />
      </Sphere>

      {/* Head */}
      <Sphere args={[0.78, 40, 40]} position={[0, 0.45, 0.05]}>
        <MeshDistortMaterial color="#222222" distort={0.12} speed={1.5} roughness={0.22} metalness={0.7} />
      </Sphere>

      {/* Ears */}
      <mesh position={[-0.48, 1.12, 0]} rotation={[0, 0, -0.35]}>
        <coneGeometry args={[0.28, 0.65, 4]} />
        <meshStandardMaterial color="#242424" roughness={0.25} metalness={0.7} />
      </mesh>
      <mesh position={[0.48, 1.12, 0]} rotation={[0, 0, 0.35]}>
        <coneGeometry args={[0.28, 0.65, 4]} />
        <meshStandardMaterial color="#242424" roughness={0.25} metalness={0.7} />
      </mesh>

      {/* Glowing eyes */}
      <mesh ref={leftEyeRef} position={[-0.28, 0.55, 0.68]}>
        <sphereGeometry args={[0.105, 20, 20]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={4} />
      </mesh>
      <mesh ref={rightEyeRef} position={[0.28, 0.55, 0.68]}>
        <sphereGeometry args={[0.105, 20, 20]} />
        <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={4} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.28, 0.72]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={1.5} />
      </mesh>

      {/* Tail */}
      <mesh position={[0.78, -0.25, -0.05]} rotation={[0, 0, -0.65]}>
        <torusGeometry args={[0.32, 0.07, 12, 32, Math.PI * 1.55]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={1.2} />
      </mesh>

      {/* Tiny chest glow */}
      <mesh position={[0, -0.15, 0.67]}>
        <sphereGeometry args={[0.11, 20, 20]} />
        <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={3} />
      </mesh>
    </group>
  );
};

const Scene = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const { mouse } = state;
    if (lightRef.current) {
      lightRef.current.position.x = mouse.x * 10;
      lightRef.current.position.y = mouse.y * 10;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.005;
      sphereRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <ambientLight intensity={0.55} />
      <pointLight ref={lightRef} position={[10, 10, 10]} intensity={1.7} color="#8b5cf6" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} color="#00f2ff" />

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial color="#1a1a1a" attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.8}>
        <Pet />
      </Float>

      <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
      <Environment preset="city" />
    </>
  );
};

export const HeroScene = () => (
  <div className="absolute inset-0 z-0 opacity-70">
    <Canvas dpr={[1, 2]}>
      <Scene />
    </Canvas>
  </div>
);
