// client/src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">Usanase Makala</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/chatroom" className="hover:underline">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


/* 

<header className="bg-blue-800 text-white shadow-md">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <h1 className="text-3xl font-bold tracking-wide">Usanase Makala</h1>
    <nav className="space-x-4">
      {['Home', 'About', 'Contact', 'Blog'].map((name, idx) => (
        <Link
          key={idx}
          to={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
          className="px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {name}
        </Link>
      ))}
    </nav>
  </div>
</header>

*/
