import '../../App.css'
import OrderHeroSection from '../HeroSection/OrderHeroSection'
import MobilePricing from '../Payments/MobilePayment'
import WebsitePayment from '../Payments/WebsitePayment'
import HostingPayment from '../Payments/HostingPayment'
import Footer from '../Footer/Footer';

const Order = () => {
    return (
        <div>
            <OrderHeroSection />
            <WebsitePayment/>
            <MobilePricing/>
            <HostingPayment/>
            <Footer/>
        </div>
    )
}

export default Order