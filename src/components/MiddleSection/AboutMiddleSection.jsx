// AboutMiddleSection.jsx
import React from 'react';
import './AboutMiddleSection.css';

const PurposeSection = () => {
    return (
        <div className="sections-wrapper">
            <div className="mission-container">
                <div className="mission-content">
                    <h1 className="mission-title">Our Mission</h1>
                    <p className="mission-description">
                        At Erence Developers, our mission is to transform your ideas
                        into digital experiences that engage and inspire. We aim to
                        empower businesses with cutting-edge web and mobile
                        solutions that drive growth and success.
                    </p>
                </div>
            </div>

            <div className="mission-container">
                <div className="mission-content">
                    <h1 className="mission-title">Our Vision</h1>
                    <p className="mission-description">
                        We believe in a collaborative approach to development, working closely with our 
                        clients to understand their unique requirements, objectives, and challenges. 
                        By fostering open communication and transparency throughout the development 
                        process, we ensure that our solutions align perfectly with our clients' vision and goals. 
                    </p>
                </div>
            </div>

            <div className="mission-container">
                <div className="mission-content">
                    <h1 className="mission-title">Our Purpose</h1>
                    <p className="mission-description">
                        At Erence Developers, our purpose is to transform ideas into 
                        impactful digital solutions that empower businesses to thrive. 
                        We aim to bridge creativity and technology, delivering experiences 
                        that connect people, inspire innovation, and drive sustainable growth.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PurposeSection;