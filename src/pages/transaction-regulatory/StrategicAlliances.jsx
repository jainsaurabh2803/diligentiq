import React from 'react';
import './FemaDesign.css'; // Reusing the premium styles
// Using existing images as placeholders since generation service is unavailable
import allianceImg from '../../assets/strategic_alliances.png';
import assetImg from '../../assets/asset_purchase.png';
import secondaryImg from '../../assets/secondary_transaction.png';

const StrategicAlliances = () => {
    return (
        <div className="fema-page">
            {/* Header Section */}
            <header className="fema-header">
                <h1>Strategic Alliances & Business Transactions</h1>
                <p>
                    Expert structuring for high-value commercial deals, asset purchases, and secondary market transactions.
                </p>
            </header>

            {/* Section 1: Strategic Alliance / Partnership Structuring */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>Strategic Alliance / Partnership Structuring</h2>

                    <h3>Who is this for?</h3>
                    <p>Companies entering into partnerships, joint go-to-market models, distribution tie-ups, vendor alliances, or strategic collaborations.</p>

                    <h3>When is it needed?</h3>
                    <ul className="fema-list">
                        <li>When you are signing high-value commercial deals that impact revenue, exclusivity, IP, pricing, and risk sharing.</li>
                        <li>When founders want clarity on commercial terms + compliance impact before execution.</li>
                    </ul>

                    <h3>What We Cover</h3>
                    <ul className="fema-list">
                        <li>Structuring the transaction from a commercial + financial + compliance lens</li>
                        <li>Drafting/review of key documents (MoU, alliance agreements, commercial contracts)</li>
                        <li>Revenue terms, payment milestones, obligations, penalties, termination clauses</li>
                        <li>Ensuring documentation is audit-ready and due diligence friendly</li>
                    </ul>

                    <h3>Outcome</h3>
                    <ul className="fema-list">
                        <li>Clear, enforceable agreements</li>
                        <li>Reduced legal/compliance risk</li>
                        <li>Stronger partner confidence</li>
                        <li>Smooth execution with minimal future disputes</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-1">
                        <img src={allianceImg} alt="Strategic Alliance" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* Section 2: Asset Purchase Agreements (APA) */}
            <section className="fema-section reverse">
                <div className="fema-text-col">
                    <h2>Asset Purchase Agreements (APA)</h2>

                    <h3>Who is this for?</h3>
                    <p>Businesses buying or selling assets, brands, IP, customer contracts, equipment, or business divisions (without transferring the entire company).</p>

                    <h3>When is an APA used?</h3>
                    <ul className="fema-list">
                        <li>In acquisitions where the buyer prefers an asset deal over share purchase.</li>
                        <li>For business transfer, carve-outs, slump/asset sale, or strategic acquisition of specific assets.</li>
                    </ul>

                    <h3>What We Cover</h3>
                    <ul className="fema-list">
                        <li>Structuring and documentation of asset transfer terms</li>
                        <li>Identification of assets, liabilities, contracts, and exclusions</li>
                        <li>Payment terms, indemnities, representations & warranties</li>
                        <li>Compliance alignment (GST/TDS implications and transfer documentation)</li>
                    </ul>

                    <h3>Outcome</h3>
                    <ul className="fema-list">
                        <li>Clear asset ownership transfer</li>
                        <li>Reduced future disputes and liabilities</li>
                        <li>Investor/audit-ready documentation</li>
                        <li>Smooth execution and closure support</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-2">
                        <img src={assetImg} alt="Asset Purchase Agreement" />
                        <div className="dots-decoration dots-top-left"></div>
                    </div>
                </div>
            </section>

            {/* Section 3: Secondary Transactions */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>Secondary Transactions</h2>

                    <h3>Who is this for?</h3>
                    <p>Founders, early investors, employees (ESOP holders), and incoming investors involved in buy/sell of existing shares.</p>

                    <h3>When is it applicable?</h3>
                    <p>When shares are transferred between:</p>
                    <ul className="fema-list">
                        <li>Resident ↔ Resident (Domestic transfer)</li>
                        <li>Resident ↔ Non-Resident (Cross-border transfer under FEMA/RBI)</li>
                    </ul>
                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginTop: '10px' }}>Often used for partial exits, cap table clean-up, investor restructuring, or strategic entry.</p>

                    <h3>What We Cover</h3>
                    <ul className="fema-list">
                        <li>End-to-end transfer execution: documentation, approvals, and filings</li>
                        <li>Pricing/valuation alignment and compliance checks (especially for foreign transfers)</li>
                        <li>Drafting/review of transfer agreements and supporting documents</li>
                        <li>Cap table updates, share certificates, and statutory records maintenance</li>
                    </ul>

                    <h3>Outcome</h3>
                    <ul className="fema-list">
                        <li>Smooth and compliant transfer closure</li>
                        <li>Clean investor documentation trail</li>
                        <li>Faster due diligence clearance</li>
                        <li>Reduced FEMA/Companies Act risks</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-3">
                        <img src={secondaryImg} alt="Secondary Transactions" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f9f9f9' }}>
                <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Structuring a strategic deal or secondary transfer?</h3>
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
                    Get Expert Transaction Support
                </a>
            </div>
        </div>
    );
};

export default StrategicAlliances;
