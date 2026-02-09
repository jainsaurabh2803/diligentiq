import React from 'react';
import './FemaDesign.css'; // Reusing the premium styles
import buybackImg from '../../assets/buyback.png';
import bonusImg from '../../assets/bonus_rights.png';
import esopImg from '../../assets/esop_founder.png';

const CapitalRestructuring = () => {
    return (
        <div className="fema-page">
            {/* Header Section */}
            <header className="fema-header">
                <h1>Capital Restructuring & Shareholder Actions</h1>
                <p>
                    Strategic compliance for buybacks, bonus issues, rights issues, and equity compensation structures.
                </p>
            </header>

            {/* Section 1: Buyback of Shares */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>Buyback of Shares</h2>

                    <h3>Who can do a buyback?</h3>
                    <p>Private Limited / Public companies can buy back their own shares, subject to Companies Act, 2013 compliance and availability of eligible funds.</p>

                    <h3>When is buyback used?</h3>
                    <ul className="fema-list">
                        <li>To provide exit to investors/shareholders</li>
                        <li>For capital restructuring and improving shareholding structure</li>
                        <li>To return surplus cash to shareholders in a structured manner</li>
                    </ul>

                    <h3>Types of buyback</h3>
                    <ul className="fema-list">
                        <li>Buyback from existing shareholders (proportionate basis)</li>
                        <li>Buyback from specific shareholders (selective buyback) (subject to approvals and documentation)</li>
                    </ul>

                    <h3>Key compliances & RBI/FEMA reporting</h3>
                    <ul className="fema-list">
                        <li>Compliance under Companies Act, 2013 and Buyback Rules (approvals, timelines, disclosures)</li>
                        <li>If any shareholder is non-resident, FEMA/RBI checks may apply for pricing and remittance-related compliance (as applicable)</li>
                    </ul>

                    <h3>Limit & Thresholds</h3>
                    <p>Buyback is subject to prescribed limits under the Companies Act, including:</p>
                    <ul className="fema-list">
                        <li>Maximum buyback size as a % of paid-up capital + free reserves</li>
                        <li>Debt-equity ratio conditions (as applicable)</li>
                        <li>Cooling-off period and completion timelines</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-1">
                        <img src={buybackImg} alt="Share Buyback" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* Additional Info Block - Full Width for Forms */}
            <section className="fema-section" style={{ background: '#f9f9f9', width: '100%', maxWidth: '100%', padding: '30px 10%' }}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '20px' }}>Forms / Filings Applicable (Buyback)</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <span className="compliance-tag">SH-8</span>
                        <span className="compliance-tag">SH-9</span>
                        <span className="compliance-tag">MGT-14</span>
                        <span className="compliance-tag">PAS-3</span>
                        <span className="compliance-tag">SH-11</span>
                    </div>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>Update of statutory registers and shareholding records etc.</p>
                </div>
            </section>

            {/* Section 2: Bonus Issue & Rights Issue */}
            <section className="fema-section reverse">
                <div className="fema-text-col">
                    <h2>Bonus Issue & Rights Issue</h2>

                    <h3>Bonus Issue</h3>
                    <p><strong>Who:</strong> Companies with sufficient free reserves / securities premium / reserve fund.</p>
                    <p><strong>Use Case:</strong> Capitalising reserves, rewarding shareholders, improving market perception.</p>
                    <ul className="fema-list">
                        <li>Bonus to all existing shareholders (proportionate)</li>
                        <li>Subject to availability of reserves and authorised capital limits</li>
                    </ul>

                    <h3>Rights Issue</h3>
                    <p><strong>Who:</strong> Any company issuing shares to existing shareholders.</p>
                    <p><strong>Use Case:</strong> Raising funds without dilution of control, working capital/growth funding.</p>
                    <ul className="fema-list">
                        <li>Rights issue of equity / CCPS / other securities</li>
                        <li>FEMA compliance applies if non-residents participate (pricing/valuation)</li>
                    </ul>

                    <h3>Key Compliances</h3>
                    <ul className="fema-list">
                        <li>Board/Shareholder approvals, offer letters, allotment filings (PAS-3)</li>
                        <li>RBI reporting if non-residents are involved</li>
                        <li>No default in statutory dues/debt guidelines (for Bonus)</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-2">
                        <img src={bonusImg} alt="Bonus & Rights Issue" />
                        <div className="dots-decoration dots-top-left"></div>
                    </div>
                </div>
            </section>

            {/* Section 3: ESOP / Founder's Agreement */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>ESOP & Founder’s Agreement Support</h2>

                    <h3>ESOP – Structuring, Execution & Compliance</h3>
                    <ul className="fema-list">
                        <li>End-to-end ESOP structuring and execution for startups/growth companies</li>
                        <li>Drafting vesting schedules, exercise price, and liquidity clauses</li>
                        <li>Tax structuring (perquisite vs. capital gains)</li>
                        <li>Managing Board/Shareholder approvals, allotment, and filings</li>
                    </ul>

                    <h3>Founder’s Agreement – Execution & Risk Control</h3>
                    <ul className="fema-list">
                        <li>Drafting agreements aligned with fundraising and governance</li>
                        <li>Structuring vesting, lock-in, non-compete, and IP ownership</li>
                        <li>Identifying clauses that block future funding/exits</li>
                        <li>Alignment with AOA, cap table, and investor documents</li>
                    </ul>

                    <h3 style={{ marginTop: '20px' }}>All board/shareholder approvals and filings</h3>
                    <p>Complete support for all Board/Shareholder approvals, documentation, and statutory filings.</p>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-3">
                        <img src={esopImg} alt="ESOP & Founder Agreement" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#fff' }}>
                <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Need help with Capital Structuring?</h3>
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
                    Contact Our Experts
                </a>
            </div>
        </div>
    );
};

export default CapitalRestructuring;
