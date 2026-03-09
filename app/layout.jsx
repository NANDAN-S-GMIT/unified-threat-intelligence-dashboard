import './globals.css'

export const metadata = {
    title: 'Unified Threat Intelligence Dashboard | OSINT Tool',
    description: 'Professional SOC-focused OSINT threat intelligence dashboard by Nandan S. Enrich IOCs from multiple sources in one unified interface.',
    keywords: ['OSINT', 'SOC', 'Threat Intelligence', 'Cybersecurity', 'IOC', 'Security'],
    author: 'Nandan S - Cyber Security Analyst Trainee',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    )
}
