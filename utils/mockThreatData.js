export const mockThreatData = {
    virustotal: {
        malicious: {
            data: {
                verdict: 'malicious',
                score: 88,
                detections: {
                    malicious: 58,
                    suspicious: 1,
                    undetected: 12,
                    harmless: 0
                },
                lastAnalysisDate: new Date().toISOString(),
                tags: ['phishing', 'cobalt-strike', 'trojan'],
                reputation: -95
            },
            summary: "58/71 security vendors flagged this as malicious."
        },
        suspicious: {
            data: {
                verdict: 'suspicious',
                score: 45,
                detections: {
                    malicious: 3,
                    suspicious: 2,
                    undetected: 65,
                    harmless: 1
                },
                lastAnalysisDate: new Date().toISOString(),
                tags: ['parked', 'low-reputation'],
                reputation: -10
            },
            summary: "3 security vendors flagged this as malicious."
        },
        clean: {
            data: {
                verdict: 'clean',
                score: 0,
                detections: {
                    malicious: 0,
                    suspicious: 0,
                    undetected: 71,
                    harmless: 45
                },
                lastAnalysisDate: new Date().toISOString(),
                tags: ['cdn', 'trusted'],
                reputation: 99
            },
            summary: "No vendors flagged this as malicious."
        }
    },
    abuseipdb: {
        malicious: {
            data: {
                abuseConfidenceScore: 100,
                totalReports: 1452,
                lastReportedAt: new Date().toISOString(),
                countryCode: "RU",
                usageType: "Data Center/Web Hosting/Transit"
            },
            summary: "High confidence of abuse. 100% Score."
        },
        suspicious: {
            data: {
                abuseConfidenceScore: 25,
                totalReports: 12,
                lastReportedAt: new Date(Date.now() - 86400000).toISOString(),
                countryCode: "CN",
                usageType: "Residential"
            },
            summary: "Medium confidence of abuse. 25% Score."
        },
        clean: {
            data: {
                abuseConfidenceScore: 0,
                totalReports: 0,
                lastReportedAt: null,
                countryCode: "US",
                usageType: "Search Engine Spider"
            },
            summary: "No abuse reports found."
        }
    },
    talos: {
        malicious: {
            data: {
                emailReputation: "Poor",
                webReputation: "Poor",
                weightedReputationScore: -8.5,
                volumeChange: "Spike in traffic"
            },
            summary: "Poor reputation. Known blocklist."
        },
        suspicious: {
            data: {
                emailReputation: "Neutral",
                webReputation: "Neutral",
                weightedReputationScore: -1.2,
                volumeChange: "Stable"
            },
            summary: "Neutral reputation. Exercise caution."
        },
        clean: {
            data: {
                emailReputation: "Great",
                webReputation: "Great",
                weightedReputationScore: 9.8,
                volumeChange: "Stable"
            },
            summary: "Trusted infrastructure."
        }
    },
    urlscan: {
        malicious: {
            data: {
                pageTitle: "Login - Secure Banking",
                screenshot: "https://urlscan.io/screenshots/simulated-malicious.png",
                verdict: "malicious",
                domChanges: "Critical obfuscation detected",
                ip: "192.168.x.x"
            },
            summary: "Phishing characteristics detected in DOM."
        },
        suspicious: {
            data: {
                pageTitle: "Untitled Document",
                screenshot: "https://urlscan.io/screenshots/simulated-suspicious.png",
                verdict: "unknown",
                domChanges: "Minor scripts detected",
                ip: "10.0.x.x"
            },
            summary: "Unusual page structure."
        },
        clean: {
            data: {
                pageTitle: "Official Website",
                screenshot: "https://urlscan.io/screenshots/simulated-clean.png",
                verdict: "clean",
                domChanges: "None",
                ip: "1.1.1.1"
            },
            summary: "Page behavior appears normal."
        }
    }
};
