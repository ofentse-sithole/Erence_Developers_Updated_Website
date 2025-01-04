import '../../App.css'
import AboutSection from '../FeatureSection/AboutFeatureSection'
import AboutHeroSection from '../HeroSection/AboutHeroSection'
import AboutMiddle from '../../components/MiddleSection/AboutMiddleSection'
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <AboutHeroSection />
            <AboutSection/>
            <AboutMiddle/>
            <Footer/>
        </div>
    )
}

export default About