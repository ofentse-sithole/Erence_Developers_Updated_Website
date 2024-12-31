import React from 'react';
import './ServicesFeature.css';
import { LineChart, Monitor, Smartphone, Globe  } from 'lucide-react';

const FeatureServices = () => {
    const services = [
        {
            icon: <Monitor className="service-icon" />,
            title: "Web Development",
            description: "We craft bespoke websites that captivate, perform, and inspire. Combining creativity with cutting-edge technology, our solutions are tailored to your brand, ensuring seamless user experiences and a standout digital presence."
        },
        {
            icon: <Smartphone className="service-icon" />,
            title: "Mobile Development",
            description: "We build innovative, user-focused mobile apps that connect seamlessly with your audience. Designed for performance and functionality, our apps deliver exceptional experiences on both iOS and Android platforms."
        },
        {
            icon: <Globe className="service-icon" />,
            title: "Web Hosting",
            description: "We provide secure, high-performance hosting solutions tailored to keep your website fast, reliable, and always accessible."
        },
        {
            icon: <LineChart className="service-icon" />,
            title: "Delievery",
            description: "Web Development: 7 to 14 days and Mobile Development: 3 to 6 Months"
        }
    ];

    return (
        <div className="feature-container">
            <div className="feature-content">
                <div className="feature-left">
                    <div className="image-wrapper">
                        <img
                            src="/images/dashboard_code.jpg"
                            alt="Dashboard Preview"
                            className="feature-image"
                        />
                        <div className="dot-pattern"></div>
                    </div>
                </div>

                <div className="feature-right">
                    <div className="feature-text">
                        <h2 className="feature-title">
                            Our Expertise in Digital Solutions<br />
                            
                        </h2>
                        <ul className="feature-list">
                            <li>Bringing your ideas to life with custom-crafted websites that inspire and perform.</li>
                            <li>Empowering connections through innovative and dynamic mobile experiences.</li>
                            <li>Ensuring seamless online presence with secure and scalable hosting solutions.</li>
                        </ul>
                    </div>

                    <div className="services-section">
                        <h3 className="services-title">SERVICES</h3>
                        <div className="services-description">
                            We offer professional web development, intuitive mobile app development, 
                            and reliable web hosting services to bring your digital ideas to life.
                        </div>

                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-card">
                                    <div className="service-icon-wrapper">
                                        {service.icon}
                                    </div>
                                    <h4 className="service-title">{service.title}</h4>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureServices;