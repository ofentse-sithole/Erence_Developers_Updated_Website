import React from 'react';
import './AboutFeatureSection.css';

const AboutSection = () => {
    // Function to handle download
    const handleDownload = () => {
        // Using absolute path from the public folder
        const pdfUrl = '/CompanyProfile/Erence-Developers-Company-Profile.pdf';
        
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'Erence-Developers-Company-Profile.pdf');
        
        // Programmatically click the link
        document.body.appendChild(link);
        link.click();
        
        // Clean up
        document.body.removeChild(link);
    };

    return (
        <div className="about-container">
            <div className="about-image-section">
                <img
                    src="/images/Erence_Developer.png"
                    alt="About"
                    className="about-image"
                />
            </div>

            <div className="about-content">
                <div className="about-header">
                    <h1>About Erence Developers</h1>
                </div>

                <div className="about-info">
                    <p className="about-description">
                        At Erence Developers, we specialize in delivering innovative
                        digital solutions that empower businesses to thrive in the
                        modern world. From crafting captivating websites to developing
                        seamless mobile applications and providing reliable web hosting,
                        our mission is to turn your ideas into impactful realities. Driven
                        by creativity, technical expertise, and a passion for excellence,
                        we aim to build long-term partnerships by offering personalized services
                        that meet your unique needs. Together, let's create a digital presence
                        that stands out and drives success.
                    </p>

                    <div className="button-container">
                        <button
                            className="portfolio-button"
                            onClick={handleDownload}
                        >
                            Company Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;