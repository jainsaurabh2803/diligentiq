import React from 'react';
import './SubService.css';

const KPIFramework = () => {
    return (
        <div className="sub-service-page">
            {/* Header */}
            <div className="sub-service-header">
                <div className="header-content">
                    <h1 className="sub-service-title">Business Metrics & KPI Framework</h1>
                    <p className="sub-service-desc">
                        Align your organization with clear, trackable metrics. From North Star definitions to daily operational tracking.
                    </p>
                </div>
            </div>

            <div className="container">
                {/* Core Services */}
                <section className="detail-section">
                    <h2 className="section-title">Strategic Metric Alignment</h2>
                    <div className="content-grid">
                        <div className="text-content">
                            <ul className="feature-list">
                                <li><strong>KPI Identification:</strong> Role-wise & Function-wise mapping.</li>
                                <li><strong>Leading vs Lagging:</strong> Balanced indicator framework for proactive management.</li>
                                <li><strong>North Star Metric:</strong> Definition & alignment of the single most impact metric.</li>
                                <li><strong>OKR Design:</strong> Objectives and Key Results design & organizational alignment.</li>
                                <li><strong>Accountability:</strong> Metric ownership mapping to ensure clear responsibility.</li>
                                <li><strong>Governance:</strong> Review cadence setup (Weekly/Monthly/Quarterly).</li>
                            </ul>
                        </div>
                        <div className="visual-content">
                            <div style={{ height: '300px', background: '#fff0f5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cc3366' }}>
                                [KPI Hierarchy Diagram]
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Metrics */}
                <section className="detail-section">
                    <div className="content-grid">
                        <div className="visual-content">
                            <div style={{ height: '300px', background: '#f0f8ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0066cc' }}>
                                [SaaS Metrics Funnel]
                            </div>
                        </div>
                        <div className="text-content">
                            <h2 className="section-title">Key SaaS & Business Metrics</h2>
                            <p>We help you compute and track the metrics that matter most to investors.</p>
                            <ul className="feature-list" style={{ marginTop: '20px' }}>
                                <li>Cohorts, Retention, and Churn Rate analysis.</li>
                                <li>Marketing & Conversion Funnel tracking.</li>
                                <li>CAC/CRC Analysis: Organic, Inorganic, and Blended computation.</li>
                                <li>User Level P/L: MRR, MAU, DAU, ARR.</li>
                                <li>Valuation Drivers: CAC to LTV, Payback period, Growth multipliers.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Deliverables */}
                <div className="deliverables-box">
                    <h3>Your Framework Deliverables</h3>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '20px' }}>
                        <li>
                            <h4 style={{ marginBottom: '10px' }}>KPI Dictionary</h4>
                            <p style={{ opacity: 0.8 }}>Clear definitions to ensure everyone speaks the same data language.</p>
                        </li>
                        <li>
                            <h4 style={{ marginBottom: '10px' }}>Decision Mapping</h4>
                            <p style={{ opacity: 0.8 }}>Framework connecting metrics to specific business decisions.</p>
                        </li>
                        <li>
                            <h4 style={{ marginBottom: '10px' }}>Review Rhythm</h4>
                            <p style={{ opacity: 0.8 }}>Structured agendas for Weekly, Monthly, and Quarterly reviews.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default KPIFramework;
