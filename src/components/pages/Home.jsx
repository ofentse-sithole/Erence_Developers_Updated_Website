import '../../App.css'
import HomeHeroSection from '../HeroSection/HomeHeroSection'
import FeatureSection from '../FeatureSection/FeatureSection'
import MerchantSection from '../FeatureSection/Merchant'

const Home = () => {
    return (
        <div>
            <HomeHeroSection />
            <FeatureSection />
            <MerchantSection/>
        </div>
    )
}

export default Home