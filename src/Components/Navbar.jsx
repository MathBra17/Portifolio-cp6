import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header>
        <div>
          <div>
            <a>Portfólio</a>
            <nav>
              <Link to="/">Sobre mim</Link>
              <Link to="/projeto">Projetos</Link>
              <Link to="/contato">Contato</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
