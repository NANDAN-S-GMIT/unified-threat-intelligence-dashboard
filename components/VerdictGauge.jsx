'use client';

import { motion } from 'framer-motion';

export default function VerdictGauge({ score, verdict }) {
    const getColor = () => {
        if (verdict === 'MALICIOUS') return '#ff2a2a'; // Red
        if (verdict === 'SUSPICIOUS') return '#ffb800'; // Amber
        return '#00ff9d'; // Green
    };

    const color = getColor();
    const circumference = 2 * Math.PI * 45; // Radius 45
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto' }}>
            {/* Background Circle */}
            <svg width="200" height="200" style={{ transform: 'rotate(-90deg)' }}>
                <circle
                    cx="100"
                    cy="100"
                    r="45"
                    stroke="#1a1a1a"
                    strokeWidth="10"
                    fill="transparent"
                />
                {/* Animated Progress Circle */}
                <motion.circle
                    cx="100"
                    cy="100"
                    r="45"
                    stroke={color}
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round"
                />
            </svg>

            {/* Center Text */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: color }}>
                        {score}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Risk Score
                    </div>
                </motion.div>
            </div>

            {/* Verdict Badge */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                style={{
                    textAlign: 'center',
                    marginTop: '-20px',
                    color: color,
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    textShadow: `0 0 10px ${color}40`
                }}
            >
                {verdict}
            </motion.div>
        </div>
    );
}
