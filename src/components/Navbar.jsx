import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">EduPlatform</Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/courses" className="hover:text-gray-300">Courses</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;