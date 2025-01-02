import '../../App.css'
import OrderHeroSection from '../HeroSection/OrderHeroSection'
import MobilePricing from '../Payments/MobilePayment'
import WebsitePayment from '../Payments/WebsitePayment'
import HostingPayment from '../Payments/HostingPayment'

const Order = () => {
    return (
        <div>
            <OrderHeroSection />
            <WebsitePayment/>
            <MobilePricing/>
            <HostingPayment/>
        </div>
    )
}

export default Order