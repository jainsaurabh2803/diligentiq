import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          Diligent Capitals
        </Link>

        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>

            <li className="dropdown">
              <span className="dropdown-trigger">Services ▾</span>
              {/* Mega Menu Container */}
              <div className="mega-menu">
                <div className="container mega-menu-content">

                  {/* Column 1: Transaction & Regulatory (Spanning 2 Grid Columns for 7 items) */}
                  <div className="mega-col" style={{ gridColumn: 'span 2' }}>
                    <h3 className="mega-title">High-value “Transaction & Regulatory Support"</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                      {/* Sub-Col A */}
                      <ul className="mega-links">
                        <li><Link to="/services/transaction-regulatory/fema-rbi-advisory">FEMA / RBI Advisory (ODI & FDI)</Link></li>
                        <li><Link to="/services/transaction-regulatory/fundraising">Fundraising Instruments & Deal Structuring</Link></li>
                        <li><Link to="/services/transaction-regulatory/strategic-alliances">Strategic Alliances & Business Transactions</Link></li>
                        <li><Link to="/services/transaction-regulatory/ma-execution">M&A / Merger / Slump Sale Execution</Link></li>
                      </ul>
                      {/* Sub-Col B */}
                      <ul className="mega-links">
                        <li><Link to="/services/transaction-regulatory/capital-restructuring">Capital Restructuring & Shareholder Actions</Link></li>
                        <li><Link to="/services/transaction-regulatory/entity-lifecycle">Entity Lifecycle Services</Link></li>
                        <li><Link to="/services/transaction-regulatory/regulatory-replies">Notices, Scrutiny & Regulatory Replies</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: Investment Readiness */}
                  <div className="mega-col">
                    <h3 className="mega-title">Investment Readiness & Financial Assurance</h3>
                    <ul className="mega-links">
                      <li><Link to="/services/investment-readiness">Due Diligence (Legal/Tax)</Link></li>
                      <li><Link to="/services/investment-readiness">Business Valuation</Link></li>
                      <li><Link to="/services/investment-readiness">Audit Consolidation</Link></li>
                      <li><Link to="/services/investment-readiness">Internal Controls (IFC)</Link></li>
                    </ul>
                  </div>

                  {/* Column 3: Strategic MIS (Refactored) */}
                  <div className="mega-col">
                    <h3 className="mega-title">Strategic MIS & Financial Planning Services</h3>
                    <ul className="mega-links">
                      <li><Link to="/services/strategic-mis/reporting">MIS & Reporting</Link></li>
                      <li><Link to="/services/strategic-mis/kpi">Business Metrics & KPI</Link></li>
                      <li><Link to="/services/strategic-mis/financial-modelling">Financial Modelling</Link></li>
                      <li><Link to="/services/strategic-mis/aop">Annual Operating Plan (AOP)</Link></li>
                    </ul>
                  </div>

                </div>
              </div>
            </li>

            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>

        <Link to="/contact" className="btn btn-primary">
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
