import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function Projetos() {
  return (
    <>
      <Navbar />
      <section id="projects" className="page min-h-screen py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 section-title">
            Meus Projetos
          </h2>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projetos;
