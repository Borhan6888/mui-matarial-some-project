import React from 'react';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Checkout from './checkout/Checkout';
import Album from './album/Album';
import Pricing from './pricing/Pricing';
import Blog from './blog/Blog';
// import PaymentForm from './checkout/PaymentForm';
// import Review from './checkout/Review';
// import AddressForm from './checkout/AddressForm';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <Checkout />

      {/* <AddressForm /> */}
      {/* <PaymentForm /> */}
      {/* <Review /> */}

      <Pricing />
      <Blog />
      <Album />
    </div>
  );
}

export default App;
