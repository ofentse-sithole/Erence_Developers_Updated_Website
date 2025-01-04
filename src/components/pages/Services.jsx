import '../../App.css'
import FeatureServices from '../FeatureSection/ServicesFeature';
import ServicesHeroSection from '../HeroSection/ServiceHeroSection'
import Footer from '../Footer/Footer';

const Services = () => {
    return (
        <div>
            <ServicesHeroSection />
            <FeatureServices/>
            <Footer/>
        </div>
    )
}

export default Services;