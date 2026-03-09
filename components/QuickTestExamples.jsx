'use client';

import { motion } from 'framer-motion';
import styles from './QuickTestExamples.module.css';

/**
 * Quick Test Examples Component - Compact Version
 * Simple buttons for instant IOC testing
 */

const testExamples = {
    safe: [
        { icon: '🌐', label: 'IP Address', value: '8.8.8.8' },
        { icon: '🔗', label: 'URL', value: 'https://www.wikipedia.org' },
        { icon: '🌍', label: 'Domain', value: 'google.com' },
        { icon: '📄', label: 'File Hash', value: 'd41d8cd98f00b204e9800998ecf8427e' }
    ],
    malicious: [
        { icon: '🌐', label: 'IP Address', value: '185.220.101.182' },
        { icon: '🔗', label: 'URL', value: 'http://malware.wicar.org/data/eicar_com.zip' },
        { icon: '🌍', label: 'Domain', value: 'testphp.vulnweb.com' },
        { icon: '📄', label: 'File Hash', value: '44d88612fea8a8f36de82e1278abb02f' }
    ]
};

export default function QuickTestExamples({ onSelectExample }) {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <h3 className={styles.title}>⚡ Quick Test Examples</h3>

            {/* Safe Examples Row */}
            <div className={styles.row}>
                <span className={styles.rowLabel}>Safe</span>
                <div className={styles.buttons}>
                    {testExamples.safe.map((example, index) => (
                        <button
                            key={index}
                            onClick={() => onSelectExample(example.value)}
                            className={`${styles.button} ${styles.safe}`}
                            title={`Test with safe ${example.label.toLowerCase()}: ${example.value}`}
                        >
                            <span className={styles.icon}>{example.icon}</span>
                            <span className={styles.label}>{example.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Malicious Examples Row */}
            <div className={styles.row}>
                <span className={styles.rowLabel}>Malicious</span>
                <div className={styles.buttons}>
                    {testExamples.malicious.map((example, index) => (
                        <button
                            key={index}
                            onClick={() => onSelectExample(example.value)}
                            className={`${styles.button} ${styles.malicious}`}
                            title={`Test with malicious ${example.label.toLowerCase()}: ${example.value}`}
                        >
                            <span className={styles.icon}>{example.icon}</span>
                            <span className={styles.label}>{example.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
