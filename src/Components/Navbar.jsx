import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  function toggleMobileMenu() {
            document.querySelector('.mobile-menu').classList.toggle('active');
        }
  return (
    <>
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link className="text-2xl font-bold text-indigo-600 " onclick={()=>toggleMobileMenu()} to="/">Portfólio</Link>
            <nav class="hidden md:flex space-x-8">
              <Link className="nav-link text-gray-600 hover:text-indigo-600 transition-colors" to="/">Sobre mim</Link>
              <Link className="nav-link text-gray-600 hover:text-indigo-600 transition-colors" to="/projeto">Projetos</Link>
              <Link className="nav-link text-gray-600 hover:text-indigo-600 transition-colors" to="/contato">Contato</Link>
            </nav>
                <button 
    className="md:hidden text-gray-600"
    style={{
        display: 'block !important',
        position: 'relative !important',
        zIndex: 100,
        padding: '10px'
    }}
    onClick={() => {
        toggleMobileMenu();
    }}
>
    <FaBars />
</button>
          </div>
        </div>
        <div class="mobile-menu fixed inset-0 bg-white z-30 md:hidden">
            <div class="flex justify-between items-center p-6 border-b">
                <span class="text-xl font-bold text-indigo-600">Menu</span>
                <button class="text-gray-600" onclick={()=>toggleMobileMenu()}>
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <nav class="flex flex-col p-6 space-y-6">
                <Link className="nav-link text-gray-600 hover:text-indigo-600 transition-colors" to="/">Sobre mim</Link>
              <Link className="nav-link text-gray-600 hover:text-indigo-600 transition-colors" to="/projeto">Projetos</Link>
              <Link className="nav-link text-gray-600 hover:text-indigo-600 transition-colors" to="/contato">Contato</Link>
            </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
