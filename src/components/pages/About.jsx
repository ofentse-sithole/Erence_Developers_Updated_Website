import '../../App.css'
import AboutSection from '../FeatureSection/AboutFeatureSection'
import AboutHeroSection from '../HeroSection/AboutHeroSection'
import AboutMiddle from '../../components/MiddleSection/AboutMiddleSection'

const About = () => {
    return (
        <div>
            <AboutHeroSection />
            <AboutSection/>
            <AboutMiddle/>
        </div>
    )
}

export default About