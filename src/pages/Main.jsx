import Navegacion from "../components/Navegacion"
import Frase1 from "../components/Frase1"
import Overlay from "../components/Overlay"
import Servicios from "../components/Servicios"
import Proyectos from "../components/Proyectos"
import SobreMi from "../components/SobreMi"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"





const Main = () => {
    return (
        <>
            <Navegacion></Navegacion>
            <Overlay></Overlay>
            
            <div className="bg-body">
                <Frase1></Frase1>
                <Servicios></Servicios>
                <Proyectos></Proyectos>
                <SobreMi></SobreMi>
                <Contacto></Contacto>
                <Footer></Footer>
            </div>


        </>
    )
}

export default Main