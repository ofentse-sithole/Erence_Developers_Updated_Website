import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPayment.css';

const SuccessPayment = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/'); // Navigate back to home page
    };

    return (
        <div className="success-container">
            <div className="success-card">
                <div className="success-icon">
                    <svg viewBox="0 0 24 24" className="checkmark">
                        <path
                            fill="none"
                            strokeWidth="2"
                            stroke="currentColor"
                            d="M1 13l9 9L23 4"
                        />
                    </svg>
                </div>
                <h1 className="success-title">Payment Successful!</h1>
                <p className="success-message">
                    Thank you for your purchase. We have received your payment and will begin processing your order immediately.
                </p>
                <div className="success-details">

                    <h2>IMPORTANT NOTICE</h2>
                    <ul>
                        <li>Please send your proof of payment to info@erencedevelopers.co.za and further communicaton will done proceeding further.</li>
                     </ul>
                    
                </div>
                <div className="success-actions">
                    <button onClick={handleBackHome} className="home-button">
                        Back to Home
                    </button>
                    <a href="mailto:support@erencedevelopers.co.za" className="support-link">
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SuccessPayment;