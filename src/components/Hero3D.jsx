import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Reusable floater wrapper ─── */
function Floater({ children, position, rotSpeed = [0.002, 0.003], bobSpeed = 0.4, bobRange = 0.5 }) {
  const ref = useRef();
  const baseY = position[1];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!ref.current) return;
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.position.y = baseY + Math.sin(t * bobSpeed) * bobRange;
  });

  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

/* ─── Database Cylinder ─── */
function DatabaseShape({ position }) {
  return (
    <Floater position={position} rotSpeed={[0.003, 0.002]} bobSpeed={0.35} bobRange={0.6}>
      <mesh>
        <cylinderGeometry args={[0.7, 0.7, 1.2, 32, 1, true]} />
        <meshStandardMaterial color="#0c4a6e" emissive="#0ea5e9" emissiveIntensity={0.4} metalness={0.9} roughness={0.2} transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.06, 32]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#38bdf8" emissiveIntensity={0.6} metalness={0.8} roughness={0.2} transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.06, 32]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#38bdf8" emissiveIntensity={0.4} metalness={0.8} roughness={0.2} transparent opacity={0.4} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.74, 0.74, 1.25, 12, 3, true]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.2} />
      </mesh>
    </Floater>
  );
}

/* ─── Docker / Container Box ─── */
function ContainerBox({ position }) {
  return (
    <Floater position={position} rotSpeed={[0.002, 0.004]} bobSpeed={0.5} bobRange={0.4}>
      <mesh>
        <boxGeometry args={[1.2, 0.8, 0.8]} />
        <meshStandardMaterial color="#0c4a6e" emissive="#0ea5e9" emissiveIntensity={0.3} metalness={0.9} roughness={0.2} transparent opacity={0.5} />
      </mesh>
      <mesh scale={1.02}>
        <boxGeometry args={[1.2, 0.8, 0.8]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.25} />
      </mesh>
      <mesh position={[0, 0.41, 0]}>
        <boxGeometry args={[1.22, 0.03, 0.82]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.6} />
      </mesh>
    </Floater>
  );
}

/* ─── Server Rack (stacked units) ─── */
function ServerNode({ position }) {
  return (
    <Floater position={position} rotSpeed={[0.001, 0.002]} bobSpeed={0.45} bobRange={0.35}>
      <group>
        {[0.45, 0, -0.45].map((y, i) => (
          <group key={i}>
            <mesh position={[0, y, 0]}>
              <boxGeometry args={[1.4, 0.35, 0.6]} />
              <meshStandardMaterial color="#0c4a6e" emissive="#0ea5e9" emissiveIntensity={0.25} metalness={0.9} roughness={0.2} transparent opacity={0.45} />
            </mesh>
            <mesh position={[0.55, y, 0.31]}>
              <sphereGeometry args={[0.04, 12, 12]} />
              <meshBasicMaterial color="#22d3ee" />
            </mesh>
          </group>
        ))}
        <mesh>
          <boxGeometry args={[1.45, 1.4, 0.65]} />
          <meshBasicMaterial color="#0284c7" wireframe transparent opacity={0.15} />
        </mesh>
      </group>
    </Floater>
  );
}

/* ─── Torus (represents cycles / pipelines) ─── */
function PipelineRing({ position, scale = 1 }) {
  return (
    <Floater position={position} rotSpeed={[0.004, 0.002]} bobSpeed={0.4} bobRange={0.5}>
      <mesh scale={scale}>
        <torusGeometry args={[0.8, 0.15, 16, 48]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.3} />
      </mesh>
    </Floater>
  );
}

/* ─── API Node sphere ─── */
function NodeSphere({ position, color = '#38bdf8', size = 0.3 }) {
  return (
    <Floater position={position} rotSpeed={[0.005, 0.003]} bobSpeed={0.6} bobRange={0.3}>
      <mesh>
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial color="#0c4a6e" emissive={color} emissiveIntensity={0.5} metalness={0.9} roughness={0.1} transparent opacity={0.4} />
      </mesh>
      <mesh scale={1.4}>
        <icosahedronGeometry args={[size, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
      </mesh>
    </Floater>
  );
}

/* ─── Full Scene ─── */
function Scene() {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(t / 10) * 0.12;
    groupRef.current.rotation.x = Math.cos(t / 12) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Top-right corner area */}
      <DatabaseShape position={[9, 3.8, -7]} />
      <NodeSphere position={[3, 5, -9]} color="#7dd3fc" size={0.25} />

      {/* Far right edge */}
      <ServerNode position={[0, 0, -8]} />
      <NodeSphere position={[11, -2, -6]} color="#0ea5e9" size={0.2} />

      {/* Bottom-right corner area */}
      <ContainerBox position={[7, -2.9, -6]} />
      <PipelineRing position={[4, -5, -8]} scale={0.9} />

      {/* Bottom-center-right (below terminal) */}
      <PipelineRing position={[3, -4.5, -7]} scale={0.7} />
      <NodeSphere position={[11, -2.5, -5]} color="#22d3ee" size={0.28} />

      {/* Top-center-right (above terminal) */}
      <NodeSphere position={[2, 4.5, -10]} color="#bae6fd" size={0.18} />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 bg-[var(--color-graphite)]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#e0f2fe" />
        <pointLight position={[-5, -3, 4]} intensity={1} color="#38bdf8" />
        <Scene />
      </Canvas>
    </div>
  );
}
