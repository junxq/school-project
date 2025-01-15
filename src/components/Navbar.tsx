import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white">JUN.</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
            <Link to="/projects" className="text-gray-300 hover:text-primary transition-colors">Projects</Link>
            <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link>
            <Link to="/shop" className="text-gray-300 hover:text-primary transition-colors">Shop</Link>
            <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
          </div>
          <Link to="/cart" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;