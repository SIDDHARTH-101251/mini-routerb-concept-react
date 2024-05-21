// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="wave-icon-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="logo-text">Wave</h1>
    </div>
    <ul className="link-ul">
      <Link className="nav-item" to="/">
        <li>Home</li>
      </Link>
      <Link className="nav-item" to="/about">
        <li>About</li>
      </Link>
      <Link className="nav-item" to="/contact">
        <li>Contact</li>
      </Link>
    </ul>
  </nav>
)

export default Header
