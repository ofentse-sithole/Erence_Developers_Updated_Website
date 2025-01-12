import React from 'react';
import './WebsitePayment.css';

const Pricing = () => {
  const handlePayment = (plan) => {
    const paymentData = {
      merchant_id: '26051115',
      merchant_key: 'xwyplttj2ek54',
      amount: plan.price, // Use the raw numeric price
      item_name: plan.name,
      return_url: 'https://www.erencedevelopers.co.za/success',
      cancel_url: 'https://www.erencedevelopers.co.za/cancel',
      notify_url: 'https://www.erencedevelopers.co.za/notify',
    };

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://www.payfast.co.za/eng/process';

    Object.entries(paymentData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value.toString();
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  const plans = [
    {
      name: "Basic",
      price: 4500, // Numeric price
      features: [
        "2 professionally designed pages",
        "Mobile-friendly layout",
        "Basic SEO optimization",
      ],
      buttonText: "Get Basic Website",
    },
    {
      name: "Standard",
      price: 7500, // Numeric price
      features: [
        "3 well-structured pages",
        "Responsive design for all devices",
        "Advanced SEO setup",
        "Custom contact and feedback forms",
        "Free hosting for 1 month",
        "Phone and email support",
      ],
      buttonText: "Get Standard Website",
      isPopular: true,
    },
    {
      name: "Premium",
      price: 10500, // Numeric price
      features: [
        "5+ customized pages",
        "E-commerce functionality (online store)",
        "Integrated payment gateway",
        "Professional SEO services for visibility",
        "Free hosting for 1 month",
        "Free domain name setup",
        "Priority 24/7 support",
      ],
      buttonText: "Get Premium Website",
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
            {plan.isPopular && <div className="popular-badge">Most Popular</div>}
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

export default Pricing;
