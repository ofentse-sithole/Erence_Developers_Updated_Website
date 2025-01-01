import '../../App.css'
import OrderHeroSection from '../HeroSection/OrderHeroSection'
import MobilePricing from '../Payments/MobilePayment'
import WebsitePayment from '../Payments/WebsitePayment'

const Order = () => {
    return (
        <div>
            <OrderHeroSection />
            <WebsitePayment/>
            <MobilePricing/>
        </div>
    )
}

export default Order