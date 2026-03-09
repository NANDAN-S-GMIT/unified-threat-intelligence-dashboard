'use client';

import { useState, useEffect } from 'react';
import { detectIOCType, getIOCTypeDescription } from '../utils/iocDetector';
import styles from './SearchBar.module.css';

/**
 * Universal IOC Search Component
 * Auto-detects IOC type and initiates multi-source analysis
 */
export default function SearchBar({ onAnalyze }) {
    const [ioc, setIOC] = useState('');
    const [detectedType, setDetectedType] = useState(null);
    const [copied, setCopied] = useState(false);

    // Auto-detect IOC type as user types
    useEffect(() => {
        if (ioc.trim()) {
            const detection = detectIOCType(ioc.trim());
            setDetectedType(detection);
        } else {
            setDetectedType(null);
        }
    }, [ioc]);

    const handleAnalyze = () => {
        if (ioc.trim() && detectedType && detectedType.confidence >= 70) {
            onAnalyze(ioc.trim(), detectedType.type, detectedType.subtype);
        }
    };

    const handleKeyPress = (e) => {
        // Support both Enter and Ctrl+Enter for quick analysis
        if (e.key === 'Enter' && (e.ctrlKey || !e.ctrlKey)) {
            handleAnalyze();
        }
    };

    const copyIOC = async () => {
        if (ioc.trim()) {
            try {
                await navigator.clipboard.writeText(ioc.trim());
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <div className={styles.inputWrapper}>
                    <span className={styles.searchIcon}>🔍</span>
                    <input
                        type="text"
                        value={ioc}
                        onChange={(e) => setIOC(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter IOC: IP, URL, Domain, or File Hash..."
                        className={styles.searchInput}
                    />
                    {ioc && (
                        <button
                            onClick={copyIOC}
                            className={styles.copyButton}
                            title="Copy IOC"
                        >
                            {copied ? '✓' : '📋'}
                        </button>
                    )}
                </div>

                {/* IOC Type Detection Badge */}
                {detectedType && detectedType.confidence >= 70 && (
                    <div className={styles.detectionBadge}>
                        <span className={styles.badgeIcon}>🎯</span>
                        <span className={styles.badgeText}>
                            Detected: <strong>{getIOCTypeDescription(detectedType.type)}</strong>
                            {detectedType.subtype && ` (${detectedType.subtype})`}
                        </span>
                        <span className={styles.confidenceBadge}>
                            {detectedType.confidence}% confidence
                        </span>
                    </div>
                )}

                {/* Analyze Button */}
                <button
                    onClick={handleAnalyze}
                    disabled={!ioc.trim() || !detectedType || detectedType.confidence < 70}
                    className={styles.analyzeButton}
                >
                    <span className={styles.buttonIcon}>⚡</span>
                    Analyze IOC
                </button>
            </div>

            {/* Quick Test Examples */}
            <div className={styles.quickTest}>
                <p className={styles.quickTestTitle}>⚡ Quick Test</p>
                <div className={styles.testButtons}>
                    <button onClick={() => setIOC('1.1.1.1')} className={`${styles.testBtn} ${styles.safe}`}>
                        🌐 IP1
                    </button>
                    <button onClick={() => setIOC('185.220.101.182')} className={`${styles.testBtn} ${styles.malicious}`}>
                        🌐 IP2
                    </button>
                    <button onClick={() => setIOC('www.google.com')} className={`${styles.testBtn} ${styles.safe}`}>
                        🔗 URL1
                    </button>
                    <button onClick={() => setIOC('http://malware.wicar.org/data/eicar_com.zip')} className={`${styles.testBtn} ${styles.malicious}`}>
                        🔗 URL2
                    </button>
                    <button onClick={() => setIOC('microsoft.com')} className={`${styles.testBtn} ${styles.safe}`}>
                        🌍 Domain1
                    </button>
                    <button onClick={() => setIOC('malware.wicar.org')} className={`${styles.testBtn} ${styles.malicious}`}>
                        🌍 Domain2
                    </button>
                    <button onClick={() => setIOC('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')} className={`${styles.testBtn} ${styles.safe}`}>
                        📄 Hash1
                    </button>
                    <button onClick={() => setIOC('275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f')} className={`${styles.testBtn} ${styles.malicious}`}>
                        📄 Hash2
                    </button>
                </div>
            </div>
        </div>
    );
}
