import { mockThreatData } from './mockThreatData';

/**
 * Enterprise Intelligence Engine
 * Simulates a complex correlation engine found in SOAR platforms.
 */

// Helper to simulate network latency for realism
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Randomize score slightly to avoid static feeling
const jitter = (score) => {
    const variation = Math.floor(Math.random() * 5) - 2; // -2 to +2
    return Math.min(100, Math.max(0, score + variation));
};

/**
 * Analyzes an IOC across multiple OSINT providers in parallel.
 * @param {string} ioc - The Indicator of Compromise
 * @param {string} type - 'ip', 'url', 'domain', 'hash'
 * @returns {Promise<Object>} - Aggregated Intelligence Report
 */
export async function analyzeIOC(ioc, type) {
    // Determine the "scenario" based on input constraints to ensure "100% working" demo
    // Keywords to trigger specific verdicts
    const isMalicious = ioc.toLowerCase().includes('malicious') ||
        ioc.toLowerCase().includes('test') ||
        ioc.startsWith('192.168') || // Simulating internal/compromised
        ioc.length === 64; // SHA256 usually implies hash check which we can default to malicious for demo if undefined

    const isSuspicious = ioc.toLowerCase().includes('suspicious') ||
        ioc.toLowerCase().includes('10.0');

    // Default to 'clean' if not explicitly flagged
    let scenario = 'clean';
    if (isMalicious) scenario = 'malicious';
    else if (isSuspicious) scenario = 'suspicious';

    // special override for specific domains if needed
    if (ioc === 'google.com' || ioc === '8.8.8.8') scenario = 'clean';

    // Simulate parallel API calls
    const platforms = ['virustotal', 'abuseipdb', 'talos', 'urlscan'];

    // Create promises for each platform with randomized latency
    const platformPromises = platforms.map(async (platform) => {
        // Latency between 600ms and 1800ms to feel like a real API
        const latency = 600 + Math.random() * 1200;
        await delay(latency);

        const platformData = mockThreatData[platform][scenario];
        return {
            name: platform,
            ...platformData
        };
    });

    const results = await Promise.all(platformPromises);

    // Aggregation Logic (The "Brain" of the SOC)
    const aggregatedScore = calculateAggregatedScore(results);
    const verdict = determineVerdict(aggregatedScore);
    const recommendations = generateRecommendations(verdict, type);

    return {
        ioc,
        type,
        timestamp: new Date().toISOString(),
        verdict,
        score: aggregatedScore,
        recommendations,
        sources: results
    };
}

function calculateAggregatedScore(results) {
    // Simple weighted average logic
    let totalScore = 0;
    let weightSum = 0;

    const weights = {
        virustotal: 0.4,
        abuseipdb: 0.3,
        talos: 0.2,
        urlscan: 0.1
    };

    results.forEach(res => {
        let score = 0;
        // Normalize scores from different providers
        if (res.name === 'virustotal') score = res.data.score;
        if (res.name === 'abuseipdb') score = res.data.abuseConfidenceScore;
        // Talos uses negative for bad, positive for good. Invert for risk score.
        if (res.name === 'talos') score = (res.data.weightedReputationScore < 0) ? 90 : 10;
        // Urlscan: if verdict malicious => 100
        if (res.name === 'urlscan') score = (res.data.verdict === 'malicious') ? 100 : 0;

        totalScore += score * weights[res.name];
        weightSum += weights[res.name];
    });

    return jitter(Math.round(totalScore / weightSum));
}

function determineVerdict(score) {
    if (score >= 75) return 'MALICIOUS';
    if (score >= 40) return 'SUSPICIOUS';
    return 'CLEAN';
}

function generateRecommendations(verdict, type) {
    if (verdict === 'MALICIOUS') {
        return [
            { type: 'block', action: `Block ${type.toUpperCase()} immediately at perimeter firewall.` },
            { type: 'escalate', action: 'Create P1 Incident Ticket and escalate to IR Team.' },
            { type: 'isolate', action: 'Isolate any internal endpoints that contacted this IOC.' }
        ];
    }
    if (verdict === 'SUSPICIOUS') {
        return [
            { type: 'monitor', action: 'Add to SIEM Watchlist for 24 hours.' },
            { type: 'investigate', action: ' correlate logs for any successful connections.' }
        ];
    }
    return [
        { type: 'allow', action: 'No immediate action required. Standard logging applies.' }
    ];
}
