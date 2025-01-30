import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Order from './components/pages/Order';
import SuccessOrder from './components/Payments/SuccessPayment';
import CancelOrder from './components/Payments/CancelPayment';
import Merchant from './components/Merchant/MerchantViewAll';
import Notify from './components/Payments/NotifyPayment';

/* Adding this because of react-router-dom */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  const handleLoadComplete = () => {
    setIsLoading(false);
  };



  return (
    <Router>
      {isLoading ? (
        <SplashScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <>
          {/*showPopup && <Popup onClose={handlePopupClose} */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/success' element={<SuccessOrder />} />
            <Route path='/cancel' element={<CancelOrder />} />
            <Route path='/projects' element={<Merchant />} />
            <Route path='/notify' element={<Notify />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;