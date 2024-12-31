import React from 'react';
import './IconFeatureSection.css'

const IconFeatureSection = () => {
    const features = [
        {
            icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8M8 12h8" />
                </svg>
            ),
            title: "TimeFrame",
            description: "For website development it will take mainly 7 to 14 working days and mobile development a process of 3 months to 6 months"
        },
        {
            icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                </svg>
            ),
            title: "Communication",
            description: "Communication between the client is taken seriously as we like to priotize our clients and clients will be reguraly updated"
        },
        {
            icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                </svg>
            ),
            title: "Development process",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aut dolorem fugiat."
        }
    ];

    return (
        <div className="w-full bg-emerald-500 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-2">
                        Consectetur adipiscing elit
                    </h2>
                    <p className="text-white/80">
                        Lorem ipsum dolor sit amet adipisicing elit. Deleniti corporator vel tempus.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            {/* Icon Circle */}
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                                <div className="text-white">
                                    <feature.icon />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-medium text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IconFeatureSection;