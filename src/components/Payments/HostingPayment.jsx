import React from 'react';
import './WebsitePayment.css';

const Pricing = () => {
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
            email_address: '', // Add customer's email if available
            cell_number: '', // Add customer's phone if available
            m_payment_id: '', // Add your unique payment ID if needed
            amount_gross: plan.price,
            payment_method: ''
        };

        // Create and submit form to PayFast
        const form = document.createElement('form');
        form.method = 'POST';
      form.action = 'https://www.payfast.co.za/eng/process';

        Object.entries(paymentData).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value.toString(); // Convert all values to string
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
    };

  const plans = [
    {
      name: "Website Hosting Plan",
      price: 300,
      features: [
        "Free SSL Certificate",
        "2 GB Storage",
        "Unlimited bandwidth",
        "Any Changes within Website come with the package"
      ],
      buttonText: "Get Website Plan",
      merchantId: "10036480"
    },
    {
      name: "Mobile Support Plan",
      price: 450,
      features: [
        "Support via email and phone (response within 24 hours)",
        "Update needed for website will be done",
        "Bug fixes",
        "Improve security for mobile application"
      ],
      buttonText: "Get Mobile Support Plan",
      isPopular: true,
      merchantId: "10036480"
    }
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
              R{formatPrice(plan.price)} <span className="period">Monthly</span>
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