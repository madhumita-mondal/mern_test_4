import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./App.css";
import Footer from './components/footer';
import Header from './components/Header';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';


function App() {
  return (
    <Router>
    <Header/>
    <main className="my-4">
    <Container>
         {/* <h1 style={{color: "coral"}}>eShophy</h1> */}
         {/* <Route path="/" component={HomeScreen} exact/>
         <Route path="/login" component={LoginScreen}exact />
         <Route path="/payment" component={PaymentScreen}exact />
         <Route path="/order" component={OrderScreen}exact />
         <Route path="/placeorder" component={PlaceOrderScreen}exact />
         <Route path="/shipping" component={ShippingScreen}exact />
         <Route path="/profile" component={ProfileScreen}exact />
         <Route path="/register" component={RegisterScreen}exact />
         <Route path="/product/:id" component={ProductDetails} exact/>
         <Route path="/cart/:id?" component={CartScreen}exact/> */}

          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/" component={HomeScreen} exact />

         {/* <HomeScreen/> */}
    </Container>
    </main>

    <Footer/>
	    
	</Router>
  );
}

export default App;
