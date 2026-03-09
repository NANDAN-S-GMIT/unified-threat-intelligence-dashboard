'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

/**
 * Professional SOC Dashboard Header
 * Fixed navigation with project branding and quick access to key pages
 */
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo and Brand */}
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.brandText}>
                            <h1 className={styles.projectName}>Unified Threat Intelligence Dashboard</h1>
                            <p className={styles.tagline}>One IOC. Multiple Sources. Faster Decisions.</p>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>
                        Dashboard
                    </Link>
                    <Link href="/project-details" className={styles.navLink}>
                        Project Details
                    </Link>
                    <Link href="/about" className={styles.navLink}>
                        About Creator
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className={styles.mobileNav}>
                    <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                        Dashboard
                    </Link>
                    <Link href="/project-details" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                        Project Details
                    </Link>
                    <Link href="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                        About Creator
                    </Link>
                </div>
            )}
        </header>
    );
}
