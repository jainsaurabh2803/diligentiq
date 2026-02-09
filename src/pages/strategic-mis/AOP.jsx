import React from 'react';
import './SubService.css';

const AOP = () => {
    return (
        <div className="sub-service-page">
            <div className="sub-service-header">
                <div className="header-content">
                    <h1 className="sub-service-title">Annual Operating Plan (AOP)</h1>
                    <p className="sub-service-desc">
                        Turn strategy into execution with a detailed, bottom-up annual budget and operating plan.
                    </p>
                </div>
            </div>

            <div className="container">
                <section className="detail-section">
                    <h2 className="section-title">Detailed Budgeting</h2>
                    <div className="content-grid">
                        <div className="text-content">
                            <ul className="feature-list">
                                <li><strong>Bottom-up Budgeting:</strong> Build plans from the department level up to ensure buy-in and accuracy.</li>
                                <li><strong>Revenue Planning:</strong> Detailed assumptions driving sales, marketing, and expansion revenue.</li>
                                <li><strong>Resource Allocation:</strong> Headcount planning and department-wise expense caps.</li>
                                <li><strong>Variance Tracking:</strong> Framework to track Actuals vs. AOP on a monthly basis.</li>
                            </ul>
                        </div>
                        <div className="visual-content">
                            <div style={{ height: '300px', background: '#f3e5f5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7b1fa2' }}>
                                [Annual Roadmap Timeline]
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AOP;
