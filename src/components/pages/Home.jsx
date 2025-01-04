import '../../App.css'
import HomeHeroSection from '../HeroSection/HomeHeroSection'
import FeatureSection from '../FeatureSection/FeatureSection'
import MerchantSection from '../FeatureSection/Merchant'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <HomeHeroSection />
            <FeatureSection />
            <MerchantSection/>
            <Footer/>
        </div>
    )
}

export default Home