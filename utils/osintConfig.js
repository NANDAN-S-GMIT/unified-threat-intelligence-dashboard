/**
 * OSINT Platform Configuration
 * Centralizes all OSINT source integrations used by SOC analysts
 */

export const osintPlatforms = {
    virustotal: {
        name: 'VirusTotal',
        description: 'Analyze suspicious files, URLs, domains, and IP addresses',
        hostname: 'virustotal.com',
        logoText: 'VT',
        logoColor: '#394EFF',
        supportedTypes: ['ip', 'url', 'domain', 'hash'],
        buildURL: async (ioc, type) => {
            const typeMap = {
                ip: 'ip-address',
                url: 'url',
                domain: 'domain',
                hash: 'file'
            };
            const vtType = typeMap[type] || 'search';

            // For URLs, VirusTotal uses SHA-256 hash of the URL
            if (type === 'url') {
                try {
                    // Create SHA-256 hash of the URL
                    const encoder = new TextEncoder();
                    const data = encoder.encode(ioc);
                    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                    return `https://www.virustotal.com/gui/url/${hashHex}`;
                } catch (error) {
                    // Fallback to search if hashing fails
                    return `https://www.virustotal.com/gui/search/${encodeURIComponent(ioc)}`;
                }
            }

            return `https://www.virustotal.com/gui/${vtType}/${encodeURIComponent(ioc)}`;
        },
    },

    abuseipdb: {
        name: 'AbuseIPDB',
        description: 'IP address abuse reports and blacklist checking',
        hostname: 'abuseipdb.com',
        logoText: 'AB',
        logoColor: '#FF6B35',
        supportedTypes: ['ip'],
        buildURL: (ioc) => {
            return `https://www.abuseipdb.com/check/${encodeURIComponent(ioc)}`;
        },
    },

    talos: {
        name: 'Cisco Talos',
        description: 'Comprehensive threat intelligence and reputation data',
        hostname: 'talosintelligence.com',
        logoText: 'CT',
        logoColor: '#00BCF2',
        supportedTypes: ['ip', 'url', 'domain'],
        buildURL: (ioc) => {
            return `https://talosintelligence.com/reputation_center/lookup?search=${encodeURIComponent(ioc)}`;
        },
    },

    ipvoid: {
        name: 'IPVoid',
        description: 'IP reputation and blacklist checker',
        hostname: 'ipvoid.com',
        logoText: 'IV',
        logoColor: '#9B59B6',
        supportedTypes: ['ip'],
        buildURL: (ioc) => {
            return `https://www.ipvoid.com/ip-blacklist-check/?ip=${encodeURIComponent(ioc)}`;
        },
    },

    urlscan: {
        name: 'URLScan.io',
        description: 'Website scanner and analyzer',
        hostname: 'urlscan.io',
        logoText: 'US',
        logoColor: '#1ABC9C',
        supportedTypes: ['url', 'domain', 'ip'],
        buildURL: (ioc, type) => {
            // URLScan.io has issues with forward slashes in search even when encoded
            // For URLs, extract the domain and search by that instead
            if (type === 'url') {
                try {
                    // Extract domain from URL
                    const urlObj = new URL(ioc.includes('://') ? ioc : `http://${ioc}`);
                    const domain = urlObj.hostname;
                    // Search by domain - more reliable and finds all scans of that domain
                    return `https://urlscan.io/search/#domain:${domain}`;
                } catch (e) {
                    // If URL parsing fails, just search the raw string
                    return `https://urlscan.io/search/#${encodeURIComponent(ioc)}`;
                }
            }
            // For domains and IPs, use field-specific search
            if (type === 'domain') {
                return `https://urlscan.io/search/#domain:${ioc}`;
            }
            if (type === 'ip') {
                return `https://urlscan.io/search/#ip:${ioc}`;
            }
            // Fallback
            return `https://urlscan.io/search/#${encodeURIComponent(ioc)}`;
        },
    },

    alienvault: {
        name: 'AlienVault OTX',
        description: 'Open Threat Exchange intelligence',
        hostname: 'alienvault.com',
        logoText: 'OTX',
        logoColor: '#E74C3C',
        supportedTypes: ['ip', 'url', 'domain', 'hash'],
        buildURL: (ioc, type) => {
            const typeMap = {
                ip: 'IPv4',
                url: 'url',
                domain: 'domain',
                hash: 'file'
            };
            const otxType = typeMap[type] || 'indicator';

            // For URLs, AlienVault expects the URL to be encoded only once
            // The platform will handle it correctly in the path
            if (type === 'url') {
                // Use single encoding for URL path component
                return `https://otx.alienvault.com/indicator/${otxType}/${ioc}`;
            }

            return `https://otx.alienvault.com/indicator/${otxType}/${encodeURIComponent(ioc)}`;
        },
    },

    threatcrowd: {
        name: 'ThreatCrowd',
        description: 'Graph-based threat intelligence',
        hostname: 'threatcrowd.org',
        logoText: 'TC',
        logoColor: '#F39C12',
        supportedTypes: ['ip', 'domain'],
        buildURL: (ioc, type) => {
            return `https://threatcrowd.org/${type}.html?${type}=${encodeURIComponent(ioc)}`;
        },
    },

    greynoise: {
        name: 'GreyNoise',
        description: 'Internet-wide scanner detection',
        hostname: 'greynoise.io',
        logoText: 'GN',
        logoColor: '#95A5A6',
        supportedTypes: ['ip'],
        buildURL: (ioc) => {
            return `https://viz.greynoise.io/ip/${encodeURIComponent(ioc)}`;
        },
    },

    shodan: {
        name: 'Shodan',
        description: 'Search engine for Internet-connected devices',
        hostname: 'shodan.io',
        logoText: 'SH',
        logoColor: '#bf2c2c',
        supportedTypes: ['ip'],
        buildURL: (ioc) => {
            return `https://www.shodan.io/host/${encodeURIComponent(ioc)}`;
        },
    },

    crtsh: {
        name: 'crt.sh',
        description: 'Certificate Transparency search',
        hostname: 'crt.sh',
        logoText: 'CR',
        logoColor: '#2c3e50',
        supportedTypes: ['domain'],
        buildURL: (ioc) => {
            return `https://crt.sh/?q=${encodeURIComponent(ioc)}`;
        },
    },

    hybridanalysis: {
        name: 'Hybrid Analysis',
        description: 'Free automated malware analysis service',
        hostname: 'hybrid-analysis.com',
        logoText: 'HA',
        logoColor: '#34495e',
        supportedTypes: ['hash', 'url', 'file'],
        buildURL: (ioc, type) => {
            if (type === 'hash') {
                return `https://www.hybrid-analysis.com/search?query=${encodeURIComponent(ioc)}`;
            }
            // For URL, it's a submission form usually, but search works if analyzed before
            return `https://www.hybrid-analysis.com/search?query=${encodeURIComponent(ioc)}`;
        },
    },

    checkphish: {
        name: 'CheckPhish',
        description: 'Real-time phishing detection',
        hostname: 'checkphish.ai',
        logoText: 'CP',
        logoColor: '#e67e22',
        supportedTypes: ['url', 'domain'],
        buildURL: (ioc) => {
            // CheckPhish is a dashboard, we usually scan via API, but deep link to scan page works or homepage
            return `https://checkphish.ai/insight/url/${encodeURIComponent(ioc)}`;
        },
    }
};

/**
 * Get all platforms that support a specific IOC type
 * @param {string} iocType - The type of IOC (ip, url, domain, hash)
 * @returns {Array} - Array of platform configurations
 */
export function getCompatiblePlatforms(iocType) {
    return Object.entries(osintPlatforms)
        .filter(([_, platform]) => platform.supportedTypes.includes(iocType))
        .map(([key, platform]) => ({ key, ...platform }));
}

/**
 * Build URL for a specific platform and IOC
 * @param {string} platformKey - The platform identifier
 * @param {string} ioc - The IOC value
 * @param {string} type - The IOC type
 * @returns {Promise<string|null>} - The constructed URL or null if unsupported
 */
export async function buildPlatformURL(platformKey, ioc, type) {
    const platform = osintPlatforms[platformKey];
    if (!platform || !platform.supportedTypes.includes(type)) {
        return null;
    }
    return await platform.buildURL(ioc, type);
}

/**
 * Get default enabled platforms for SOC dashboard
 * @returns {Array} - Array of platform keys
 */
export function getDefaultPlatforms() {
    return ['virustotal', 'abuseipdb', 'talos', 'ipvoid', 'urlscan'];
}
