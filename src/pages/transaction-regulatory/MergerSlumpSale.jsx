import React from 'react';
import './FemaDesign.css'; // Reusing the premium styles
import slumpImg from '../../assets/slump_sale.png';
import maImg from '../../assets/ma_merger.png';
// Using maImg as a placeholder for NCLT process since generation failed
import ncltImg from '../../assets/ma_merger.png';

const MergerSlumpSale = () => {
    return (
        <div className="fema-page">
            {/* Header Section */}
            <header className="fema-header">
                <h1>M&A / Merger / Slump Sale Execution</h1>
                <p>
                    Strategic execution for business acquisitions, restructuring, and slump sales with end-to-end regulatory compliance.
                </p>
            </header>

            {/* Section 1: Slump Sale */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>Slump Sale Execution</h2>

                    <h3>Who is this for?</h3>
                    <p>Companies planning to sell or acquire a business undertaking/division as a going concern.</p>

                    <h3>When is Slump Sale applicable?</h3>
                    <ul className="fema-list">
                        <li>When an entire business undertaking is transferred for a lump-sum consideration, without assigning values to individual assets and liabilities.</li>
                        <li>Common in business carve-outs, strategic acquisitions, and group restructuring.</li>
                    </ul>

                    <h3>Types of Slump Sale transactions</h3>
                    <ul className="fema-list">
                        <li>Transfer of one undertaking</li>
                        <li>Transfer of multiple undertakings</li>
                        <li>Slump sale to an Indian buyer or a foreign buyer (subject to FEMA conditions)</li>
                    </ul>

                    <h3>Key compliances (Tax + Corporate + Commercial)</h3>
                    <ul className="fema-list">
                        <li>Structuring to ensure it qualifies as a slump sale under Income Tax provisions</li>
                        <li>Drafting/review of Business Transfer Agreement (BTA) and commercial terms</li>
                        <li>GST and stamp duty impact review (state-specific and transaction-specific)</li>
                        <li>Board/shareholder approvals and documentation hygiene for due diligence</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-1">
                        <img src={slumpImg} alt="Slump Sale Execution" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* Additional Info Block for Slump Sale - Full Width */}
            <section className="fema-section" style={{ background: '#f9f9f9', width: '100%', maxWidth: '100%', padding: '40px 10%' }}>
                <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <div>
                        <h3>RBI / FEMA reporting (if cross-border)</h3>
                        <ul className="fema-list">
                            <li>If the buyer/seller involves a non-resident, FEMA checks may apply (pricing, sector conditions, reporting requirements).</li>
                            <li>RBI filings may be triggered depending on transaction structure and consideration flow.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Limits & thresholds</h3>
                        <p style={{ marginBottom: '10px' }}>No fixed monetary “limit” for slump sale, but compliance depends on:</p>
                        <ul className="fema-list">
                            <li>Materiality and approvals under Companies Act.</li>
                            <li>Tax impact under Section 50B (slump sale taxation).</li>
                            <li>FEMA applicability if non-resident involvement exists.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 2: Mergers & Acquisitions */}
            <section className="fema-section reverse">
                <div className="fema-text-col">
                    <h2>Mergers & Acquisitions</h2>

                    <h3>Who is this for?</h3>
                    <ul className="fema-list">
                        <li>Startups, SMEs and group companies planning acquisition, merger, business consolidation, or strategic exit.</li>
                        <li>Buyers/investors looking for clean execution and due diligence-ready documentation.</li>
                    </ul>

                    <h3>When is M&A applicable?</h3>
                    <p>When you want to:</p>
                    <ul className="fema-list">
                        <li>Acquire a company or business division</li>
                        <li>Merge entities for operational efficiency</li>
                        <li>Restructure group entities before/after fundraising</li>
                        <li>Execute promoter/investor exits through structured transactions</li>
                    </ul>

                    <h3>Types of M&A transactions covered</h3>
                    <ul className="fema-list">
                        <li>Share purchase / share sale (primary + secondary)</li>
                        <li>Asset purchase / business transfer</li>
                        <li>Slump sale</li>
                        <li>Merger / demerger through NCLT scheme</li>
                        <li>Domestic and cross-border transactions (subject to FEMA/RBI)</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-2">
                        <img src={maImg} alt="Mergers & Acquisitions" />
                        <div className="dots-decoration dots-top-left"></div>
                    </div>
                </div>
            </section>

            {/* Additional Info Block for M&A - Full Width */}
            <section className="fema-section" style={{ background: '#fff', width: '100%', maxWidth: '100%', padding: '20px 10% 40px' }}>
                <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <div>
                        <h3>Key compliances & Regulatory Reporting</h3>
                        <ul className="fema-list">
                            <li>Structuring under Companies Act, 2013 with proper approvals and documentation</li>
                            <li>Due diligence support: financial, compliance and transaction readiness</li>
                            <li>FEMA/RBI checks for non-resident involvement (pricing, reporting, remittance trail)</li>
                            <li>Coordination with legal teams for transaction documents and closure</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Limits & thresholds</h3>
                        <p style={{ marginBottom: '10px' }}>No fixed “one size” threshold — depends on:</p>
                        <ul className="fema-list">
                            <li>Transaction value and approval requirements</li>
                            <li>Sector regulations (if applicable)</li>
                            <li>FEMA conditions for cross-border elements</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 3: NCLT Process Support */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>NCLT Process Support</h2>

                    <h3>What We Cover</h3>
                    <ul className="fema-list">
                        <li>End-to-end support for NCLT applications and filings</li>
                        <li>Drafting and preparation of First Motion petition and documents</li>
                        <li>Drafting and preparation of Second Motion petition and documents</li>
                        <li>Coordination for notices, affidavits, disclosures and compliances during the process</li>
                        <li>Hearing support and follow-ups until receipt of final NCLT order</li>
                        <li>Post-order ROC filing and compliance closure (as applicable)</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-3">
                        <img src={ncltImg} alt="NCLT Process Support" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f9f9f9' }}>
                <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Planning a merger or acquisition?</h3>
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
                    Get Expert M&A Support
                </a>
            </div>
        </div>
    );
};

export default MergerSlumpSale;
