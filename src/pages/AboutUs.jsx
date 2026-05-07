import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import misInvestorImg from '../assets/mis_investor.png';

const founders = [
    {
        name: 'Mitesh Agarwal',
        role: 'Co-Founder',
        experience: '10+ Years of Experience',
        expertise: 'Data room strategy, analytics, and investor-facing diligence workflows.',
    },
    {
        name: 'Navneet Agarwal',
        role: 'Co-Founder',
        experience: '15+ Years of Experience',
        expertise: 'Legal, CA, CS, and regulatory execution across transactions and compliance.',
    },
];

const differentiators = [
    {
        title: 'Investor-Focused',
        text: 'We understand what investors need to evaluate, question, and close — so our output is structured for decisions, not just documentation.',
    },
    {
        title: 'Fast Turnaround',
        text: 'We work at transaction pace, helping teams move through diligence, reporting, and planning without unnecessary back-and-forth.',
    },
    {
        title: 'Compliance First',
        text: 'We bring legal, financial, and governance discipline into every engagement to reduce surprises and protect long-term value.',
    },
];

const AboutUs = () => {
    return (
        <div className="about-page">
            <section className="about-hero section">
                <div className="container about-shell">
                    <div className="about-hero-card fade-in">
                        <div className="about-hero-copy">
                            <span className="about-kicker">ABOUT DILIGENT CAPITALS</span>
                            <h1>Who we are, and how we help teams move with clarity.</h1>
                            <p>
                                Diligent Capitals is a corporate diligence and legal services firm built to bridge the gap
                                between complex regulatory requirements, investor expectations, and business growth.
                            </p>
                            <div className="about-hero-tags">
                                <span>Investor-first diligence</span>
                                <span>Regulatory clarity</span>
                                <span>Actionable reporting</span>
                            </div>
                        </div>

                        <div className="about-hero-visual">
                            <div className="about-hero-frame">
                                <img src={misInvestorImg} alt="Diligent Capitals founders and investor support visual" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-story-section">
                <div className="container about-shell">
                    <div className="about-story-grid">
                        <div className="about-story-card">
                            <span className="about-section-kicker">OUR STORY</span>
                            <h2>Built for transactions, diligence, and growth-stage execution.</h2>
                            <p>
                                We simplify complex financial, legal, and operational inputs into structured outputs that
                                founders and investors can act on. Our work is designed to reduce noise, surface risks early,
                                and improve confidence during critical business decisions.
                            </p>
                            <Link to="/contact" className="about-dark-btn">Talk to our team</Link>
                        </div>

                        <div className="about-value-grid">
                            <div className="about-value-card">
                                <span className="about-section-kicker">OUR MISSION</span>
                                <h3>Enable confident decisions</h3>
                                <p>
                                    To provide clear, actionable insights that empower investors and founders to make informed decisions with confidence.
                                </p>
                            </div>

                            <div className="about-value-card">
                                <span className="about-section-kicker">OUR VISION</span>
                                <h3>Be a trusted transaction partner</h3>
                                <p>
                                    To be the most trusted partner for transaction advisory, diligence, and regulatory compliance in the ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-founders-section">
                <div className="container about-shell">
                    <div className="about-section-heading">
                        <span className="about-section-kicker">LEADERSHIP</span>
                        <h2>Our founders</h2>
                        <p>
                            Diligent Capitals combines complementary strengths across analytics, diligence execution,
                            regulatory depth, and investor communication.
                        </p>
                    </div>

                    <div className="about-founders-grid">
                        {founders.map((founder) => (
                            <div key={founder.name} className="about-founder-card">
                                <div className="about-founder-badge">{founder.name.split(' ').map((part) => part[0]).join('')}</div>
                                <h3>{founder.name}</h3>
                                <p className="about-founder-role">{founder.role}</p>
                                <p className="about-founder-exp">{founder.experience}</p>
                                <p className="about-founder-text">{founder.expertise}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section about-differentiators-section">
                <div className="container about-shell">
                    <div className="about-section-heading about-section-heading-centered">
                        <span className="about-section-kicker">WHY CHOOSE US</span>
                        <h2>Why teams work with Diligent Capitals</h2>
                    </div>

                    <div className="about-differentiators-grid">
                        {differentiators.map((item, index) => (
                            <div key={item.title} className="about-differentiator-card">
                                <div className="about-differentiator-number">0{index + 1}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
