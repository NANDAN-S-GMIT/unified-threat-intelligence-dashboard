/**
 * IOC (Indicator of Compromise) Detection Utility
 * Used by SOC analysts to automatically identify and classify security indicators
 */

/**
 * Detects the type of IOC based on pattern matching
 * @param {string} input - The IOC string to analyze
 * @returns {object} - Object containing type and confidence level
 */
export function detectIOCType(input) {
    if (!input || typeof input !== 'string') {
        return { type: 'unknown', confidence: 0 };
    }

    const trimmed = input.trim();

    // IPv4 Address Detection
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (ipv4Regex.test(trimmed)) {
        return { type: 'ip', confidence: 100 };
    }

    // File Hash Detection (MD5: 32, SHA1: 40, SHA256: 64 hex characters)
    // Case-insensitive matching
    const md5Regex = /^[a-fA-F0-9]{32}$/;
    const sha1Regex = /^[a-fA-F0-9]{40}$/;
    const sha256Regex = /^[a-fA-F0-9]{64}$/;

    if (sha256Regex.test(trimmed)) {
        return { type: 'hash', subtype: 'SHA256', confidence: 100 };
    }
    if (sha1Regex.test(trimmed)) {
        return { type: 'hash', subtype: 'SHA1', confidence: 100 };
    }
    if (md5Regex.test(trimmed)) {
        return { type: 'hash', subtype: 'MD5', confidence: 100 };
    }

    // URL Detection
    // More comprehensive regex that handles protocols (http/s, ftp) or just looks for common URL patterns
    // If it starts with http/https, it's definitely a URL.
    if (/^https?:\/\//i.test(trimmed)) {
        try {
            new URL(trimmed); // Validate with URL constructor
            return { type: 'url', confidence: 100 };
        } catch {
            return { type: 'url', confidence: 80 }; // Malformed but clearly intended as URL
        }
    }

    // Domain Detection
    // Needs to distiguish from filenames. Valid domain: (subdomain.)domain.tld
    // TLD must be at least 2 chars.
    const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

    // Check if it looks like a domain and NOT a known file extension (optional, but helps valid "file.exe" vs "domain.com")
    // For now, simpler domain check is usually fine if URL check failed.
    if (domainRegex.test(trimmed)) {
        return { type: 'domain', confidence: 90 };
    }

    // Fallback for URLs without protocol (e.g., "google.com/path")
    if (trimmed.includes('/') && domainRegex.test(trimmed.split('/')[0])) {
        return { type: 'url', confidence: 85 };
    }

    return { type: 'unknown', confidence: 0 };
}

/**
 * Validates if an IOC is properly formatted
 * @param {string} ioc - The IOC to validate
 * @param {string} expectedType - The expected IOC type
 * @returns {boolean} - True if valid
 */
export function validateIOC(ioc, expectedType) {
    const detection = detectIOCType(ioc);
    return detection.type === expectedType && detection.confidence >= 70;
}

/**
 * Get a user-friendly description of an IOC type
 * @param {string} type - The IOC type
 * @returns {string} - Human-readable description
 */
export function getIOCTypeDescription(type) {
    const descriptions = {
        ip: 'IP Address',
        url: 'URL',
        domain: 'Domain Name',
        hash: 'File Hash',
        unknown: 'Unknown Type'
    };
    return descriptions[type] || descriptions.unknown;
}

/**
 * Format IOC for display in the SOC dashboard
 * @param {string} ioc - The IOC to format
 * @param {string} type - The IOC type
 * @returns {string} - Formatted IOC
 */
export function formatIOC(ioc, type) {
    if (type === 'domain' || type === 'url') {
        return ioc.toLowerCase();
    }
    if (type === 'hash') {
        return ioc.toLowerCase();
    }
    return ioc;
}
