function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Matheus Brasil</p>
              <p className="text-gray-400">Desenvolvedor Júnior</p>
            </div>

            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/matheus-brasil-agelotti-532709367/" className="text-gray-400 hover:text-white transition-colors">
                <img src="/public/linkedin.png" alt="Ícone LinkedIn" />
              </a>
              <a href="https://github.com/MathBra17"className="text-gray-400 hover:text-white transition-colors">
                <img src="/public/github.png" alt="Ícone GitHub" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Matheus Brasil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
