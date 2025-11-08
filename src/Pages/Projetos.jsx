import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function Projetos() {
  const projeto = [
    {
      titulo: "GS---DronSOS",
      info: "Solução para enchetes utilizando drones",
      link: "https://github.com/MathBra17/GS---DronSOS",
    },
    {
      titulo: "ECOMMERCE REACT",
      info: "Ecommerce utilizando react",
      link: "https://github.com/MathBra17/",
    },
    {
      titulo: "Web crawler",
      info: "Crawler utilizando python",
      link: "https://github.com/MathBra17/",
    },
  ];
  const [prjt, setPrjt] = useState(projeto);

  const onFindProject = (text) => {
    // Filtra os projetos conforme o usuário digita
    const filteredProjects = projeto.filter((p) =>
      `${p.titulo.toLowerCase()} ${p.info.toLowerCase()}`.includes(text.toLowerCase())
    );
    setPrjt(filteredProjects)
  };
  return (
    <>
      <Navbar />
      <section className="min-h-screen py-16 bg-white pt-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Meus Projetos</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Alguns dos meus projetos desenvolvidos ao longo do curso
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="relative">
                  <input
                    type="text"
                    id="search-input"
                    placeholder="Digite"
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onChange={(e) => onFindProject(e.target.value)}
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <i className="fas fa-search"></i>
                  </div>
                  <button
                    id="clear-search"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 hidden"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="projects-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {prjt.length > 0 ? (
              prjt.map((p) => (
                <div
                  className="project-card bg-white rounded-xl shadow-md overflow-hidden fade-in"
                  data-tech="React,Node.js,MongoDB"
                  data-type="fullstack"
                  data-title="E-commerce React"
                  data-description="Plataforma de e-commerce desenvolvida com React, Node.js e MongoDB."
                >
                  <div className="h-48 bg-indigo-100 flex items-center justify-center">
                    <i className="fas fa-shopping-cart text-6xl text-indigo-600"></i>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{p.titulo}</h3>
                    <p className="text-gray-600 mb-4">{p.info}</p>
                    <div className="flex space-x-3">
                      <a
                        href={p.link}
                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                      >
                        Detalhes
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projetos;
