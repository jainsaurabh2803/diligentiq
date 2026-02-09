import React from 'react';
import './FemaDesign.css'; // New styling
import odiImg from '../../assets/odi_investment.png';
import fdiImg from '../../assets/fdi_growth.png';
import rbiImg from '../../assets/rbi_compliance.png';

const FemaRbiAdvisory = () => {
    return (
        <div className="fema-page">
            {/* Header Section */}
            <header className="fema-header">
                <h1>FEMA / RBI Advisory (ODI & FDI)</h1>
                <p>
                    Navigating cross-border complexities with precision. Expert structuring and compliance for foreign investments.
                </p>
            </header>

            {/* ODI Section */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>Overseas Direct Investment (ODI)</h2>
                    <p>
                        Indian entities (companies/LLPs) and Resident Individuals can invest outside India, subject to FEMA rules and eligibility conditions.
                    </p>

                    <h3>When is ODI applicable?</h3>
                    <ul className="fema-list">
                        <li>Subscription to shares / capital</li>
                        <li>Acquisition of existing shares</li>
                        <li>Setting up a JV (Joint Venture) / WOS (Wholly Owned Subsidiary)</li>
                        <li>Investment through swap of shares</li>
                        <li>Investment by way of loan / guarantee to foreign entity</li>
                    </ul>

                    <h3>Key Compliances</h3>
                    <ul className="fema-list">
                        <li>Pre-transaction eligibility & structure checks</li>
                        <li>Timely RBI filings (Form FC)</li>
                        <li>Annual compliance reporting (APR)</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-1">
                        <img src={odiImg} alt="Overseas Direct Investment" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* FDI Section */}
            <section className="fema-section reverse">
                <div className="fema-text-col">
                    <h2>Foreign Direct Investment (FDI)</h2>
                    <p>
                        Foreign companies, foreign nationals, NRIs and overseas entities can invest in Indian entities, subject to FEMA and sectoral rules.
                    </p>

                    <h3>Why Use FDI Services?</h3>
                    <ul className="fema-list">
                        <li>Subscription to equity shares / CCPS / CCD</li>
                        <li>Transfer of shares from resident to non-resident</li>
                        <li>Investment in an Indian company for strategic partnership</li>
                        <li>Compliance with sectoral caps & entry routes</li>
                    </ul>

                    <h3>Key Structuring Support</h3>
                    <ul className="fema-list">
                        <li>Valuation compliance & pricing guidelines</li>
                        <li>Documentation (Board/Shareholder approvals)</li>
                        <li>Filings: FC-GPR (fresh issue), FC-TRS (transfer)</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-2">
                        <img src={fdiImg} alt="Foreign Direct Investment in India" />
                        <div className="dots-decoration dots-top-left"></div>
                    </div>
                </div>
            </section>

            {/* Reporting Section */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>RBI / FEMA Reporting & Documentation</h2>
                    <p>
                        Ensuring precision in regulatory compliance for startups raising funds, cross-border payments, and restructuring.
                    </p>

                    <h3>Key Reporting Areas</h3>
                    <ul className="fema-list">
                        <li>FDI reporting (issue/transfer of shares)</li>
                        <li>ODI reporting (investment in JV/WOS abroad)</li>
                        <li>ECB (External Commercial Borrowings)</li>
                        <li>FLA (Foreign Liabilities and Assets) Annual Return</li>
                    </ul>

                    <h3>We Club The Reports And Analytics:</h3>
                    <ul className="fema-list">
                        <li>Transaction eligibility checks under FEMA</li>
                        <li>End-to-end RBI filing coordination</li>
                        <li>Clean documentation for due diligence</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-3">
                        <img src={rbiImg} alt="RBI Compliance and Reporting" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f9f9f9' }}>
                <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Need expert guidance on your cross-border transaction?</h3>
                <a href="/contact" style={{
                    display: 'inline-block',
                    padding: '15px 30px',
                    backgroundColor: '#0f0c29',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    transition: 'opacity 0.3s'
                }}
                    onMouseOver={(e) => e.target.style.opacity = '0.8'}
                    onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                    Schedule a Consultation
                </a>
            </div>
        </div>
    );
};

export default FemaRbiAdvisory;

