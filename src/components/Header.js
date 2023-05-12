import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const Header = () => (
  <nav className="navbar">
    <div className="navbar-div">
      <h1 className="nav-header">Bookstore CMS</h1>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            BOOKS
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/categories">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </div>
    <button type="button" className="user-icon-btn">
      <BsFillPersonFill className="user-icon" />
    </button>
  </nav>
);

export default Header;
