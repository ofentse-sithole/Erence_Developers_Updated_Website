import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CancelPayment.css';

const CancelPayment = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    };

    const handleTryAgain = () => {
        navigate('/order');
    };

    return (
        <div className="cancel-container">
        <br/>
        <br/>
        <br/>
            <div className="cancel-card">
                <div className="cancel-icon">
                    <svg
                        viewBox="0 0 24 24"
                        className="xmark"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <h1 className="cancel-title">Payment Cancelled</h1>
                <p className="cancel-message">
                    Your payment process has been cancelled. No charges have been made to your account.
                </p>
                <div className="cancel-details">
                    <h2>What would you like to do?</h2>
                    <ul>
                        <li>Return to the pricing page and try again</li>
                        <li>Contact our support team for assistance</li>
                        <li>Check our FAQs for common payment issues</li>
                    </ul>
                </div>
                <div className="cancel-actions">
                    <button onClick={handleTryAgain} className="try-again-button">
                        Try Again
                    </button>
                    <button onClick={handleBackHome} className="home-button">
                        Back to Home
                    </button>
                    <a href="mailto:info@erencedevelopers.co.za" className="support-link">
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CancelPayment;