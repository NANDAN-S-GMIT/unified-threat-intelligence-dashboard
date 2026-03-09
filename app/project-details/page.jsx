import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './project-details.module.css';

/**
 * Project Details Page
 * Comprehensive professional documentation about UTID
 */
export default function ProjectDetailsPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Page Header */}
                    <header className={styles.pageHeader}>
                        <h1 className={styles.pageTitle}>Project Details</h1>
                        <p className={styles.pageSubtitle}>
                            Understanding the Unified Threat Intelligence Dashboard
                        </p>
                        <p className={styles.pageIntro}>
                            This page provides comprehensive documentation about UTID, a professional SOC-focused
                            web application that demonstrates real-world threat intelligence workflows. Whether
                            you're a hiring manager, SOC analyst, or fellow developer, this guide will help you
                            understand the project's purpose, capabilities, and technical implementation.
                        </p>
                    </header>

                    {/* What is UTID */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.icon}>🎯</span>
                            What is the Unified Threat Intelligence Dashboard?
                        </h2>
                        <p className={styles.text}>
                            The <strong>Unified Threat Intelligence Dashboard (UTID)</strong> is a professional,
                            SOC-focused web application that streamlines the process of enriching
                            <strong> Indicators of Compromise (IOCs)</strong> by aggregating intelligence from
                            multiple OSINT sources into a single, unified interface.
                        </p>
                        <p className={styles.text}>
                            Built with modern web technologies, UTID demonstrates real-world SOC analyst workflows
                            and showcases how threat intelligence platforms can improve operational efficiency in
                            Security Operations Centers.
                        </p>
                    </section>

                    {/* Why SOC Analysts Need This */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.icon}>🚨</span>
                            Why SOC Analysts Need This Tool
                        </h2>
                        <div className={styles.problemSolution}>
                            <div className={styles.problemBox}>
                                <h3 className={styles.boxTitle}>❌ The Problem</h3>
                                <ul className={styles.list}>
                                    <li>SOC analysts waste 5-10 minutes per IOC investigation</li>
                                    <li>Manually switching between 8+ different OSINT websites</li>
                                    <li>Copying/pasting the same IOC repeatedly</li>
                                    <li>Context switching reduces focus and increases errors</li>
                                    <li>No centralized view of all intelligence sources</li>
                                </ul>
                            </div>
                            <div className={styles.solutionBox}>
                                <h3 className={styles.boxTitle}>✅ The Solution</h3>
                                <ul className={styles.list}>
                                    <li>Investigate IOCs in under 30 seconds</li>
                                    <li>Query all OSINT sources from one interface</li>
                                    <li>Enter IOC once, analyze everywhere</li>
                                    <li>Maintain focus with unified dashboard</li>
                                    <li>Side-by-side comparison of all results</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Supported IOC Types */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.icon}>🔍</span>
                            Supported IOC Types
                        </h2>
                        <div className={styles.iocGrid}>
                            <div className={styles.iocCard}>
                                <span className={styles.iocIcon}>🌐</span>
                                <h3>IP Addresses</h3>
                                <p>IPv4 addresses for malicious server identification</p>
                                <code>Example: 8.8.8.8</code>
                            </div>
                            <div className={styles.iocCard}>
                                <span className={styles.iocIcon}>🔗</span>
                                <h3>URLs</h3>
                                <p>Full web addresses for phishing and malware sites</p>
                                <code>Example: https://malicious-site.com</code>
                            </div>
                            <div className={styles.iocCard}>
                                <span className={styles.iocIcon}>🌍</span>
                                <h3>Domains</h3>
                                <p>Domain names used in cyber attacks</p>
                                <code>Example: evil-domain.xyz</code>
                            </div>
                            <div className={styles.iocCard}>
                                <span className={styles.iocIcon}>📄</span>
                                <h3>File Hashes</h3>
                                <p>MD5, SHA1, SHA256 hashes for malware identification</p>
                                <code>Example: 5d41402abc4b2a76...</code>
                            </div>
                        </div>
                    </section>

                    {/* SOC Workflow Impact */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.icon}>⚡</span>
                            How This Improves SOC Triage Speed
                        </h2>
                        <div className={styles.workflow}>
                            <div className={styles.workflowStep}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h4>Traditional Workflow</h4>
                                    <p>Open VirusTotal → paste IOC → wait → Open AbuseIPDB → paste again → wait →
                                        Open Talos → repeat... <strong>10+ minutes per IOC</strong></p>
                                </div>
                            </div>
                            <div className={styles.arrow}>↓</div>
                            <div className={styles.workflowStep}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h4>UTID Workflow</h4>
                                    <p>Paste IOC once → Click "Analyze" → View all sources simultaneously →
                                        Make decision. <strong>Under 30 seconds!</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>95%</span>
                                <span className={styles.statLabel}>Time Reduction</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>8+</span>
                                <span className={styles.statLabel}>OSINT Sources</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>1</span>
                                <span className={styles.statLabel}>Unified Interface</span>
                            </div>
                        </div>
                    </section>

                    {/* Limitations */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.icon}>⚠️</span>
                            Current Limitations
                        </h2>
                        <div className={styles.alertBox}>
                            <h3 className={styles.alertTitle}>🎓 Educational Proof of Concept</h3>
                            <p className={styles.text}>
                                This project is built for educational and portfolio purposes to demonstrate
                                SOC analyst workflows and full-stack development skills. It showcases how
                                threat intelligence platforms can improve operational efficiency in Security
                                Operations Centers.
                            </p>
                        </div>
                        <ul className={styles.limitationsList}>
                            <li><strong>No API Integration:</strong> Uses iframe embedding instead of direct API calls</li>
                            <li><strong>Platform Restrictions:</strong> Some OSINT platforms restrict iframe embedding</li>
                            <li><strong>No Data Aggregation:</strong> Results aren't parsed or aggregated automatically</li>
                            <li><strong>Manual Analysis:</strong> Analysts must review each source manually</li>
                            <li><strong>No Automated Scoring:</strong> No threat score calculation or verdicts</li>
                        </ul>
                    </section>

                    {/* Future Enhancements */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.icon}>🚀</span>
                            Future Enhancements
                        </h2>
                        <p className={styles.text}>
                            With proper API access and backend infrastructure, this platform could evolve into
                            a production-grade SOC tool with the following capabilities:
                        </p>
                        <div className={styles.enhancementsGrid}>
                            <div className={styles.enhancementCard}>
                                <h4>🔌 API-Based Enrichment</h4>
                                <p>Direct API integration with VirusTotal, AlienVault OTX, and other platforms
                                    for automated data retrieval and parsing.</p>
                            </div>
                            <div className={styles.enhancementCard}>
                                <h4>🤖 SOAR Integration</h4>
                                <p>Connect with Security Orchestration platforms like Splunk SOAR, Cortex XSOAR
                                    for automated playbook execution.</p>
                            </div>
                            <div className={styles.enhancementCard}>
                                <h4>📊 SIEM Integration</h4>
                                <p>Push enriched intelligence back to SIEM platforms (Splunk, QRadar, Sentinel)
                                    for correlation and alerting.</p>
                            </div>
                            <div className={styles.enhancementCard}>
                                <h4>🎯 Automated Scoring</h4>
                                <p>Machine learning-based threat scoring combining verdicts from all sources
                                    into a single confidence score.</p>
                            </div>
                            <div className={styles.enhancementCard}>
                                <h4>📝 Case Management</h4>
                                <p>Built-in incident tracking with investigation notes, timeline tracking,
                                    and analyst collaboration features.</p>
                            </div>
                            <div className={styles.enhancementCard}>
                                <h4>📈 Historical Analytics</h4>
                                <p>Track IOC trends, repeated indicators, and campaign correlation across time
                                    for threat hunting.</p>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.icon}>💻</span>
                            Technology Stack
                        </h2>
                        <div className={styles.techStack}>
                            <div className={styles.techItem}>
                                <strong>Frontend:</strong> React 18 with Next.js 14 (App Router)
                            </div>
                            <div className={styles.techItem}>
                                <strong>Styling:</strong> Vanilla CSS with CSS Modules
                            </div>
                            <div className={styles.techItem}>
                                <strong>State Management:</strong> React Hooks (useState, useEffect)
                            </div>
                            <div className={styles.techItem}>
                                <strong>Storage:</strong> Browser localStorage for recent searches
                            </div>
                            <div className={styles.techItem}>
                                <strong>Architecture:</strong> Component-based, modular design
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Ready to investigate IOCs?</h2>
                        <p className={styles.ctaText}>
                            Head to the dashboard and start analyzing threat intelligence from multiple sources.
                        </p>
                        <a href="/" className={styles.ctaButton}>
                            🎯 Go to Dashboard
                        </a>
                    </section>

                    {/* Creator & Notice Section */}
                    <section className={styles.creatorSection}>
                        <div className={styles.creatorGrid}>
                            {/* Creator Info */}
                            <div className={styles.creatorCard}>
                                <div className={styles.creatorHeader}>
                                    <div className={styles.avatar}>
                                        <img
                                            src="https://nandan-s.netlify.app/assets/Nandan-DiBblBZy.jpg"
                                            alt="Nandan S"
                                        />
                                    </div>
                                    <div className={styles.creatorInfo}>
                                        <h3 className={styles.creatorName}>Hi, I'm Nandan S</h3>
                                        <p className={styles.creatorRole}>Aspiring SOC Analyst (L1)</p>
                                        <p className={styles.creatorSubtitle}>
                                            Cybersecurity Analyst | Full Stack Developer
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.creatorBio}>
                                    <p>
                                        Aspiring SOC Analyst (L1) with structured training and guided hands-on experience
                                        in Cybersecurity Analysis, SOC operations, SIEM-based alert monitoring, initial
                                        incident investigation, and security event analysis. Trained on SIEM, EDR, threat
                                        intelligence, and ticketing tools through lab-based scenarios and instructor-led
                                        demonstrations, with a clear understanding of how alerts are analyzed, validated,
                                        documented, and escalated within a SOC environment.
                                    </p>
                                    <p>
                                        I also bring prior internship experience in full-stack application development,
                                        which helps me better understand application behavior and logs. I built this
                                        Unified Threat Intelligence Dashboard to demonstrate my understanding of SOC
                                        analyst workflows and my ability to create professional security tools.
                                    </p>
                                    <p>
                                        I am actively seeking an SOC Analyst L1 role to continue learning and support
                                        blue team operations, combining my cybersecurity training with my technical
                                        development background.
                                    </p>
                                </div>
                                {/* <div className={styles.skillsTags}>
                                    <span className={styles.skillTag}>SIEM Operations</span>
                                    <span className={styles.skillTag}>Threat Intelligence</span>
                                    <span className={styles.skillTag}>IOC Analysis</span>
                                    <span className={styles.skillTag}>Incident Response</span>
                                    <span className={styles.skillTag}>EDR Tools</span>
                                    <span className={styles.skillTag}>React/Next.js</span>
                                </div> */}
                            </div>

                            {/* Important Notice */}
                            <div className={styles.noticeCard}>
                                <h3 className={styles.noticeTitle}>
                                    <span className={styles.noticeIcon}>⚖️</span>
                                    Important Notice
                                </h3>
                                <ul className={styles.noticeList}>
                                    <li>
                                        <strong>Educational Purpose:</strong> This project is built for educational
                                        and portfolio demonstration purposes only.
                                    </li>
                                    <li>
                                        <strong>No Scraping:</strong> This tool does not scrape, store, or misuse
                                        data from OSINT platforms.
                                    </li>
                                    <li>
                                        <strong>Terms of Service:</strong> All OSINT platform integrations respect
                                        their respective Terms of Service.
                                    </li>
                                    <li>
                                        <strong>No Warranty:</strong> This software is provided "as-is" without any
                                        warranty or guarantee of accuracy.
                                    </li>
                                    <li>
                                        <strong>Not for Production:</strong> This is a proof-of-concept and should
                                        not be used in production SOC environments.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
