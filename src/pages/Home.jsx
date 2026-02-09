import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content fade-in">
                        <span className="hero-subtitle">INVESTOR-FIRST DILIGENCE</span>
                        <h1 className="hero-title">
                            Clear, actionable due diligence for every transaction.
                        </h1>
                        <p className="hero-desc">
                            We combine structured analytics, MIS review and pragmatic legal checks to build a single,
                            investor-friendly view of your target company – without drowning you in jargon.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/contact" className="btn btn-primary">Book a 30-min discovery call</Link>
                            <Link to="/services" className="btn btn-secondary" style={{ marginLeft: '1rem', background: 'transparent', border: '1px solid white', color: 'white' }}>View diligence offerings</Link>
                        </div>
                        <p className="hero-footer">
                            Backed by 6+ years of analytics & transaction experience across SaaS, consumer and healthcare.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section services-section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h2 className="text-primary">Our Expertise</h2>
                        <p>Comprehensive support for every stage of your business lifecycle.</p>
                    </div>

                    <div className="grid-3">
                        {/* Service 1 */}
                        <div className="service-card">
                            <div className="service-icon">📊</div>
                            <h3>High-value “Transaction & Regulatory Support"</h3>
                            <p>FEMA / RBI Advisory, Fundraising Instruments, M&A Execution, and Capital Restructuring.</p>
                            <Link to="/services/transaction-regulatory-support" className="service-link">Read More →</Link>
                        </div>

                        {/* Service 2 */}
                        <div className="service-card">
                            <div className="service-icon">💰</div>
                            <h3>Investment Readiness & Financial Assurance</h3>
                            <p>Valuation, Due Diligence (Financial, Legal, Tax), and Audit Consolidation.</p>
                            <Link to="/services/investment-readiness" className="service-link">Read More →</Link>
                        </div>

                        {/* Service 3 */}
                        <div className="service-card">
                            <div className="service-icon">📈</div>
                            <h3>Strategic MIS & Financial Planning Services</h3>
                            <p>Strategic MIS, KPI Frameworks, Financial Modelling, and Annual Operating Plans.</p>
                            <Link to="/services/strategic-mis" className="service-link">Read More →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section about-preview">
                <div className="container">
                    <div className="flex-between" style={{ gap: '4rem' }}>
                        <div style={{ flex: 1 }}>
                            <h2 className="text-secondary">About Diligent Capitals</h2>
                            <p style={{ margin: '1rem 0' }}>
                                We are a team of dedicated professionals committed to providing top-tier corporate diligence and legal services.
                                Our mission is to simplify complex financial and regulatory landscapes for investors and founders alike.
                            </p>
                            <Link to="/about-us" className="btn btn-primary">Learn More About Us</Link>
                        </div>
                        <div style={{ flex: 1, height: '300px', background: '#ddd', borderRadius: 'var(--border-radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#888' }}>[Placeholder Image]</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
