'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
  Environment,
  Float,
  Sparkles,
} from '@react-three/drei';
import { useTheme } from 'next-themes';
import * as THREE from 'three';
import { MathUtils } from 'three';

// Prevent model loading issues
const MODEL_URL = '/assets/3d/duck.glb';

function Model({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
}: {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
}) {
  const { scene } = useGLTF(MODEL_URL);
  const ref = useRef<THREE.Object3D>();

  useFrame(state => {
    ref.current.rotation.y += 0.005;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}

function QuantumSphere({
  position = [0, 0, 0],
  color = '#3b82f6',
  mousePosition,
}: {
  position?: [number, number, number];
  color?: string;
  mousePosition?: { x: number; y: number };
}) {
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const electronGroupRef = useRef<THREE.Group | null>(null);
  const electronRefs: React.MutableRefObject<THREE.Mesh | null>[] = [
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
  ];
  const ringRefs: (React.RefObject<THREE.Mesh> | null)[] = [
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
  ];

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Rotate electron group based on mouse position
    if (mousePosition && electronGroupRef.current) {
      electronGroupRef.current.rotation.x = MathUtils.lerp(
        electronGroupRef.current.rotation.x,
        mousePosition.y * 0.5,
        0.05
      );
      electronGroupRef.current.rotation.y = MathUtils.lerp(
        electronGroupRef.current.rotation.y,
        mousePosition.x * 0.5,
        0.05
      );
    }

    // Rotate rings at different speeds
    if (ringRefs[0]?.current) {
      ringRefs[0].current.rotation.z = t * 0.3;
    }
    if (ringRefs[1]?.current) {
      ringRefs[1].current.rotation.x = t * 0.4;
    }
    if (ringRefs[2] && ringRefs[2].current) {
      ringRefs[2].current.rotation.y = t * 0.5;
    }

    // Move electrons along their paths
    electronRefs.forEach((ref, i) => {
      if (ref.current) {
        const angle = t * (0.5 + i * 0.2) + i * Math.PI * 0.5;
        const radius = 1.5 + i * 0.2;

        ref.current.position.x = Math.sin(angle) * radius;
        ref.current.position.z = Math.cos(angle) * radius;
        ref.current.position.y = Math.sin(angle * 0.7) * (0.5 + i * 0.2);

        // Pulse electrons
        const scale = 1 + Math.sin(t * 3 + i) * 0.1;
        ref.current.scale.set(scale, scale, scale);
      }
    });

    // Pulse the core sphere
    const coreScale = 1 + Math.sin(t * 1.5) * 0.05;
    if (sphereRef.current) {
      sphereRef.current.scale.set(coreScale, coreScale, coreScale);
    }
  });

  return (
    <group position={position}>
      {/* Core sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Electron group that rotates based on mouse position */}
      <group ref={electronGroupRef}>
        {/* Rings */}
        {[0, 1, 2].map(i => (
          <mesh key={`ring-${i}`} ref={ringRefs[i]}>
            <torusGeometry args={[1.5 + i * 0.2, 0.02, 16, 50]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.5}
              transparent={true}
              opacity={0.6}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        ))}

        {/* Electrons */}
        {electronRefs.map((ref, i) => (
          <mesh key={`electron-${i}`} ref={ref}>
            <sphereGeometry args={[0.12 - i * 0.02, 16, 16]} />
            <meshStandardMaterial
              color="#61dafb"
              emissive="#61dafb"
              emissiveIntensity={1}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function HeroScene() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = e => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Limit pixel ratio for better performance
        performance={{ min: 0.5 }} // Allow performance scaling
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <QuantumSphere
            position={[0, 0, 0]}
            color={theme === 'dark' ? '#3b82f6' : '#3b82f6'}
            mousePosition={mousePosition}
          />
        </Float>

        <Sparkles
          count={30} // Reduced count for better performance
          scale={6}
          size={1}
          speed={0.3}
          color={theme === 'dark' ? '#3b82f6' : '#3b82f6'}
          opacity={0.5}
        />

        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
