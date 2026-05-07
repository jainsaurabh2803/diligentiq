import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-page">
            {/* Header Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-dark)', color: 'white', padding: '100px 0' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: 'white' }}>Who We Are</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '800px', opacity: '0.9' }}>
                        Diligent Capitals is a premier corporate diligence and legal services firm.
                        We bridge the gap between complex regulatory requirements and business growth.
                    </p>
                </div>
            </section>

            {/* Mission/Vision */}
            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: 'var(--shadow-card)' }}>
                            <h2 className="text-primary">Our Mission</h2>
                            <p>To provide clear, actionable insights that empower investors and founders to make informed decisions with confidence.</p>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: 'var(--shadow-card)' }}>
                            <h2 className="text-secondary">Our Vision</h2>
                            <p>To be the most trusted partner for transaction advisory and regulatory compliance in the ecosystem.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Founders */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '40px' }}>Our Founders</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: 'var(--shadow-card)' }}>
                            <h3 className="text-primary" style={{ marginBottom: '4px' }}>Saurabh Jain</h3>
                            <p style={{ color: 'var(--color-dark)', fontWeight: 600, marginBottom: '8px' }}>Co-Founder</p>
                            <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '12px' }}>10+ Years of Experience</p>
                            <p>Data Room, Analytics</p>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: 'var(--shadow-card)' }}>
                            <h3 className="text-primary" style={{ marginBottom: '4px' }}>Navneet Agarwal</h3>
                            <p style={{ color: 'var(--color-dark)', fontWeight: 600, marginBottom: '8px' }}>Co-Founder</p>
                            <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '12px' }}>15+ Years of Experience</p>
                            <p>Legal, CA, CS</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '40px' }}>Why Choose Diligent Capitals?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <div className="text-center">
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎯</div>
                            <h3>Investor-Focused</h3>
                            <p>We understand what investors look for and structure our output accordingly.</p>
                        </div>
                        <div className="text-center">
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⚡</div>
                            <h3>Fast Turnaround</h3>
                            <p>We move at the speed of your deal, ensuring no delays in closure.</p>
                        </div>
                        <div className="text-center">
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🛡️</div>
                            <h3>Compliance First</h3>
                            <p>Zero tolerance for non-compliance, protecting your long-term interests.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
