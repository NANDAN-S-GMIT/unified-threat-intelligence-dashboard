export const mitreMapping = {
    ip: [
        { code: "T1590", name: "Gather Victim Network Information" },
        { code: "T1566", name: "Phishing" } // Often sources of phishing
    ],
    domain: [
        { code: "T1583", name: "Acquire Infrastructure" },
        { code: "T1071", name: "Application Layer Protocol" } // C2 channels
    ],
    url: [
        { code: "T1566.002", name: "Spearphishing Link" },
        { code: "T1204", name: "User Execution" }
    ],
    hash: [
        { code: "T1027", name: "Obfuscated Files or Information" },
        { code: "T1003", name: "OS Credential Dumping" } // Examples
    ]
};

export function getMitreTechniques(iocType, verdict) {
    if (verdict === 'CLEAN') return [];

    // Return random subset or static mapping for demo
    return mitreMapping[iocType] || [];
}
