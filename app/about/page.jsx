'use client';

import { motion } from 'framer-motion';
import Starfield from '../../components/Starfield';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './about.module.css';

export default function AboutPage() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={styles.pageWrapper}>
            <Starfield />
            <div className={styles.contentWrapper}>
                <Header />

                <main className={styles.main}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className={styles.container}
                    >
                        {/* 1️⃣ PROFILE HERO SECTION - Two Column Layout */}
                        <motion.section variants={itemVariants} className={styles.heroSection}>
                            <div className={styles.heroTwoColumn}>
                                {/* LEFT SIDE - Profile Card */}
                                <div className={styles.profileCard}>
                                    {/* Profile Photo */}
                                    <div className={styles.profilePhotoContainer}>
                                        <div className={styles.profilePhotoFrame}>
                                            <div className={styles.photoGlow}></div>
                                            <img
                                                src="https://nandan-s.netlify.app/assets/Nandan-DiBblBZy.jpg"
                                                alt="Nandan S - SOC Analyst & Full Stack Developer"
                                                className={styles.profilePhoto}
                                            />
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h1 className={styles.profileName}>Nandan S</h1>

                                    {/* Email */}
                                    {/* <a href="mailto:nandan.siddappa@gmail.com" className={styles.emailBadge}>
                                        <svg className={styles.emailIcon} viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                        nandan.siddappa@gmail.com
                                    </a> */}

                                    {/* Title */}
                                    <p className={styles.profileTitle}>Cybersecurity Analyst Trainee</p>

                                    {/* Social Links with Colored Backgrounds */}
                                    <div className={styles.socialLinksCompact}>
                                        <a
                                            href="https://www.linkedin.com/in/nandan-s-/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialButtonLinkedIn}
                                            aria-label="LinkedIn"
                                            title="LinkedIn"
                                        >
                                            <span className={styles.iconText}>in</span>
                                        </a>

                                        <a
                                            href="https://github.com/NANDAN-S-GMIT"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialButtonGitHub}
                                            aria-label="GitHub"
                                            title="GitHub"
                                        >
                                            <img src="https://img.icons8.com/material-sharp/24/github.png" alt="GitHub" className={styles.iconImage} />
                                        </a>

                                        <a
                                            href="https://nandan-s.netlify.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialButtonPortfolio}
                                            aria-label="Portfolio"
                                            title="Portfolio"
                                        >
                                            <span className={styles.iconText}>🌐</span>
                                        </a>

                                        <a
                                            href="mailto:nandan.siddappa@gmail.com"
                                            className={styles.socialButtonEmail}
                                            aria-label="Email"
                                            title="Email"
                                        >
                                            <span className={styles.iconText}>✉</span>
                                        </a>
                                    </div>

                                    {/* Resume Buttons */}
                                    <div className={styles.resumeButtonsVertical}>
                                        <a
                                            href="https://drive.google.com/file/d/1crjOZHa0XKE7322yoaaCYZtKN2WmnokB/view?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.resumeButton}
                                        >
                                            <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                            </svg>
                                            SOC Analyst Resume
                                        </a>
                                        <a
                                            href="https://drive.google.com/file/d/1jyWtYobRaczOQRGd7jDO-cs5ZfxTEPHS/view?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.resumeButtonAlt}
                                        >
                                            <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                            </svg>
                                            Full Stack Developer Resume
                                        </a>
                                    </div>
                                </div>

                                {/* RIGHT SIDE - About Me Content */}
                                <div className={styles.aboutMeCard}>
                                    {/* <h2 className={styles.aboutMeTitle}>About Me</h2> */}
                                    <div className={styles.aboutMeText}>
                                        <p>
                                            I am a recently Graduated as a<strong> Bachelor of Engineering in Computer Science (CSE)</strong> 2025 with a strong passion for cybersecurity and defensive security operations. I am currently undergoing comprehensive <strong>Cyber Security Analyst training</strong> (5+ months), focusing on SOC operations, threat intelligence, SIEM platforms, alert triage, and incident response workflows aligned with real-world Security Operations Center environments.
                                        </p>
                                        <p>
                                            Alongside my cybersecurity journey, I have a solid background in <strong>full-stack development</strong> with internship experience as a <strong>Full Stack Developer</strong> and <strong>Python Developer</strong>. This engineering foundation gives me a practical advantage in security I understand how applications are built, how data flows through systems, where vulnerabilities can arise, and how attackers may exploit them. It also enables me to build and understand security-focused tools that support analysts in day-to-day investigations.
                                        </p>
                                        <p>
                                            I approach every challenge with a <strong>structured and analytical mindset</strong> whether validating a security alert, analyzing IOCs using OSINT tools, learning a new SIEM platform. I am an <strong>aspiring SOC Analyst</strong> focused on Blue Team security, and through continuous learning and hands-on experience.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </motion.section>

                        {/* 3️⃣ SOC ANALYST SKILLS & TOOLS */}
                        <motion.section variants={itemVariants} className={styles.skillsSection}>
                            <h2 className={styles.sectionTitle}>SOC Analyst Skills & Tools</h2>
                            <div className={styles.skillsGrid}>
                                {/* SIEM & Security Platforms */}
                                <div className={styles.skillCategory}>
                                    <div className={styles.categoryHeader}>
                                        <span className={styles.categoryIcon}>🛡️</span>
                                        <h3 className={styles.categoryTitle}>SIEM & Security Platforms</h3>
                                    </div>
                                    <div className={styles.skillBadges}>
                                        <span className={styles.skillBadge}>Splunk Enterprise Security</span>
                                        <span className={styles.skillBadge}>Google Chronicle (SecOps)</span>
                                        <span className={styles.skillBadge}>IBM QRadar</span>
                                        <span className={styles.skillBadge}>Microsoft 365 Defender</span>
                                        <span className={styles.skillBadge}>CrowdStrike Falcon EDR</span>
                                    </div>
                                </div>

                                {/* Network & Endpoint Security */}
                                <div className={styles.skillCategory}>
                                    <div className={styles.categoryHeader}>
                                        <span className={styles.categoryIcon}>🔒</span>
                                        <h3 className={styles.categoryTitle}>Network & Endpoint Security</h3>
                                    </div>
                                    <div className={styles.skillBadges}>
                                        <span className={styles.skillBadge}>Snort IDS/IPS</span>
                                        <span className={styles.skillBadge}>Wireshark</span>
                                        <span className={styles.skillBadge}>Palo Alto Networks</span>
                                        <span className={styles.skillBadge}>Cloudflare WAF</span>
                                        <span className={styles.skillBadge}>Microsoft Entra ID</span>
                                    </div>
                                </div>

                                {/* Threat Intelligence & OSINT */}
                                <div className={styles.skillCategory}>
                                    <div className={styles.categoryHeader}>
                                        <span className={styles.categoryIcon}>🔍</span>
                                        <h3 className={styles.categoryTitle}>Threat Intelligence & OSINT</h3>
                                    </div>
                                    <div className={styles.skillBadges}>
                                        <span className={styles.skillBadge}>VirusTotal</span>
                                        <span className={styles.skillBadge}>AbuseIPDB</span>
                                        <span className={styles.skillBadge}>Cisco Talos</span>
                                        <span className={styles.skillBadge}>ANY.RUN Sandbox</span>
                                        <span className={styles.skillBadge}>URLScan.io</span>
                                    </div>
                                </div>

                                {/* SOC Frameworks & Processes */}
                                <div className={styles.skillCategory}>
                                    <div className={styles.categoryHeader}>
                                        <span className={styles.categoryIcon}>📋</span>
                                        <h3 className={styles.categoryTitle}>SOC Frameworks & Processes</h3>
                                    </div>
                                    <div className={styles.skillBadges}>
                                        <span className={styles.skillBadge}>MITRE ATT&CK</span>
                                        <span className={styles.skillBadge}>Cyber Kill Chain</span>
                                        <span className={styles.skillBadge}>Incident Response</span>
                                        <span className={styles.skillBadge}>Alert Triage & Escalation</span>
                                        <span className={styles.skillBadge}>IOC Analysis</span>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* 4️⃣ FULL STACK DEVELOPMENT SKILLS */}
                        <motion.section variants={itemVariants} className={styles.skillsSection}>
                            <h2 className={styles.sectionTitle}>Full Stack Development Skills</h2>
                            <div className={styles.skillsGrid}>
                                {/* Frontend Development */}
                                <div className={styles.skillCategory}>
                                    <div className={styles.categoryHeader}>
                                        <span className={styles.categoryIconDev}>⚛️</span>
                                        <h3 className={styles.categoryTitleDev}>Frontend Development</h3>
                                    </div>
                                    <div className={styles.skillBadges}>
                                        <span className={styles.skillBadgeDev}>React.js</span>
                                        <span className={styles.skillBadgeDev}>JavaScript (ES6+)</span>
                                        <span className={styles.skillBadgeDev}>HTML5</span>
                                        <span className={styles.skillBadgeDev}>CSS3</span>
                                        <span className={styles.skillBadgeDev}>Tailwind CSS</span>
                                        <span className={styles.skillBadgeDev}>Bootstrap</span>
                                    </div>
                                </div>

                                {/* Backend Development */}
                                <div className={styles.skillCategory}>
                                    <div className={styles.categoryHeader}>
                                        <span className={styles.categoryIconDev}>⚙️</span>
                                        <h3 className={styles.categoryTitleDev}>Backend Development</h3>
                                    </div>
                                    <div className={styles.skillBadges}>
                                        <span className={styles.skillBadgeDev}>Java Spring Boot</span>
                                        <span className={styles.skillBadgeDev}>Node.js</span>
                                        <span className={styles.skillBadgeDev}>Django</span>
                                        <span className={styles.skillBadgeDev}>Python</span>
                                    </div>
                                </div>

                                {/* Database Management */}
                                <div className={styles.skillCategory}>
                                    <div className={styles.categoryHeader}>
                                        <span className={styles.categoryIconDev}>🗄️</span>
                                        <h3 className={styles.categoryTitleDev}>Database Management</h3>
                                    </div>
                                    <div className={styles.skillBadges}>
                                        <span className={styles.skillBadgeDev}>MySQL</span>
                                        <span className={styles.skillBadgeDev}>MongoDB</span>
                                        <span className={styles.skillBadgeDev}>SQL Joins</span>
                                        <span className={styles.skillBadgeDev}>CRUD Operations</span>
                                    </div>
                                </div>

                                {/* DevOps & Tools */}
                                <div className={styles.skillCategory}>
                                    <div className={styles.categoryHeader}>
                                        <span className={styles.categoryIconDev}>🚀</span>
                                        <h3 className={styles.categoryTitleDev}>DevOps & Tools</h3>
                                    </div>
                                    <div className={styles.skillBadges}>
                                        <span className={styles.skillBadgeDev}>Git & GitHub</span>
                                        <span className={styles.skillBadgeDev}>Vercel</span>
                                        <span className={styles.skillBadgeDev}>Netlify</span>
                                        <span className={styles.skillBadgeDev}>Postman</span>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* 5️⃣ CAREER FOCUS & MINDSET */}
                        <motion.section variants={itemVariants} className={styles.careerFocusSection}>
                            <h2 className={styles.sectionTitle}>Career Focus & Mindset</h2>
                            <div className={styles.careerContent}>
                                <p>
                                    My career trajectory is clear and focused: <strong className={styles.cyan}>Blue Team operations</strong> and <strong className={styles.red}>SOC Analyst roles</strong>. I am deeply interested in threat detection, incident response, and eventually growing into threat hunting and advanced security analysis.
                                </p>
                                <p>
                                    I believe in <strong>continuous learning</strong> whether it's mastering a new SIEM query language, understanding the latest attack techniques, or building automation tools to improve SOC efficiency. I see engineering not as a separate career path, but as a <strong>force multiplier</strong> that enhances my effectiveness as a security professional.
                                </p>
                                <p>
                                    I am not looking for shortcuts or inflated titles. I want to earn my expertise through hands-on work, real incidents, and structured growth within a professional SOC environment. I am ready to contribute, learn, and defend.
                                </p>
                                <div className={styles.readyBadge}>
                                    Ready to <span className={styles.red}>Defend</span>, Ready to <span className={styles.cyan}>Build</span>.
                                </div>
                            </div>
                        </motion.section>

                        {/* 6️⃣ CONTACT & SOCIAL LINKS */}
                        <motion.section variants={itemVariants} className={styles.contactSection}>
                            <h2 className={styles.sectionTitle}>Let's Connect</h2>
                            <div className={styles.contactCard}>
                                <p className={styles.contactText}>
                                    I'm actively seeking SOC Analyst opportunities where I can apply my technical skills, security training, and analytical mindset to defend organizations against real threats.
                                </p>
                                <div className={styles.socialLinks}>
                                    <a
                                        href="https://www.linkedin.com/in/nandan-s-/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialButton}
                                        aria-label="LinkedIn Profile"
                                    >
                                        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com/NANDAN-S-GMIT"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialButton}
                                        aria-label="GitHub Profile"
                                    >
                                        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                    <a
                                        href="https://nandan-s.netlify.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialButton}
                                        aria-label="Portfolio Website"
                                    >
                                        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z" />
                                        </svg>
                                        Portfolio
                                    </a>
                                    <a
                                        href="mailto:nandan.siddappa@gmail.com"
                                        className={styles.socialButton}
                                        aria-label="Email Contact"
                                    >
                                        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                        Email
                                    </a>
                                </div>
                            </div>
                        </motion.section>

                    </motion.div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
