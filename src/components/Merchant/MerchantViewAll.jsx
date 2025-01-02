import React from 'react';
import './MerchantViewAll.css';

const MerchantViewAll = () => {
  const clients = [
    {
      name: 'Cargovertex Logistics Logo',
      logo: '/images-merchant/Cargovertex_Logistics_Logo.png',
          url: 'https://cargovertex-logistics.vercel.app/'
    },
    {
      name: 'Harvest Quotient Organic Logo',
      logo: '/images-merchant/Harvest_Quotient_Organic_Logo.png',
        url: 'https://harvest-quotient.vercel.app/'
    },
    {
      name: 'Opel Stop Logo',
      logo: '/images-merchant/Opel_Stop_Logo.png',
        url: 'https://www.opel-stop.vercel.app/'
    },
      {
          name: 'Tacit Group Supply co. Logo',
          logo: '/images-merchant/Tacit_Group_Supply_Logo.png',
          url: 'https://tacit-group-supply-co-yacx.vercel.app/'
      }
  
  ];

    return (
        <section className="logo-section" style={{ marginTop: 0, paddingTop: 0 }}>
            <div className="text-center mb-8">
                <p className="header-text">WE CRAFT DIGITAL EXCELLENCE</p>
                <h2 className="heading">
                    Trusted by <span className="highlight">our clients</span>
                </h2>
            </div>

            <div className="logo-grid">
                {clients.map((client) => (
                    <a
                        key={client.name}
                        href={client.url}
                        className="logo-box"
                    >
                        <div className="logo-wrapper">
                            <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="logo"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};
export default MerchantViewAll;