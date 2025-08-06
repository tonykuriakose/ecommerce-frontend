import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import LoadingSpinner from './components/LoadingSpinner'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Home = React.lazy(() => import('./pages/Home'))
const Collection = React.lazy(() => import('./pages/Collection'))
const About = React.lazy(() => import('./pages/About'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Product = React.lazy(() => import('./pages/Product'))
const Cart = React.lazy(() => import('./pages/Cart'))
const Login = React.lazy(() => import('./pages/Login'))
const PlaceOrder = React.lazy(() => import('./pages/PlaceOrder'))
const Orders = React.lazy(() => import('./pages/Orders'))
const Verify = React.lazy(() => import('./pages/Verify'))

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Memoized Layout Component
const Layout = React.memo(({ children }) => (
  <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      limit={3}
    />
    <Navbar />
    <SearchBar />
    {children}
    <Footer />
  </div>
))

Layout.displayName = 'Layout'

const App = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/place-order' element={<PlaceOrder />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/verify' element={<Verify />} />
            {/* 404 Route */}
            <Route path='*' element={
              <div className="text-center py-20">
                <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
                <p className="text-gray-600">The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  )
}

export default App