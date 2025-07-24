// client/src/components/Header.jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">Usanase</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500 transition">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500 transition">About</Link>
      </nav>
    </header>
  );
}
