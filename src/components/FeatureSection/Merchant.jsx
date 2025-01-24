import React, { useEffect, useState } from 'react';
import './Merchant.css';
import {Link} from 'react-router-dom';

const MerchantShowcase = () => {
    const merchants = [
        { name: 'Tacit Group', logo: '/images-merchant/Tacit_Group_Supply_Logo.png', url: 'https://tacit-group-supply-co-yacx.vercel.app/' },
        { name: 'CargoVertex Logistics', logo: '/images-merchant/Cargovertex_Logistics_Logo.png', url: 'https://cargovertex-logistics.vercel.app/' },
        { name: 'Harvest Qoutient', logo: '/images-merchant/Harvest_Quotient_Organic_Logo.png', url: 'https://harvest-quotient.vercel.app/' },
        { name: 'Opel Stop', logo: '/images-merchant/Opel_Stop_Logo.png', url: 'https://www.opel-stop.vercel.app/' },
    ];

    // Double the merchants array to create a seamless loop
    const duplicatedMerchants = [...merchants, ...merchants];

    return (
        
        <section className="merchant-section">
            <div className="merchant-container">
                <h1 className="merchant-heading">
                    Our clients that trust
                    <span className="highlight"> Erence Developers</span> as a website and mobile app development partner
                </h1>

                <div className="logo-slider">
                    <div className="logo-track">
                        {duplicatedMerchants.map((merchant, index) => (
                            <div key={index} className="logo-wrapper">
                                <img
                                    src={merchant.logo}
                                    alt={merchant.name}
                                    className="merchant-logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <Link to="/merchant" className="see-all-link">
                    See our projects →
                </Link>

            </div>
        </section>
    );
};

export default MerchantShowcase;