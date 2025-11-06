import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <>
        <Navbar />
         <section id="about" className="min-h-screen py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 section-title">Sobre Mim</h2>
                
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
                            <div className="w-full h-full bg-indigo-200 flex items-center justify-center">
                                <img src="/public/perfil.jpg" alt="Foto de perfil" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-2/3 md:pl-12">
                        <p className="text-lg mb-6">
                            Sou um desenvolvedor júnior com cerca de um ano de experiência na criação de aplicações web modernas e responsivas. 
                        </p>
                        <p className="text-lg mb-6">
                            Atualmente, curso Engenharia de Software e estou sempre em busca de aprender novas tecnologias e metodologias para evoluir como profissional e entregar projetos de qualidade.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center">
                                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-graduation-cap text-indigo-600"></i>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Formação</h3>
                                    <p className="text-gray-600">Engenharia de Software</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-briefcase text-indigo-600"></i>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Experiência</h3>
                                    <p className="text-gray-600">1 ano</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-map-marker-alt text-indigo-600"></i>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Localização</h3>
                                    <p className="text-gray-600">São Paulo, Brasil</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-envelope text-indigo-600"></i>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-gray-600">matheusbrasilangelotti@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Home;