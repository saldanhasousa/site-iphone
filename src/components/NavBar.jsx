function NavBar(){
    return(
        <div>
            <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">

                
                <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-center gap-8">
                    <a href="" className="hover:text-gray-300">Designer</a>
                    <a href="" className="hover:text-gray-300">Camera</a>
                    <a href="" className="hover:text-gray-300">Performace</a>
                    <a href="" className="hover:text-gray-300">Cores</a>
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-2xl">Comprar</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar