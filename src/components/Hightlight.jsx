function Hightlight() {
    return (
        <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design revolucionário</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiência</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img src="../../public/img/titanium-design.jpg" alt="Iphone titanio" className="w-full rounded-2xl mb-4" />
                        <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/ios-features.jpg" alt="Ios features" />
                        <h3 className="font-bold mb-2 text-3xl">Ios 26</h3>
                        <p className="text-gray-300">O Sistema operacional mais avançado do mundo com IA integrada.</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient ">A18 Pro</h3>
                    <p>O chip mais poderoso em um smartphone</p>
                    <img src="../../public/img/chip-a18-pro.jpg" className="w-full rounded-2xl mb-4" alt="Chip a18" />

                    <ul className="space-y-3 text-gray-300">
                        <li>CPU 20% mais rápida </li>
                        <li>GPU 25% mais eficiente</li>
                        <li>Neural Engine com núcleos</li>
                        <li>Ray tracing acelerado por hardware</li>
                    </ul>
                </div>


                <div id="camera" className="text-center">
                    <h3 className="text-4xl font-bold mb-10">Sistema de câmera Pro avançado</h3>
                    
                    <div className="grid grid-cols-3 gap-6 ">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 hover:cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco automático</p>
                        </div>


                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 hover:cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-orange-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                            <p className="text-gray-400">Campo de visão de 120 com modo noturno</p>
                        </div>


                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 hover:cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefone 5x</h4>
                            <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hightlight