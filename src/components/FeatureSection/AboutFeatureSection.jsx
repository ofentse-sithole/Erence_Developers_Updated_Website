import React from 'react';
import './AboutFeatureSection.css';
// Import the PDF file directly
import CompanyProfile from '../CompanyProfile/Erence-Developers-Company-Profile.pdf';

const AboutSection = () => {
    const handleDownload = async () => {
        try {
            // Fetch the PDF file
            const response = await fetch(CompanyProfile);
            const blob = await response.blob();

            // Create a blob URL
            const blobUrl = window.URL.createObjectURL(blob);

            // Create a temporary link and trigger download
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = 'Erence-Developers-Company-Profile.pdf';

            // Trigger download
            document.body.appendChild(link);
            link.click();

            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Sorry, there was an error downloading the file. Please try again.');
        }
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
                        <a
                            className="portfolio-button"
                            href={CompanyProfile}
                            download="Erence-Developers-Company-Profile.pdf"
                            onClick={(e) => {
                                e.preventDefault();
                                handleDownload();
                            }}
                        >
                            Company Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;