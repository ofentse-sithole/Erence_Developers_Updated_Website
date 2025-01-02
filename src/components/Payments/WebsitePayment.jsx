import React from 'react';
import './WebsitePayment.css';

const Pricing = () => {
    const handlePayment = (plan) => {
        // PayFast integration configuration
        const paymentData = {
            merchant_id: '10036480',  // Use the exact merchant ID from your dashboard
            merchant_key: '263j380x8nogb',
            amount: plan.price,
            item_name: plan.name,
          return_url: 'http://localhost:5173/success', // Change these URLs to match your development environment
            cancel_url: 'http://localhost:5173/cancel',
            notify_url: 'http://localhost:3000/notify',
            email_address: '', // Add customer's email if available
            cell_number: '', // Add customer's phone if available
            m_payment_id: '', // Add your unique payment ID if needed
            amount_gross: plan.price,
            payment_method: ''
        };

        // Create and submit form to PayFast
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://sandbox.payfast.co.za/eng/process';

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
      name: "Basic",
      price: "4500",
      features: [
        "2 Page Basic Website",
        "Basic Theme",
        "Unlimited bandwidth",
        "Basic customer support"
      ],
      buttonText: "Get Basic Website",
          merchantId: "26051115"
    },
    {
      name: "Standard",
      price: "6500",
      features: [
        "3 Page Standard Website",
        "Creative Theme",
        "Free 1 Month Website Hosting"
      ],
      buttonText: "Get Standard Website",
      isPopular: true,
        merchantId: "26051115"
    },
    {
      name: "Enterprise",
      price: "9500",
      features: [
        "5 Plus Page Enterprise Website",
        "Ecomerce Website",
        "Payment Gateway Integration if required",
        "24/7 premium customer support",
        "Free 1 Month Website Hosting",
        "Free domain name registration"
      ],
      buttonText: "Get Enterprise Website",
        merchantId: "26051115"
    }
  ];

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Discover Our Web Development Plans and Pricing</h1>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
            {plan.isPopular && <div className="popular-badge">Most Popular</div>}
            <h2 className="plan-name">{plan.name}</h2>
            <div className="plan-price">
              <span className="currency">R</span>
              {plan.price}
              <span className="period"> Once Off</span>
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

export default Pricing;