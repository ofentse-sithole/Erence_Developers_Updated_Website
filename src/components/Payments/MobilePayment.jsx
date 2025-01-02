import React from 'react';
import './WebsitePayment.css';

const MobilePricing = () => {
  const handlePayment = (plan) => {
    // PayFast integration configuration
    const paymentData = {
      merchant_id: plan.merchantId,
      merchant_key: 'YOUR_MERCHANT_KEY',
      amount: plan.price,
      item_name: plan.name,
      return_url: 'https://your-website.com/success',
      cancel_url: 'https://your-website.com/cancel',
      notify_url: 'https://your-website.com/notify',
    };

    // Create and submit form to PayFast
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://sandbox.payfast.co.za/eng/process';

    Object.entries(paymentData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  const plans = [
    {
      name: "Basic Mobile Application",
      price: "45 000",
      features: [
        "Basic UI/UX design",
        "Up to 5 core features (e.g., user login, profile management, and basic notifications)",
        "Integration with one third-party API (e.g., payment gateway)",
        "Platform: Either Android or iOS"

      ],
      buttonText: "Get Basic Mobile Application",
      merchantId: "YOUR_MERCHANT_ID_1"
    },
    {
      name: "Premium Mobile Application",
      price: "85 000",
      features: [
        "Advanced UI/UX design with custom branding",
        "Up to 10 core features (e.g., geolocation, chat, advanced analytics, and custom dashboards)",
        "Integration with multiple APIs (e.g., payment gateways, social media, and maps)",
        "Platforms: Both Android and iOS (cross-platform development)",
        "Deployment to app stores with optimization"
      ],
      buttonText: "Get Premium Mobile Application",
      isPopular: true,
      merchantId: "YOUR_MERCHANT_ID_2"
    },
    
  ];

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Discover Our Mobile Application Plans</h1>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
            <h2 className="plan-name">{plan.name}</h2>
            <div className="plan-price">
              <span className="currency">R</span>
              {plan.price}
              <span className="period">Once Off</span>
            </div>
            <ul className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <span className="checkmark">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              className="plan-button"
              onClick={() => handlePayment(plan)}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePricing;