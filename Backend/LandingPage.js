import React from 'react';
import './LandingPage.css'; // Optional for styling

const LandingPage = () => {
    return (
        <div>
            <header style={{ backgroundColor: '#333', color: 'white', padding: '20px 0' }}>
                <h1>Welcome to the Product Catalogue</h1>
            </header>
            <main style={{ padding: '40px 20px', textAlign: 'center' }}>
                <p>Explore our wide range of products powered by React and Node.js backend.</p>
                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#0078D4',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    onClick={() => window.location.href = '/catalogue'}
                >
                    View Catalogue
                </button>
            </main>
        </div>
    );
};

export default LandingPage;
