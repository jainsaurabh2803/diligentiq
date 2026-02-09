import React from 'react';
import './ServicePage.css';

const TransactionRegulatory = () => {
    return (
        <div className="service-page">
            <div className="container">
                <div className="service-header">
                    <h1 className="service-title">High-value “Transaction & Regulatory Support"</h1>
                    <p className="service-subtitle">
                        Expert guidance on navigating complex regulatory landscapes and structuring deals for long-term success.
                    </p>
                </div>

                <div className="service-grid">
                    {/* Card 1 */}
                    <div className="service-detail-card">
                        <h3>FEMA / RBI Advisory (ODI & FDI)</h3>
                        <ul className="service-list">
                            <li>Overseas Direct Investment (ODI) compliances</li>
                            <li>Foreign Direct Investment (FDI) structuring & reporting</li>
                            <li>RBI / FEMA Reporting & Documentation Support</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="service-detail-card">
                        <h3>Fundraising Instruments & Deal Structuring</h3>
                        <ul className="service-list">
                            <li>CCD / OCD / CCPS / NCD / CN documentation & compliance</li>
                            <li>External Commercial Borrowing (ECB) support</li>
                            <li>Strategic structuring and investor readiness</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="service-detail-card">
                        <h3>Strategic Alliances & Business Transactions</h3>
                        <ul className="service-list">
                            <li>Strategic alliance / partnership structuring</li>
                            <li>Asset Purchase Agreements (APA)</li>
                            <li>Secondary transactions</li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="service-detail-card">
                        <h3>M&A / Merger / Slump Sale Execution</h3>
                        <ul className="service-list">
                            <li>Slump sale</li>
                            <li>Mergers & Acquisitions</li>
                            <li>NCLT process support</li>
                        </ul>
                    </div>

                    {/* Card 5 */}
                    <div className="service-detail-card">
                        <h3>Capital Restructuring & Shareholder Actions</h3>
                        <ul className="service-list">
                            <li>Buyback of shares</li>
                            <li>Bonus issue & Rights issue</li>
                            <li>All board/shareholder approvals and filings</li>
                            <li>ESOP – Structuring, Execution & Compliance Support</li>
                            <li>Founder’s Agreement – Execution & Risk Control</li>
                        </ul>
                    </div>

                    {/* Card 6 */}
                    <div className="service-detail-card">
                        <h3>Entity Lifecycle Services</h3>
                        <ul className="service-list">
                            <li>Incorporation of Company / LLP / Partnership / NGO</li>
                            <li>Closure support: dissolution / strike-off</li>
                            <li>Complete documentation and filings</li>
                        </ul>
                    </div>

                    {/* Card 7 */}
                    <div className="service-detail-card">
                        <h3>Notices, Scrutiny & Regulatory Replies</h3>
                        <ul className="service-list">
                            <li>Handling notices and replies for: Income Tax, GST</li>
                            <li>Labour laws, ROC / NCLT</li>
                            <li>RBI / FEMA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionRegulatory;
