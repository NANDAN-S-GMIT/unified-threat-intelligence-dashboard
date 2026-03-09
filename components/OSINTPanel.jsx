'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import styles from './OSINTPanel.module.css';

/**
 * OSINT Platform Card Component
 * Direct link cards to OSINT platforms (no iframe embedding for security compliance)
 */
export default function OSINTPanel({ platform, ioc, iocType, isEnabled, index }) {
    const [platformURL, setPlatformURL] = useState('');

    useEffect(() => {
        // Build URL asynchronously
        const buildURL = async () => {
            try {
                const url = await platform.buildURL(ioc, iocType);
                setPlatformURL(url);
            } catch (error) {
                console.error('Error building platform URL:', error);
                setPlatformURL('#');
            }
        };

        buildURL();
    }, [platform, ioc, iocType]);

    if (!isEnabled) return null;

    const openInNewTab = () => {
        if (platformURL) {
            window.open(platformURL, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            className={styles.panel}
            onClick={openInNewTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className={styles.logoSection}>
                <Logo
                    domain={platform.hostname}
                    name={platform.name}
                    fallbackText={platform.logoText}
                    color={platform.logoColor}
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.name}>{platform.name}</h3>
                <p className={styles.description}>{platform.description}</p>

                <div className={styles.iocInfo}>
                    <span className={styles.label}>Analyzing:</span>
                    <code className={styles.iocValue}>{ioc}</code>
                </div>

                <div className={styles.footer}>
                    <span className={styles.typebadges}>
                        {platform.supportedTypes.map(type => (
                            <span key={type} className={styles.typeBadge}>{type.toUpperCase()}</span>
                        ))}
                    </span>
                    <button className={styles.analyzeButton}>
                        <span>Analyze →</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
