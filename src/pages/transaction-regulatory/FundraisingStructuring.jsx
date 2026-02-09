import React from 'react';
import './FemaDesign.css'; // Reusing the specific design
import fundraisingImg from '../../assets/fundraising_instruments.png';
import ecbImg from '../../assets/ecb_loans.png';
// Using ecbImg as a placeholder for strategic structuring since generation failed
import strategicImg from '../../assets/ecb_loans.png';

const FundraisingStructuring = () => {
    return (
        <div className="fema-page">
            {/* Header Section */}
            <header className="fema-header">
                <h1>Fundraising Instruments & Deal Structuring</h1>
                <p>
                    Expert guidance on convertible instruments, external commercial borrowings, and strategic investor readiness.
                </p>
            </header>

            {/* Section 1: Fundraising Instruments */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>CCD / OCD / CCPS / NCD / CN Documentation & Compliance</h2>

                    <h3>Who typically uses these instruments?</h3>
                    <ul className="fema-list">
                        <li>Startups and growth companies raising funds from angel investors, VCs, HNIs, family offices and strategic investors.</li>
                        <li>Companies looking for structured funding with downside protection + conversion options.</li>
                    </ul>

                    <h3>When are these instruments applicable?</h3>
                    <p>When funding is raised as:</p>
                    <ul className="fema-list">
                        <li><strong>Convertible instruments (CCD / CCPS):</strong> For future equity conversion.</li>
                        <li><strong>Debt instruments (OCD / NCD):</strong> With defined interest and repayment terms.</li>
                        <li><strong>CN (Convertible Notes):</strong> Typically for early-stage fundraising (as applicable).</li>
                    </ul>

                    <h3>Types of transactions covered</h3>
                    <ul className="fema-list">
                        <li>Fresh issuance / allotment of instruments</li>
                        <li>Conversion into equity (mandatory/optional conversion events)</li>
                        <li>Interest terms, redemption and maturity structuring</li>
                        <li>Investor rights, covenants, and protective clauses</li>
                        <li>Secondary transfer support (where applicable)</li>
                    </ul>

                    <h3>Key Compliances & RBI Reporting</h3>
                    <ul className="fema-list">
                        <li>Term sheet support and structure finalisation</li>
                        <li>Drafting/review of transaction documents (subscription, SHA, debenture terms etc.)</li>
                        <li>Board/Shareholder approvals and end-to-end filings</li>
                        <li>Register maintenance, cap table hygiene and audit trail</li>
                        <li>Investor-ready documentation for due diligence and future rounds</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-1">
                        <img src={fundraisingImg} alt="Fundraising Instruments" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* Section 2: ECB Support */}
            <section className="fema-section reverse">
                <div className="fema-text-col">
                    <h2>External Commercial Borrowing (ECB) Support</h2>

                    <h3>Who can raise ECB?</h3>
                    <p>Eligible Indian companies/LLPs (as permitted) can raise loans from non-resident lenders, subject to ECB framework and conditions.</p>

                    <h3>When is ECB applicable?</h3>
                    <p>When you borrow funds from outside India for:</p>
                    <ul className="fema-list">
                        <li>Business expansion, capex, working capital (as permitted)</li>
                        <li>Refinancing existing debt (where allowed)</li>
                        <li>Structured cross-border funding requirements</li>
                    </ul>

                    <h3>Types of ECB covered</h3>
                    <ul className="fema-list">
                        <li>Foreign currency ECB and INR-denominated ECB</li>
                        <li>ECB from group companies / foreign lenders (as permitted)</li>
                        <li>ECB with security / guarantees (where applicable)</li>
                    </ul>

                    <h3>Key Structuring & Compliance Checkpoints</h3>
                    <ul className="fema-list">
                        <li>ECB eligibility assessment + structuring</li>
                        <li>Loan documentation review (terms, covenants, security)</li>
                        <li>RBI reporting support and end-to-end compliance closure</li>
                        <li>Ongoing compliance tracking for repayments, interest and reporting obligations</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-2">
                        <img src={ecbImg} alt="External Commercial Borrowing" />
                        <div className="dots-decoration dots-top-left"></div>
                    </div>
                </div>
            </section>

            {/* Section 3: Strategic Structuring */}
            <section className="fema-section">
                <div className="fema-text-col">
                    <h2>Strategic Structuring and Investor Readiness</h2>

                    <h3>Who is this for?</h3>
                    <ul className="fema-list">
                        <li>Startups and growth companies planning fundraising, expansion, restructuring, or investor onboarding.</li>
                        <li>Founders who want finance and compliance to be investor-friendly and scalable.</li>
                    </ul>

                    <h3>When is it needed?</h3>
                    <ul className="fema-list">
                        <li>Before raising capital (equity/CCPS/CCD), issuing ESOPs, or doing secondary transactions.</li>
                        <li>Before due diligence, audits, or board/investor reporting.</li>
                        <li>When structuring cross-border elements (FDI/ODI/FEMA).</li>
                    </ul>

                    <h3>What We Cover</h3>
                    <ul className="fema-list">
                        <li>Cap table planning and instrument structuring (Equity / CCPS / CCD / debt)</li>
                        <li>Governance setup: board processes, approvals, documentation hygiene</li>
                        <li>Financial readiness: clean books, MIS, unit economics, runway/burn visibility</li>
                        <li>Deal documentation coordination with legal and stakeholders</li>
                    </ul>

                    <h3>Outcome</h3>
                    <ul className="fema-list">
                        <li>Faster due diligence clearance</li>
                        <li>Strong investor confidence</li>
                        <li>Reduced compliance and structuring risks</li>
                        <li>Smooth execution for current and future funding rounds</li>
                    </ul>
                </div>
                <div className="fema-image-col">
                    <div className="fema-image-wrapper shape-3">
                        <img src={strategicImg} alt="Strategic Structuring" />
                        <div className="dots-decoration dots-bottom-right"></div>
                    </div>
                </div>
            </section>

            {/* Compliance & Filings Info Table/Grid - Optional extra section based on content */}
            <section className="fema-section" style={{ background: '#f9f9f9', width: '100%', maxWidth: '100%', padding: '60px 10%' }}>
                <div style={{ width: '100%' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Forms & Filings Applicable</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <h3>Companies Act, 2013 (ROC)</h3>
                            <ul className="fema-list">
                                <li>MGT-14, PAS-3, CHG-1 / CHG-9</li>
                                <li>SH-7, DPT-3</li>
                                <li>Maintenance of statutory registers</li>
                                <li>Issuance of certificates</li>
                            </ul>
                        </div>
                        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <h3>RBI / FEMA Reporting</h3>
                            <ul className="fema-list">
                                <li><strong>FC-GPR:</strong> For allotment to non-residents</li>
                                <li><strong>FC-TRS:</strong> For transfer resident ↔ non-resident</li>
                                <li><strong>Form ECB:</strong> Registration and reporting</li>
                                <li><strong>ECB-2 Return:</strong> Monthly reporting</li>
                                <li>Reporting for conversion events</li>
                            </ul>
                        </div>
                        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <h3>Limits & Thresholds</h3>
                            <p style={{ fontSize: '0.95rem', color: '#555' }}>Compliance depends on:</p>
                            <ul className="fema-list">
                                <li>Companies Act requirements & FEMA/RBI rules</li>
                                <li>Pricing/valuation, timelines, and reporting conditions</li>
                                <li>Proper classification as equity-linked vs debt-linked</li>
                                <li>Sectoral caps, entry routes, and all-in-cost ceilings (for ECB)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#fff' }}>
                <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Planning your next fundraise or structured deal?</h3>
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
                    Get Expert Structuring Advice
                </a>
            </div>
        </div>
    );
};

export default FundraisingStructuring;
