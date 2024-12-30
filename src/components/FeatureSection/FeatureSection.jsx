import React from 'react';
import { Layers, BookOpen, Binary } from 'lucide-react';
import './FeatureSection.css';

const FeaturesSection = () => {
    const features = [
        {
            title: "PERFECTLY DESIGN",
            icon: <Binary className="feature-icon" />,
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            title: "CAREFULLY PLANNED",
            icon: <Layers className="feature-icon" />,
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            title: "SMARTLY EXECUTE",
            icon: <BookOpen className="feature-icon" />,
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        }
    ];

    return (
        <div className="features-container">
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-content">
                            {feature.icon}
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <button className="read-more">Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;