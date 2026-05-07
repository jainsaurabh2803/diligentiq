import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-shell">
        <div className="header-container">
          <Link to="/" className="logo" aria-label="Diligent Capitals home">
            <span className="logo-mark">DC</span>
            <span className="logo-copy">
              <span className="logo-title">Diligent</span>
              <span className="logo-title">Capitals</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary navigation">
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>

              <li className="dropdown">
                <Link to="/services" className="dropdown-trigger">
                  Services <span className="nav-chevron">▾</span>
                </Link>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-col mega-col-wide">
                      <h3 className="mega-title">Transaction & Regulatory Support</h3>
                      <div className="mega-links-split">
                        <ul className="mega-links">
                          <li><Link to="/services/transaction-regulatory/fema-rbi-advisory">FEMA / RBI Advisory (ODI & FDI)</Link></li>
                          <li><Link to="/services/transaction-regulatory/fundraising">Fundraising Instruments & Deal Structuring</Link></li>
                          <li><Link to="/services/transaction-regulatory/strategic-alliances">Strategic Alliances & Business Transactions</Link></li>
                          <li><Link to="/services/transaction-regulatory/ma-execution">M&A / Merger / Slump Sale Execution</Link></li>
                        </ul>
                        <ul className="mega-links">
                          <li><Link to="/services/transaction-regulatory/capital-restructuring">Capital Restructuring & Shareholder Actions</Link></li>
                          <li><Link to="/services/transaction-regulatory/entity-lifecycle">Entity Lifecycle Services</Link></li>
                          <li><Link to="/services/transaction-regulatory/regulatory-replies">Notices, Scrutiny & Regulatory Replies</Link></li>
                        </ul>
                      </div>
                    </div>

                    <div className="mega-col">
                      <h3 className="mega-title">Investment Readiness</h3>
                      <ul className="mega-links">
                        <li><Link to="/services/investment-readiness">Due Diligence (Legal / Tax)</Link></li>
                        <li><Link to="/services/investment-readiness">Business Valuation</Link></li>
                        <li><Link to="/services/investment-readiness">Audit Consolidation</Link></li>
                        <li><Link to="/services/investment-readiness">Internal Controls (IFC)</Link></li>
                      </ul>
                    </div>

                    <div className="mega-col">
                      <h3 className="mega-title">Strategic MIS & Planning</h3>
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
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <Link to="/contact" className="header-cta">
            Book a call
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
