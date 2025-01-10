import React from 'react';
import './WebsitePayment.css';

const MobilePricing = () => {
  const handlePayment = (plan) => {
    // PayFast integration configuration
    const paymentData = {
      merchant_id: '26051115',  // Use the exact merchant ID from your dashboard
      merchant_key: 'xwyplttj2ek54',
      amount: plan.price,
      item_name: plan.name,
      return_url: 'http://www.erencedevelopers.co.za/success', // Change these URLs to match your development environment
      cancel_url: 'http://www.erencedevelopers.co.za/cancel',
      notify_url: 'http://www.erencedevelopers.co.za/notify',
    };

    // Create and submit form to PayFast
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://www.payfast.co.za/eng/process';

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
      price: 35000,
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
      price: 55000,
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

  // Helper function to format numbers with spaces
  const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Discover Our Web Development Plans and Pricing</h1>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
            <h2 className="plan-name">{plan.name}</h2>
            <div className="plan-price">
              R{formatPrice(plan.price)} <span className="period">Once Off</span>
            </div>
            <ul className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <span className="check-mark">✓</span>
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