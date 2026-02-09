import React from 'react';
import './SubService.css';
import dashboardImg from '../../assets/mis_financial.png';
import financialImg from '../../assets/mis_financial.png';
import growthImg from '../../assets/mis_growth.png';
import operationalImg from '../../assets/mis_ops.png';
import investorImg from '../../assets/mis_investor.png';
import unitEconomicsImg from '../../assets/asset_purchase.png'; // Keeping this if still needed elsewhere, or could replace
import kpiFunnelImg from '../../assets/kpi_funnel.png';
import kpiCohortImg from '../../assets/kpi_cohort.png';
import kpiUnitEconImg from '../../assets/kpi_unitecon.png';

const MISReporting = () => {
    return (
        <div className="sub-service-page">
            {/* Header */}
            <div className="sub-service-header">
                <div className="header-content">
                    <h1 className="sub-service-title">MIS & Management Reporting</h1>
                    <p className="sub-service-desc">
                        Transform raw data into actionable insights with our automated, access-controlled dashboards and comprehensive reporting packs.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container">
                {/* Section 1: Core Services */}
                <section className="detail-section">
                    <h2 className="section-title">Comprehensive Reporting Solutions</h2>
                    <div className="content-grid">
                        <div className="text-content">
                            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                                We build robust reporting infrastructures that give you a 360-degree view of your business health, tailored for both internal management and external investors.
                            </p>
                            <ul className="feature-list">
                                <li>Digital Dashboard for MIS highlighting key metrics along with graphs and infographics and charts for internal and external reporting.</li>
                                <li>Access controlled Dashboard for Investor and Internal purpose.</li>
                                <li>Board & Investor Reporting Packs.</li>
                                <li>Department-wise MIS (Sales, Finance, Ops, Marketing).</li>
                                <li>Cash Flow & Working Capital MIS.</li>
                                <li>Group Company consolidated MIS.</li>
                                <li>Unit Economics (CM1, CM2, CM3 & Unit Economics).</li>
                            </ul>
                        </div>
                        <div className="visual-content">
                            {/* Placeholder for Dashboard Animation/Image */}
                            <div style={{ height: '300px', background: '#f4f4f4', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                <img src={dashboardImg} alt="Digital Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Modern Dashboard Designs */}
                <section className="detail-section" style={{ background: '#f8f9fa', padding: '60px 0' }}>
                    <div className="container">
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Modern Information Systems & Dashboards</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                                <img src={financialImg} alt="Financial Dashboard" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                <div style={{ padding: '15px', background: '#fff' }}>
                                    <h4 style={{ margin: '0 0 5px' }}>Financial Overview</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Real-time profit & loss tracking</p>
                                </div>
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                                <img src={growthImg} alt="Growth Analytics" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                <div style={{ padding: '15px', background: '#fff' }}>
                                    <h4 style={{ margin: '0 0 5px' }}>Growth Analytics</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Revenue trends and projections</p>
                                </div>
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                                <img src={operationalImg} alt="Operational Metrics" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                <div style={{ padding: '15px', background: '#fff' }}>
                                    <h4 style={{ margin: '0 0 5px' }}>Operational Metrics</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Efficiency and KPI monitoring</p>
                                </div>
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                                <img src={investorImg} alt="Investor Reporting" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                <div style={{ padding: '15px', background: '#fff' }}>
                                    <h4 style={{ margin: '0 0 5px' }}>Investor Reporting</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Consolidated views for stakeholders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2.5: Business Metrics & KPI Framework */}
                <section className="detail-section">
                    <div className="content-grid">
                        <div className="visual-content">
                            <div style={{ display: 'grid', gap: '20px' }}>
                                <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
                                    <img src={kpiFunnelImg} alt="Marketing Funnel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div style={{ height: '180px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
                                        <img src={kpiCohortImg} alt="Cohort Analysis" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ height: '180px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
                                        <img src={kpiUnitEconImg} alt="Unit Economics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h2 className="section-title">Business Metrics & KPI Framework</h2>
                            <p style={{ marginBottom: '20px' }}>
                                We design and implement a robust KPI architecture to track performance, align teams, and drive strategic decision-making.
                            </p>

                            <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#2c3e50' }}>Services</h4>
                            <ul className="feature-list" style={{ marginBottom: '20px' }}>
                                <li>KPI Identification (Role-wise & Function-wise)</li>
                                <li>Leading vs Lagging Indicator Framework</li>
                                <li>North Star Metric Definition</li>
                                <li>OKR Design & Alignment</li>
                                <li>Metric Ownership & Accountability Mapping</li>
                                <li>KPI Review Cadence & Governance Setup</li>
                            </ul>

                            <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#2c3e50' }}>Key Metrics Tracked</h4>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#555', marginBottom: '20px' }}>
                                Cohorts, Retention, Conversion Funnels (Marketing & Sales), CAC/CRC (Organic, Inorganic, Blended), Churn Rate, MRR/ARR, MAU/DAU, LTV, Payback Period, Growth Multiplier, and Valuation (Entity & Group Level).
                            </p>

                            <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#2c3e50' }}>Deliverables</h4>
                            <ul className="feature-list">
                                <li>KPI Dictionary & Definitions</li>
                                <li>Metric-to-Decision Mapping</li>
                                <li>Review Rhythm (Weekly / Monthly / Quarterly)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 3: Detailed Analysis (Unit Economics moved here) */}
                <section className="detail-section">
                    <div className="content-grid">
                        <div className="text-content">
                            <h2 className="section-title">Unit Economics Deep Dive</h2>
                            <p>We go beyond the top line to analyze the fundamental profitability of your business model.</p>
                            <ul className="feature-list" style={{ marginTop: '20px' }}>
                                <li>Contribution Margin Analysis (CM1, CM2, CM3).</li>
                                <li>Customer Lifetime Value (LTV) calculations.</li>
                                <li>Customer Acquisition Cost (CAC) breakdown.</li>
                                <li>Profitability analysis at a per-unit level.</li>
                            </ul>
                        </div>
                        <div className="visual-content">
                            <div style={{ height: '300px', background: '#eef', borderRadius: '8px', overflow: 'hidden' }}>
                                <img src={unitEconomicsImg} alt="Unit Economics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Deliverables */}
                <div className="deliverables-box slide-up">
                    <h3>Key Deliverables</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <div>
                            <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '10px' }}>Automated Dashboards</strong>
                            <p style={{ opacity: 0.9 }}>Live dashboards on Excel, Power BI, or Web platforms.</p>
                        </div>
                        <div>
                            <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '10px' }}>Standard Templates</strong>
                            <p style={{ opacity: 0.9 }}>Standardized formats for consistent monthly reporting.</p>
                        </div>
                        <div>
                            <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '10px' }}>Insight Notes</strong>
                            <p style={{ opacity: 0.9 }}>Commentary & strategic insights—not just raw numbers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MISReporting;
