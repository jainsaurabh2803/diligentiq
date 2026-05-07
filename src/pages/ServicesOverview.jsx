import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';
import maMergerImg from '../assets/ma_merger.png';
import misFinancialImg from '../assets/mis_financial.png';
import misOpsImg from '../assets/mis_ops.png';

const serviceTracks = [
    {
        title: 'Transaction & Regulatory Support',
        description: 'Support across deal structuring, FEMA / RBI compliance, M&A execution, and shareholder actions.',
        bullets: ['FEMA / RBI Advisory (ODI & FDI)', 'Fundraising Instruments & Deal Structuring', 'M&A / Merger / Slump Sale Execution'],
        image: maMergerImg,
        link: '/services/transaction-regulatory-support',
    },
    {
        title: 'Investment Readiness & Financial Assurance',
        description: 'Prepare for investor scrutiny with due diligence support, valuation, audit consolidation, and finance readiness.',
        bullets: ['Investor-focused Due Diligence', 'Business Valuation & Financial Review', 'Audit, Taxation & Consolidation'],
        image: misFinancialImg,
        link: '/services/investment-readiness',
    },
    {
        title: 'Strategic MIS & Financial Planning',
        description: 'Build reporting discipline, KPI visibility, and forward-looking financial planning for growth-stage execution.',
        bullets: ['MIS & Management Reporting', 'Business Metrics & KPI Framework', 'Financial Modelling & AOP'],
        image: misOpsImg,
        link: '/services/strategic-mis',
    },
];

const deliveryPoints = [
    {
        title: 'Decision-ready outputs',
        text: 'We translate complex diligence findings into practical reports, trackers, and management-ready action points.',
    },
    {
        title: 'Cross-functional execution',
        text: 'Legal, regulatory, analytics, MIS, and finance workstreams are aligned so investors and founders get one coherent view.',
    },
    {
        title: 'Built for transactions and scale',
        text: 'From pre-deal diligence to post-investment reporting, the work is structured for speed, clarity, and governance.',
    },
];

const ServicesOverview = () => {
    return (
        <div className="service-page">
            <div className="container">
                <div className="service-header">
                    <h1 className="service-title">Services Overview</h1>
                    <p className="service-subtitle">
                        Explore our three core service lines and choose the path that fits your current transaction,
                        investment readiness, or financial planning needs.
                    </p>
                </div>

                <div className="service-overview-grid">
                    {serviceTracks.map((service) => (
                        <div key={service.title} className="service-overview-card">
                            <img src={service.image} alt={service.title} className="service-card-image" />
                            <div className="service-card-body">
                                <h3>{service.title}</h3>
                                <p className="service-card-desc">{service.description}</p>
                                <ul className="service-list service-card-list">
                                    {service.bullets.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <Link to={service.link} className="service-overview-link">
                                    Explore services →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="services-summary">
                    <h2 className="section-title">How we support you</h2>
                    <div className="services-summary-grid">
                        {deliveryPoints.map((point) => (
                            <div key={point.title} className="services-summary-card">
                                <h3>{point.title}</h3>
                                <p>{point.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServicesOverview;