import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="fixed w-full bg-white shadow-sm z-20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link className="text-2xl font-bold text-indigo-600" to="/">Portfólio</Link>
            <nav class="hidden md:flex space-x-8">
              <Link className="nav-link text-gray-600 hover:text-indigo-600 transition-colors" to="/">Sobre mim</Link>
              <Link className="nav-link text-gray-600 hover:text-indigo-600 transition-colors" to="/projeto">Projetos</Link>
              <Link className="nav-link text-gray-600 hover:text-indigo-600 transition-colors" to="/contato">Contato</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
