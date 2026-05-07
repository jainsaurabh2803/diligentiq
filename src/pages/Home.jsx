import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import misGrowthImg from '../assets/mis_growth.png';
import maMergerImg from '../assets/ma_merger.png';
import misFinancialImg from '../assets/mis_financial.png';
import misOpsImg from '../assets/mis_ops.png';

const focusAreas = [
    {
        title: 'Transaction & Regulatory Support',
        shortTitle: 'Transaction Support',
        description: 'Navigate fundraising structures, FEMA / RBI compliance, M&A execution, and key shareholder actions with confidence.',
        shortDescription: 'Fundraising structures, FEMA / RBI compliance, and deal execution support.',
        bullets: ['FEMA / RBI Advisory', 'Fundraising Instruments', 'M&A / Shareholder Actions'],
        image: maMergerImg,
        link: '/services/transaction-regulatory-support',
    },
    {
        title: 'Investment Readiness & Financial Assurance',
        shortTitle: 'Investment Readiness',
        description: 'Prepare for diligence with valuation, legal / tax review, audit consolidation, and investor-ready financial reporting.',
        shortDescription: 'Due diligence, valuation, and financial assurance for investor readiness.',
        bullets: ['Due Diligence', 'Business Valuation', 'Audit & Consolidation'],
        image: misFinancialImg,
        link: '/services/investment-readiness',
    },
    {
        title: 'Strategic MIS & Financial Planning',
        shortTitle: 'MIS & Planning',
        description: 'Strengthen visibility through dashboards, KPI frameworks, financial modelling, and annual operating planning.',
        shortDescription: 'MIS, KPI frameworks, and financial planning for scale-stage teams.',
        bullets: ['MIS & Reporting', 'KPI Framework', 'Financial Modelling & AOP'],
        image: misOpsImg,
        link: '/services/strategic-mis',
    },
];

const workingPrinciples = [
    {
        title: 'Decision-ready outputs',
        text: 'We convert complex diligence inputs into focused reports, trackers, and action points that investors and founders can actually use.',
    },
    {
        title: 'Cross-functional coverage',
        text: 'Legal, financial, compliance, and MIS perspectives are aligned so every workstream speaks to the same transaction reality.',
    },
    {
        title: 'Built for speed and clarity',
        text: 'Our process is structured for live transactions, fundraising timelines, and management teams that need clarity without jargon.',
    },
];

const Home = () => {
    return (
        <div className="home-page home-redesign">
            <section className="home-showcase">
                <div className="container home-layout">
                    <div className="hero-showcase-card fade-in">
                        <div className="hero-showcase-copy">
                            <span className="home-kicker">INVESTOR-FIRST DILIGENCE</span>
                            <h1 className="hero-showcase-title">Data-backed diligence, future-ready capital decisions.</h1>
                            <p className="hero-showcase-desc">
                                We help founders and investors move from fragmented legal, financial, and MIS inputs to a clear,
                                structured view of what matters most for transactions and growth.
                            </p>
                            <div className="hero-showcase-actions">
                                <Link to="/services" className="home-dark-btn">View diligence offerings</Link>
                                <Link to="/contact" className="home-light-btn">Book a 30-min discovery call</Link>
                            </div>
                            <div className="hero-chip-row">
                                <span>Transaction support</span>
                                <span>Investment readiness</span>
                                <span>MIS & financial planning</span>
                            </div>
                        </div>

                        <div className="hero-showcase-visual">
                            <div className="hero-visual-frame">
                                <img src={misGrowthImg} alt="Diligent Capitals dashboard and reporting preview" />
                            </div>
                        </div>
                    </div>

                    <aside className="home-focus-panel fade-in">
                        <div className="panel-heading">
                            <span className="panel-kicker">OUR SERVICES</span>
                            <h2>Core Focus Areas</h2>
                        </div>

                        <div className="focus-mini-grid">
                            {focusAreas.map((area) => (
                                <Link key={area.title} to={area.link} className="focus-mini-card">
                                    <img src={area.image} alt={area.title} />
                                    <div className="focus-mini-body">
                                        <h3>{area.shortTitle}</h3>
                                        <p>{area.shortDescription}</p>
                                        <span>Learn more →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </aside>

                    <section className="home-track-panel fade-in">
                        <div className="panel-heading panel-heading-center">
                            <span className="panel-kicker">WHAT WE DO</span>
                            <h2>Service Tracks Built for Deals and Scale</h2>
                        </div>

                        <div className="service-track-grid">
                            {focusAreas.map((area) => (
                                <Link key={area.title} to={area.link} className="service-track-card">
                                    <img src={area.image} alt={area.title} className="service-track-image" />
                                    <div className="service-track-body">
                                        <h3>{area.shortTitle}</h3>
                                        <p>{area.description}</p>
                                        <ul className="track-list">
                                            {area.bullets.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                        <span className="service-track-link">Explore services →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="home-trust-panel fade-in">
                        <div className="panel-heading panel-heading-center">
                            <span className="panel-kicker">WHY DILIGENT CAPITALS</span>
                            <h2>How We Support Investors and Founders</h2>
                        </div>

                        <div className="trust-grid">
                            {workingPrinciples.map((item) => (
                                <div key={item.title} className="trust-card">
                                    <div className="trust-quote">“</div>
                                    <p>{item.text}</p>
                                    <strong>{item.title}</strong>
                                </div>
                            ))}
                        </div>

                        <div className="home-bottom-cta">
                            <div>
                                <h3>Need a tailored scope?</h3>
                                <p>
                                    Tell us where you are in the transaction or planning cycle, and we’ll suggest the right diligence,
                                    reporting, or financial planning path.
                                </p>
                            </div>
                            <Link to="/about-us" className="home-dark-btn home-dark-btn-compact">Meet the team</Link>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Home;
