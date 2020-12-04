import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/register' component={RegisterScreen} />
					<Route path='/login' component={LoginScreen} />
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/shipping' component={ShippingScreen} />
					<Route path='/payment' component={PaymentScreen} />
					<Route path='/placeorder' component={PlaceOrderScreen} />
					<Route path='/order/:id' component={OrderScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					{/* optional id */}
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/admin/userlist' component={UserListScreen} />
					<Route path='/admin/user/:id/edit' component={UserEditScreen} />
					<Route exact path='/admin/productlist' component={ProductListScreen} />
          {/* paginate admin product list screen */}
					<Route exact path='/admin/productlist/:pageNumber' component={ProductListScreen} />
					<Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          {/* search products route */}
					<Route exact path='/search/:keyword' component={HomeScreen} />
          {/* pagination of products results */}
					<Route path='/page/:pageNumber' component={HomeScreen} />
          {/* pagination of a filtered product search */}
					<Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} />
					<Route exact path='/' component={HomeScreen} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App