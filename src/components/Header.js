import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
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
  </nav>
);

export default Header;
