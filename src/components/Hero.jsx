import { FaArrowDown } from "react-icons/fa";
function Hero(){
    return(
        <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute top-22 bottom-0 left-0 z-0">
                <img src="../../public/img/hero.jpg" alt="" />
            </div>

            <div>
                <FaArrowDown />
            </div>
        </section>
    )
}

export default Hero