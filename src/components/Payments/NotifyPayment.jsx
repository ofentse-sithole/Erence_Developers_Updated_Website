import React, { useEffect, useState } from 'react';
import './NotifyPayment.css';

const NotifyPayment = () => {
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState('Processing payment notification...');

    useEffect(() => {
        const processNotification = async () => {
            try {
                // Simulating fetching PayFast notification
                const response = await fetch('http://localhost:5173/notify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!response.ok) {
                    throw new Error('Failed to process payment notification');
                }

                const data = await response.json();

                if (data.payment_status === 'COMPLETE') {
                    setStatus('success');
                    setMessage('Payment was successful!');
                } else {
                    setStatus('error');
                    setMessage('Payment failed or was canceled.');
                }
            } catch (error) {
                setStatus('error');
                setMessage(`Error processing payment: ${error.message}`);
            }
        };

        processNotification();
    }, []);

    return (
        <div className={`notification-container ${status}`}>
            <div className="notification-content">
                {status === 'success' ? (
                    <>
                        <h2>Payment Successful</h2>
                        <p>{message}</p>
                    </>
                ) : status === 'error' ? (
                    <>
                        <h2>Payment Failed</h2>
                        <p>{message}</p>
                    </>
                ) : (
                    <h2>{message}</h2>
                )}
            </div>
        </div>
    );
};

export default NotifyPayment;
