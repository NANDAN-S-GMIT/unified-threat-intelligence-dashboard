'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { osintPlatforms } from '../utils/osintConfig';
import styles from './ToolToggle.module.css';

/**
 * Tool Toggle Component
 * Allows analysts to enable/disable specific OSINT sources
 */
export default function ToolToggle({ enabledTools, onToggle, isAnalyzing = false, currentType = '' }) {
    // Start collapsed - user can expand when needed
    const [isExpanded, setIsExpanded] = useState(false);

    // Sort platforms: compatible ones first, then others
    const sortedPlatforms = useMemo(() => {
        const entries = Object.entries(osintPlatforms);

        if (!currentType) {
            return entries; // No sorting if no type selected
        }

        // Separate compatible and incompatible platforms
        const compatible = [];
        const incompatible = [];

        entries.forEach(([key, platform]) => {
            if (platform.supportedTypes.includes(currentType)) {
                compatible.push([key, platform]);
            } else {
                incompatible.push([key, platform]);
            }
        });

        // Return compatible first, then incompatible
        return [...compatible, ...incompatible];
    }, [currentType]);

    return (
        <div className={styles.container}>
            <button
                className={styles.toggleButton}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span className={styles.icon}>⚙️</span>
                <div className={styles.buttonContent}>
                    <span>Configure OSINT Sources</span>
                    <motion.span
                        className={styles.helperText}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Click to add/remove tools
                    </motion.span>
                </div>
                <motion.span
                    className={styles.arrow}
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    ▶
                </motion.span>
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className={styles.toolList}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <motion.p
                            className={styles.instruction}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            {currentType
                                ? `Select OSINT platforms for ${currentType.toUpperCase()} analysis:`
                                : 'Select which OSINT platforms to query:'}
                        </motion.p>
                        {sortedPlatforms.map(([key, platform], index) => {
                            const isCompatible = currentType && platform.supportedTypes.includes(currentType);

                            return (
                                <motion.label
                                    key={key}
                                    className={`${styles.toolItem} ${isCompatible ? styles.compatible : styles.incompatible}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={enabledTools.includes(key)}
                                        onChange={() => onToggle(key)}
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.platformIcon}>{platform.icon}</span>
                                    <div className={styles.platformInfo}>
                                        <div className={styles.nameRow}>
                                            <span className={styles.platformName}>{platform.name}</span>
                                            {isCompatible && (
                                                <span className={styles.compatibleBadge}>✓ Compatible</span>
                                            )}
                                        </div>
                                        <span className={styles.supportedTypes}>
                                            Supports: {platform.supportedTypes.join(', ').toUpperCase()}
                                        </span>
                                    </div>
                                </motion.label>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
