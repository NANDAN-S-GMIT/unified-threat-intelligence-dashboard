'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from '../components/Starfield';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import OSINTPanel from '../components/OSINTPanel';
import RecentSearches, { addToRecentSearches } from '../components/RecentSearches';
import ToolToggle from '../components/ToolToggle';
import { getCompatiblePlatforms, getDefaultPlatforms } from '../utils/osintConfig';
import styles from './page.module.css';

/**
 * Main Dashboard Page
 * Primary interface for SOC analysts to investigate IOCs
 */
export default function HomePage() {
    const [currentIOC, setCurrentIOC] = useState('');
    const [currentType, setCurrentType] = useState('');
    const [analyzing, setAnalyzing] = useState(false);
    const [enabledTools, setEnabledTools] = useState(getDefaultPlatforms());
    const [recentKey, setRecentKey] = useState(0);

    // Custom smooth scroll function for slower, more elegant scrolling
    const smoothScrollTo = (elementId, duration = 1500) => {
        const element = document.getElementById(elementId);
        if (!element) return;

        // Different offset for mobile vs desktop
        const isMobile = window.innerWidth <= 768;
        const offset = isMobile ? 100 : 125;
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    const handleAnalyze = (ioc, type, subtype) => {
        setCurrentIOC(ioc);
        setCurrentType(type);
        setAnalyzing(true);

        // Add to recent searches
        addToRecentSearches(ioc, type);
        setRecentKey(prev => prev + 1); // Force re-render of recent searches

        // Smooth scroll to Intelligence Report section
        setTimeout(() => {
            smoothScrollTo('results', 1500);
        }, 100);
    };

    const handleSelectRecent = (ioc, type) => {
        setCurrentIOC(ioc);
        setCurrentType(type);
        setAnalyzing(true);

        setTimeout(() => {
            smoothScrollTo('results', 1500);
        }, 100);
    };

    const toggleTool = (toolKey) => {
        setEnabledTools(prev => {
            if (prev.includes(toolKey)) {
                return prev.filter(t => t !== toolKey);
            } else {
                return [...prev, toolKey];
            }
        });
    };

    const compatiblePlatforms = analyzing
        ? getCompatiblePlatforms(currentType).filter(p => enabledTools.includes(p.key))
        : [];

    return (
        <div className={styles.container}>
            <Starfield />
            <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <main className={styles.main}>
                    {/* Hero Section */}
                    <motion.section
                        className={styles.hero}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>
                                Unified Threat Intelligence
                            </h1>
                            <p className={styles.heroSubtitle}>
                                One IOC. Multiple Intelligence Sources. Faster SOC Decisions.
                            </p>
                            <div className={styles.heroBadges}>
                                <span className={styles.badge}>🛡️ Professional SOC Tool</span>
                                <span className={styles.badge}>⚡ Real-Time Enrichment</span>
                                <span className={styles.badge}>🎯 Multi-Source Analysis</span>
                            </div>
                        </div>
                    </motion.section>

                    {/* Search Section */}
                    <motion.section
                        className={styles.searchSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <SearchBar onAnalyze={handleAnalyze} />

                        {/* Recent Searches */}
                        <RecentSearches key={recentKey} onSelectIOC={handleSelectRecent} />
                    </motion.section>

                    {/* Tool Configuration */}
                    <AnimatePresence>
                        {!analyzing && (
                            <motion.section
                                className={styles.configSection}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <ToolToggle enabledTools={enabledTools} onToggle={toggleTool} />
                            </motion.section>
                        )}
                    </AnimatePresence>

                    {/* Results Section */}
                    <AnimatePresence>
                        {analyzing && (
                            <motion.section
                                id="results"
                                className={styles.resultsSection}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className={styles.resultsHeader}>
                                    <div>
                                        <h2 className={styles.resultsTitle}>
                                            Intelligence Report: <code>{currentIOC}</code>
                                        </h2>
                                        <p className={styles.resultsSubtitle}>
                                            Type: <strong>{currentType.toUpperCase()}</strong> •
                                            Active Sources: <strong>{compatiblePlatforms.length}</strong>
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setAnalyzing(false)}
                                        className={styles.newSearchButton}
                                    >
                                        🔄 New Search
                                    </button>
                                </div>

                                {/* Tool Configuration in Results */}
                                <div id="tool-config" style={{ margin: '2rem 0' }}>
                                    <ToolToggle
                                        enabledTools={enabledTools}
                                        onToggle={toggleTool}
                                        isAnalyzing={analyzing}
                                        currentType={currentType}
                                    />
                                </div>

                                {/* OSINT Panels */}
                                <div className={styles.panelsGrid}>
                                    {compatiblePlatforms.length > 0 ? (
                                        compatiblePlatforms.map((platform, index) => (
                                            <OSINTPanel
                                                key={platform.key}
                                                platform={platform}
                                                ioc={currentIOC}
                                                iocType={currentType}
                                                isEnabled={enabledTools.includes(platform.key)}
                                                index={index}
                                            />
                                        ))
                                    ) : (
                                        <div className={styles.noPlatforms}>
                                            <p className={styles.noPlatformsIcon}>⚠️</p>
                                            <h3>No Compatible Platforms</h3>
                                            <p>
                                                No OSINT platforms are enabled or compatible with this IOC type.
                                                Please enable at least one platform above.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.section>
                        )}
                    </AnimatePresence>

                    {/* Info Section */}
                    {!analyzing && (
                        <motion.section
                            className={styles.infoSection}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className={styles.infoGrid}>
                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>🎯</span>
                                    <h3>All Your Tools, One Place</h3>
                                    <p>
                                        Instead of opening 10 different websites to check an IP or URL,
                                        get everything here. One search, all results.
                                    </p>
                                </div>
                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>⚡</span>
                                    <h3>Built for Speed</h3>
                                    <p>
                                        What takes SOC analysts 5-10 minutes of tab-switching
                                        happens in seconds. Analyze threats fast.
                                    </p>
                                </div>
                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>🔍</span>
                                    <h3>Smart Type Detection</h3>
                                    <p>
                                        Just paste what you've got IP, domain, hash, or URL.
                                        The system figures out what it is automatically.
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    )}
                </main>
                <Footer />
            </div>
        </div>
    );
}
