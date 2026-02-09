import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container contact-container">
                {/* Left Side: Info */}
                <div className="contact-info">
                    <span className="contact-label">CONTACT</span>
                    <h1 className="contact-title">Share your deal, we'll respond within 24 hours.</h1>
                    <p className="contact-desc">
                        Send us a short note about the transaction stage, sector and the kind of diligence support you are looking for.
                        We can share a relevant sample output and a time & fee estimate.
                    </p>
                    <div className="contact-email">
                        <p>Prefer email? Write to <a href="mailto:support@diligentcapitals.com">support@diligentcapitals.com</a></p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="contact-form-wrapper">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="context">Deal context</label>
                            <textarea
                                id="context"
                                placeholder="Sector, stage, approximate cheque size and the kind of support you are exploring..."
                                rows="4"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-submit">Submit enquiry</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
