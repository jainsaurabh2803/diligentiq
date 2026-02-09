import React from 'react';
import './FemaDesign.css'; // Reusing the premium styles
import incorporationImg from '../../assets/incorporation.png';
// Using existing images as distinct placeholders due to generation limits
import closureImg from '../../assets/slump_sale.png';
import complianceImg from '../../assets/bonus_rights.png';

const EntityLifecycle = () => {
    return (
        <div className="fema-page">
            {/* Header Section */}
            <header className="fema-header">
                <h1>Entity Lifecycle Services</h1>
                <p>
                    End-to-end support for business incorporation, ongoing statutory compliance, and closure/winding up.
                </p>
            </header>

            {/* Section 1: Incorporation */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>Incorporation of Company / LLP / Partnership / NGO</h2>

                    <h3>Applicability</h3>
                    <ul className="fema-list">
                        <li>New business setup in India</li>
                        <li>Indian founders, foreign shareholders, NRIs, group structures</li>
                    </ul>

                    <h3>Key Forms & Filings</h3>
                    <ul className="fema-list">
                        <li>SPICe+ (INC-32) - Company incorporation</li>
                        <li>INC-33 / INC-34 - e-MOA & e-AOA</li>
                        <li>AGILE-PRO-S – GST, PF, ESIC, Bank, Professional Tax</li>
                        <li>DIR-3 KYC – Director KYC</li>
                        <li>Form 8 (LLP) – LLP incorporation & LLP Agreement filing (Form 3)</li>
                        <li>PAN, TAN, GST, PF, ESIC registrations (as applicable)</li>
                    </ul>

                    <h3>Key Highlights</h3>
                    <ul className="fema-list">
                        <li>Correct capital & shareholding structuring</li>
                        <li>FEMA/RBI compliant entry for foreign shareholders</li>
                        <li>Clean audit & due-diligence-ready documentation</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-1">
                        <img src={incorporationImg} alt="Company Incorporation" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* Section 2: Closure Support */}
            <section className="fema-section reverse">
                <div className="fema-text-col">
                    <h2>Closure Support – Dissolution / Strike-off</h2>

                    <h3>Applicability</h3>
                    <p>Inactive / non-operational entities, Group restructuring, failed startups, exits.</p>

                    <h3>Key Forms & Filings</h3>
                    <ul className="fema-list">
                        <li>STK-2 – Company strike-off</li>
                        <li>STK-3 / STK-4 – Indemnity bond & affidavit</li>
                        <li>INC-28 – NCLT order filing (if applicable)</li>
                        <li>LLP Form 24 – LLP strike-off</li>
                        <li>Final GST, TDS, ROC compliance closure filings</li>
                    </ul>

                    <h3>Key Highlights</h3>
                    <ul className="fema-list">
                        <li>Zero pending liabilities approach</li>
                        <li>Closure with no future regulatory exposure</li>
                        <li>Clean exit for promoters and investors</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-2">
                        <img src={closureImg} alt="Closure Support" />
                        <div className="dots-decoration dots-top-left"></div>
                    </div>
                </div>
            </section>

            {/* Section 3: Documentation & Statutory Filings */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>Complete Documentation & Statutory Filings</h2>

                    <h3>Applicability</h3>
                    <p>Ongoing compliance, audits, due diligence, fundraising, M&A.</p>

                    <h3>Key Forms & Filings</h3>
                    <ul className="fema-list">
                        <li>MGT-14 – Board/Shareholder resolutions</li>
                        <li>PAS-3 – Allotment of shares/securities</li>
                        <li>DIR-12 – Director changes</li>
                        <li>SH-7 – Capital alteration</li>
                        <li>DPT-3 – Deposits / borrowings</li>
                        <li>AOC-4 / MGT-7 / MGT-7A – Annual filings</li>
                        <li>FC-GPR / FC-TRS – FEMA/RBI reporting (as applicable)</li>
                    </ul>

                    <h3>Key Highlights</h3>
                    <ul className="fema-list">
                        <li>Statutory registers & approvals in order</li>
                        <li>Investor-grade compliance trail</li>
                        <li>Faster due diligence & smoother transactions</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-3">
                        <img src={complianceImg} alt="Documentation and Filings" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f9f9f9' }}>
                <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Setting up or closing a business?</h3>
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
                    Get Expert Assistance
                </a>
            </div>
        </div>
    );
};

export default EntityLifecycle;
