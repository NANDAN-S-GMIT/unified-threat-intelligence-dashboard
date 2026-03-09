import { useState } from 'react';

const Logo = ({ domain, name, fallbackText, color }) => {
    const [error, setError] = useState(false);

    // Use Google's favicon service or Clearbit
    // Google S2 is reliable for generic favicons: https://www.google.com/s2/favicons?domain=example.com&sz=128
    const logoUrl = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64` : null;

    if (!domain || error) {
        return (
            <div
                style={{
                    backgroundColor: color || '#666',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
            >
                {fallbackText || name?.substring(0, 2).toUpperCase() || 'OS'}
            </div>
        );
    }

    return (
        <img
            src={logoUrl}
            alt={`${name} logo`}
            onError={() => setError(true)}
            style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                objectFit: 'contain'
            }}
        />
    );
};

export default Logo;
