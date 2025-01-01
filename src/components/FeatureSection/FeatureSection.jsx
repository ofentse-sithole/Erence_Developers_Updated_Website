import React from 'react';
import { TabletSmartphone, ArrowUpDown, MonitorSmartphone } from 'lucide-react';
import './FeatureSection.css';

const FeaturesSection = () => {
    const features = [
        {
            title: "Web Development",
            icon: <MonitorSmartphone className="feature-icon" />,
            description: "We create visually stunning and user-friendly websites tailored to your needs."
        },
        {
            title: "Mobile Development",
            icon: <TabletSmartphone className="feature-icon" />,
            description: "We develop intuitive mobile apps for seamless user experiences on iOS and Android."
        },
        {
            title: "Web Hosting",
            icon: <ArrowUpDown className="feature-icon" />,
            description: "We provide reliable, secure, and fast web hosting to keep your site running smoothly."
        }
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="icon-wrapper">
                                {feature.icon}
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;