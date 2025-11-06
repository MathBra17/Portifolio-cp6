import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function Contato() {
    return (
        <>
        <Navbar />
            <section id="contact" className="page min-h-screen py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 section-title">Entre em Contato</h2>
                
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-6 text-indigo-600">Vamos conversar!</h3>
                                <p className="text-gray-600 mb-6">
                                    Estou sempre aberto a discutir novas oportunidades, projetos ou simplesmente trocar ideias.
                                    Entre em contato e vamos conversar!
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                            <img src="/public/email.png" alt="ícone de E-mail" />
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Email</p>
                                            <p className="font-medium">matheusbrasilangelotti@gmail.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                            <img src="/public/telefone.png" alt="Ícone de telefone" />
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Telefone</p>
                                            <p className="font-medium">(11) 99999-9999</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                            <img src="/public/localizacao.png" alt="Ícone localização" />
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Localização</p>
                                            <p className="font-medium">São Paulo, Brasil</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex space-x-4 mt-8">
                                    <a href="https://www.linkedin.com/in/matheus-brasil-agelotti-532709367/" className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors">
                                        <img src="/public/linkedin.png" alt="Ícone LinkedIn" />
                                    </a>
                                    <a href="https://github.com/MathBra17" className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors">
                                        <img src="/public/github.png" alt="Ícone GitHub" />
                                    </a> 
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

export default Contato;