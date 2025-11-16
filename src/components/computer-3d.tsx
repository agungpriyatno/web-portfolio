"use client";

import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function ComputerModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/3d/computer-3d.glb");

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle floating animation
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

      // Rotation kanan-kiri 90 derajat (±45 derajat dari tengah)
      // Menggunakan Math.sin untuk smooth oscillation
      const rotationRange = Math.PI / 4; // 45 derajat (total 90° swing)
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.4) * rotationRange;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.7} position={[0, -0.8, 0]} />
    </group>
  );
}

// Preload the model
useGLTF.preload("/3d/computer-3d.glb");

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Animated 3D Cube Loader */}
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 border-4 border-primary/30 rounded-lg"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-primary/60 rounded-lg"
            animate={{
              rotateX: [360, 0],
              rotateY: [360, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          />
          <motion.div
            className="absolute inset-4 bg-primary rounded-lg"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-sm font-medium text-foreground">
            Loading 3D Model
          </span>
          <motion.span
            className="flex gap-1"
            initial="hidden"
            animate="visible"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-32 h-1 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-linear-to-r from-primary/50 via-primary to-primary/50"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </Html>
  );
}

export function Computer3D() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading overlay after model loads
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative">
      {/* Overlay Loading State */}

      <Canvas>
        <Suspense fallback={<Loader />}>
          <PerspectiveCamera makeDefault position={[0, 1, 6]} fov={45} />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, 5, -5]} intensity={0.5} />
          <pointLight position={[0, 3, 2]} intensity={0.8} color="#3b82f6" />
          <spotLight
            position={[0, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            castShadow
          />

          {/* 3D Model */}
          <ComputerModel />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
