'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';

export default function IntelligenceCard({ source, index }) {
    const isMalicious = source.score > 70 || source.verdict === 'malicious';
    const isSuspicious = source.score > 30 && source.score <= 70 || source.verdict === 'suspicious';

    let statusColor = 'var(--success)';
    if (isMalicious) statusColor = 'var(--error)';
    else if (isSuspicious) statusColor = 'var(--warning)';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Status Bar Indicator */}
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                backgroundColor: statusColor,
                boxShadow: `0 0 10px ${statusColor}`
            }} />

            <div style={{ flexShrink: 0 }}>
                <Logo domain={source.name + ".com"} name={source.name} />
            </div>

            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                        {source.name.charAt(0).toUpperCase() + source.name.slice(1)}
                    </h3>
                    <span style={{
                        color: statusColor,
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        border: `1px solid ${statusColor}40`,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: `${statusColor}10`
                    }}>
                        {source.verdict?.toUpperCase() || 'CLEAN'}
                    </span>
                </div>

                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {source.summary}
                </p>

                {/* Data Tags */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {source.data.tags && source.data.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.75rem',
                            padding: '2px 6px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '4px',
                            color: 'var(--text-secondary)'
                        }}>
                            #{tag}
                        </span>
                    ))}
                    {source.data.countryCode && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            📍 {source.data.countryCode}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
