import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const StrategicMIS = () => {
    return (
        <div className="service-page">
            <div className="container">
                <div className="service-header">
                    <h1 className="service-title">Strategic MIS & Financial Planning Services</h1>
                    <p className="service-subtitle">
                        Scale your business with confidence. Our suite of financial planning and reporting services gives you the visibility and control needed for high growth.
                    </p>
                </div>

                {/* Introduction / Overview */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px', fontSize: '1.1rem', color: '#555' }}>
                    <p>
                        We provide a comprehensive framework for financial governance, from daily metric tracking to long-term strategic modelling.
                        Select a service area below to learn more.
                    </p>
                </div>

                <div className="service-grid">
                    {/* Card 1 */}
                    <Link to="/services/strategic-mis/reporting" style={{ textDecoration: 'none' }}>
                        <div className="service-detail-card" style={{ height: '100%', cursor: 'pointer' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📊</div>
                            <h3>MIS & Management Reporting</h3>
                            <p>Digital dashboards, investor reporting packs, and consolidated MIS.</p>
                            <span className="service-link" style={{ marginTop: 'auto', display: 'inline-block' }}>Explore Services →</span>
                        </div>
                    </Link>

                    {/* Card 2 */}
                    <Link to="/services/strategic-mis/kpi" style={{ textDecoration: 'none' }}>
                        <div className="service-detail-card" style={{ height: '100%', cursor: 'pointer' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎯</div>
                            <h3>Business Metrics & KPI Framework</h3>
                            <p>North Star metrics, OKRs, and SaaS metric tracking (LTV, CAC, Cohorts).</p>
                            <span className="service-link" style={{ marginTop: 'auto', display: 'inline-block' }}>Explore Services →</span>
                        </div>
                    </Link>

                    {/* Card 3 */}
                    <Link to="/services/strategic-mis/financial-modelling" style={{ textDecoration: 'none' }}>
                        <div className="service-detail-card" style={{ height: '100%', cursor: 'pointer' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📉</div>
                            <h3>Financial Modelling & Scenarios</h3>
                            <p>3-5 Year projections, valuation models, and fundraising readiness.</p>
                            <span className="service-link" style={{ marginTop: 'auto', display: 'inline-block' }}>Explore Services →</span>
                        </div>
                    </Link>

                    {/* Card 4 */}
                    <Link to="/services/strategic-mis/aop" style={{ textDecoration: 'none' }}>
                        <div className="service-detail-card" style={{ height: '100%', cursor: 'pointer' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🗓️</div>
                            <h3>Annual Operating Plan (AOP)</h3>
                            <p>Bottom-up budgeting, resource allocation, and revenue planning.</p>
                            <span className="service-link" style={{ marginTop: 'auto', display: 'inline-block' }}>Explore Services →</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StrategicMIS;
