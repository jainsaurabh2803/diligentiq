import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                {/* Column 1: About */}
                <div className="footer-col">
                    <Link to="/" className="footer-logo">Diligent Capitals</Link>
                    <p className="footer-desc">
                        Providing expert transaction and regulatory support, financial assurance, and strategic planning services.
                    </p>
                </div>

                {/* Column 2: Services */}
                <div className="footer-col">
                    <h3>Our Services</h3>
                    <ul className="footer-links">
                        <li><Link to="/services/transaction-regulatory-support">High-value “Transaction & Regulatory Support"</Link></li>
                        <li><Link to="/services/investment-readiness">Investment Readiness & Financial Assurance</Link></li>
                        <li><Link to="/services/strategic-mis">Strategic MIS & Financial Planning Services</Link></li>
                    </ul>
                </div>

                {/* Column 3: Quick Links */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <p>Email: support@diligentcapitals.com</p>
                    <p>Phone: +91 999 999 9999</p>
                    <div className="social-links">
                        {/* Social icons would go here */}
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Diligent Capitals. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
