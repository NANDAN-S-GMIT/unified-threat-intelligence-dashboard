import styles from './Footer.module.css';

/**
 * Professional SOC Dashboard Footer
 * Contains creator attribution, disclaimer, and project information
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Creator Information */}
                <div className={styles.creatorSection}>
                    <h3 className={styles.creatorName}>Nandan S</h3>
                    <p className={styles.creatorRole}>Cyber Security Analyst Trainee</p>
                    <p className={styles.creatorTitle}>Aspiring SOC Analyst | Full-Stack Developer</p>
                </div>

                {/* Divider */}
                {/* <div className={styles.divider}></div> */}

                {/* Project Information */}
                <div className={styles.projectSection}>
                    <p className={styles.disclaimer}>
                        This project is a <strong>created for
                            educational</strong> and SOC workflow demonstration purposes.
                    </p>
                    <p className={styles.statement}>
                        Designed to showcase modern threat intelligence enrichment workflows used by
                        professional Security Operations Centers.
                    </p>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Disclaimers */}
                <div className={styles.disclaimerSection}>
                    <h4 className={styles.disclaimerTitle}>⚠️ Important Notice</h4>
                    <p className={styles.disclaimerText}>
                        This tool is built for <strong>educational purposes only</strong>.
                        It does not scrape, store, or misuse data it simply provides direct links to publicly available
                        OSINT platforms. Users must comply with each platform's Terms of Service. This dashboard is provided
                        "as-is" without warranty and should not replace professional threat intelligence solutions.
                        Use at your own discretion for learning and analytical purposes only.
                    </p>
                </div>

                {/* Copyright */}
                <div className={styles.copyright}>
                    <p>© {currentYear} Nandan S. All rights reserved.</p>
                    {/* <p className={styles.tech}>Built with Next.js & React for Educational Purposes</p> */}
                </div>
            </div>
        </footer>
    );
}
