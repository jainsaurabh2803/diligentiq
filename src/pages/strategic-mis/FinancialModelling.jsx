import React from 'react';
import './SubService.css';
import misFinancialImg from '../../assets/mis_financial.png';
import fundraisingInstrumentsImg from '../../assets/fundraising_instruments.png';

const FinancialModelling = () => {
    return (
        <div className="sub-service-page">
            <div className="sub-service-header">
                <div className="header-content">
                    <h1 className="sub-service-title">Financial Modelling & Scenario Planning</h1>
                    <p className="sub-service-desc">
                        Robust financial models that withstand investor scrutiny and help you navigate uncertain markets.
                    </p>
                </div>
            </div>

            <div className="container">
                <section className="detail-section">
                    <h2 className="section-title">Future-Proof Your Strategy</h2>
                    <div className="content-grid">
                        <div className="text-content">
                            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                                Whether raising capital or planning cash flows, our models provide the granular detail and flexibility you need.
                            </p>
                            <ul className="feature-list">
                                <li><strong>3-5 Year Projections:</strong> Detailed P&L, Balance Sheet, and Cash Flow forecasts.</li>
                                <li><strong>Scenario Analysis:</strong> Stress-test your business with Best, Base, and Worst-case scenarios.</li>
                                <li><strong>Runway Analysis:</strong> Precise cash burn calculations to plan fundraising timing.</li>
                                <li><strong>Fundraising Ready:</strong> formatted specifically for VC/PE due diligence.</li>
                            </ul>
                        </div>
                        <div className="visual-content">
                            <div style={{ borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src={misFinancialImg}
                                    alt="Scenario Waterfall Chart"
                                    style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'contain', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="detail-section">
                    <div className="content-grid">
                        <div className="visual-content">
                            <div style={{ borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src={fundraisingInstrumentsImg}
                                    alt="Valuation Model Output"
                                    style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'contain', display: 'block' }}
                                />
                            </div>
                        </div>
                        <div className="text-content">
                            <h2 className="section-title">Valuation & Cap Table</h2>
                            <p>Understand the value of your business and the impact of future rounds.</p>
                            <ul className="feature-list" style={{ marginTop: '20px' }}>
                                <li>DCF and Relative Valuation modelling.</li>
                                <li>Cap Table management and dilution scenarios.</li>
                                <li>ESOP pool planning and impact analysis.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FinancialModelling;
