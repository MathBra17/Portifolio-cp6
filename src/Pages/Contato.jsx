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
                                            <p className="font-medium">(11) 94348-6482</p>
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

                            <div>
                                <form className="space-y-4">
                                    <div>
                                        <label for="nome" className="block text-gray-700 mb-2">Nome</label>
                                        <input type="text" id="nome" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Seu nome"/>
                                    </div>
                                    
                                    <div>
                                        <label for="email" className="block text-gray-700 mb-2">Email</label>
                                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="seu@email.com"/>
                                    </div>
                                    
                                    <div>
                                        <label for="assunto" className="block text-gray-700 mb-2">Assunto</label>
                                        <input type="text" id="assunto" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Assunto da mensagem"/>
                                    </div>
                                    
                                    <div>
                                        <label for="mensagem" className="block text-gray-700 mb-2">Mensagem</label>
                                        <textarea id="mensagem" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Sua mensagem"></textarea>
                                    </div>
                                    
                                    <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                                        Enviar Mensagem
                                    </button>
                                </form>
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