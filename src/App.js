import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';
import Aboutus from './components/Aboutus';
import logo from './assets/logo.png.jpg'; // ✅ Logo file

function App() {
  return (
    <Router>
      {/* ✅ Navigation Bar with Logo */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-4">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Logo + Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img 
              src={logo} 
              alt="MyShop Logo" 
              style={{ height: '40px', marginRight: '10px' }} 
            />
            MyShop
          </Link>

          {/* Nav Links */}
          <div className="navbar-nav">
            <Link to="/addproducts" className="nav-link">Add Products</Link>
            <Link to="/aboutus" className="nav-link">About us</Link> 
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/signin" className="nav-link">Sign In</Link>
          </div>
        </div>
      </nav>
      
      <div className="App">
        <header className='App-header'>
          <h2>Welcome to corteiz thrifters</h2>
        </header>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproducts' element={<Addproducts />} />
          <Route path='/' element={<Getproducts />} />
          <Route path='/makepayment' element={<Makepayment/>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;