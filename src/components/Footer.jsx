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
                    <p><a href="mailto:navneetagarwal511@gmail.com">navneetagarwal511@gmail.com</a></p>
                    <p>Phone: <a href="tel:+919916026616">+91-9916026616</a></p>
                    <p>Phone: <a href="tel:+917600889240">+91-7600889240</a></p>
                    <div className="social-links">
                        <a
                            href="https://www.linkedin.com/company/110269935/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="social-icon"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
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
