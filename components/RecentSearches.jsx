'use client';

import { useState, useEffect } from 'react';
import styles from './RecentSearches.module.css';

/**
 * Recent Searches Component
 * Displays and manages recent IOC searches using localStorage
 */
export default function RecentSearches({ onSelectIOC }) {
    const [searches, setSearches] = useState([]);

    useEffect(() => {
        loadSearches();
    }, []);

    const loadSearches = () => {
        try {
            const stored = localStorage.getItem('recentIOCSearches');
            if (stored) {
                setSearches(JSON.parse(stored));
            }
        } catch (err) {
            console.error('Failed to load recent searches:', err);
        }
    };

    const clearHistory = () => {
        localStorage.removeItem('recentIOCSearches');
        setSearches([]);
    };

    if (searches.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>
                    <span className={styles.icon}>🕐</span>
                    Recent Searches
                </h3>
                <button onClick={clearHistory} className={styles.clearButton}>
                    🗑️ Clear
                </button>
            </div>

            <div className={styles.searchList}>
                {searches.map((search, index) => (
                    <button
                        key={index}
                        className={styles.searchItem}
                        onClick={() => onSelectIOC(search.ioc, search.type)}
                    >
                        <span className={styles.typeIcon}>{getTypeIcon(search.type)}</span>
                        <span className={styles.iocText}>{search.ioc}</span>
                        <span className={styles.typeBadge}>{search.type.toUpperCase()}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

function getTypeIcon(type) {
    const icons = {
        ip: '🌐',
        url: '🔗',
        domain: '🌍',
        hash: '📄'
    };
    return icons[type] || '🔍';
}

/**
 * Helper function to add a search to recent history
 * Call this from the main page when a search is performed
 */
export function addToRecentSearches(ioc, type) {
    try {
        const stored = localStorage.getItem('recentIOCSearches');
        let searches = stored ? JSON.parse(stored) : [];

        // Remove duplicate if exists
        searches = searches.filter(s => s.ioc !== ioc);

        // Add new search to beginning
        searches.unshift({ ioc, type, timestamp: Date.now() });

        // Keep only last 10 searches
        searches = searches.slice(0, 10);

        localStorage.setItem('recentIOCSearches', JSON.stringify(searches));
    } catch (err) {
        console.error('Failed to save search:', err);
    }
}
