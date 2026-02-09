import React from 'react';
import './ServicePage.css';

const InvestmentReadiness = () => {
    return (
        <div className="service-page">
            <div className="container">
                <div className="service-header">
                    <h1 className="service-title">Investment Readiness & Financial Assurance</h1>
                    <p className="service-subtitle">
                        Preparing your business for investment with rigorous financial assurance and strategic valuation.
                    </p>
                </div>

                <div className="service-grid">
                    {/* Card 1 */}
                    <div className="service-detail-card">
                        <h3>International Taxation</h3>
                        <ul className="service-list">
                            <li>Transfer Pricing Advisory & Study</li>
                            <li>TDS on Outward Remittances</li>
                            <li>Equalization Levy & Taxation of Expatriate</li>
                            <li>Tax Residency Certificate (TRC)</li>
                            <li>TDS on Properties for NRIs</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="service-detail-card">
                        <h3>Valuation of the Business</h3>
                        <ul className="service-list">
                            <li>Registered Valuer Reports (SFA)</li>
                            <li>Discounted Cash Flow (DCF) & Relative Valuation</li>
                            <li>Regulatory & Commercial Valuation</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="service-detail-card">
                        <h3>Due Diligence (Investor-Focused)</h3>
                        <ul className="service-list">
                            <li>Scope of Due Diligence</li>
                            <li>Legal Due Diligence</li>
                            <li>Financial & Tax Due Diligence (Direct/Indirect)</li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="service-detail-card">
                        <h3>Audit, Taxation & Consolidation</h3>
                        <ul className="service-list">
                            <li>Financial Audit & Tax Audit</li>
                            <li>Internal Audit</li>
                            <li>Consolidation of Financials</li>
                        </ul>
                    </div>

                    {/* Card 5 */}
                    <div className="service-detail-card">
                        <h3>Accounting and Compliances</h3>
                        <ul className="service-list">
                            <li>Day-to-day maintenance of books of accounts</li>
                            <li>Ongoing compliance alignment (GST, TDS, statutory dues)</li>
                            <li>Secretarial maintenance (statutory registers, resolutions)</li>
                            <li>Books maintained in due-diligence-friendly format</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentReadiness;
