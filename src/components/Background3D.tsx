"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function AshParticles() {
    const ref = useRef<THREE.Points>(null);

    // Generate random positions for 3000 particles spread out in a sphere
    const positions = useMemo(() => {
        const count = 3000;
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Generate a random vector in a sphere
            const u = Math.random();
            const v = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * v - 1.0);
            const r = Math.cbrt(Math.random()) * 8;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
        }
        return pos;
    }, []);

    // Animate the particles
    useFrame((state, delta) => {
        if (ref.current) {
            // Slow rotation to simulate drifting ash/embers
            ref.current.rotation.y += delta / 15;
            ref.current.rotation.x += delta / 25;

            // Slight parallax effect bound to scroll or subtle mouse movement if desired
            // For now, consistent slow cosmic drifting fits the dark documentary vibe best.
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                // A muted, burning ember color to match the subtle red accents of the site
                color="#a52a2a"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.4}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

export default function Background3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                {/* Adds fog to the back so particles fade into the abyss */}
                <fog attach="fog" args={["#000000", 3, 8]} />
                <AshParticles />
            </Canvas>
        </div>
    );
}
