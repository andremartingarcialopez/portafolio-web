import { Link } from 'react-router-dom'

const Navegacion = () => {
    return (
        <>

            <div className='glass z-100 text-white/70 hover:text-white md:flex block pl-2 itemes-center justify-around py-4 fixed w-full'>

                <div className=''>
                    <a className='efecto-hover-enlace md:text-xl font-semibold block' href="#">André Martín García López</a>
                </div>

                <div className='lg:flex gap-x-4 md:ml-[-100px] hidden'>
                    <a className='efecto-hover-enlace hover:font-semibold' href="#servicios">Servicios</a>
                    <a className='efecto-hover-enlace hover:font-semibold' href="#proyectos">Proyectos</a>
                    <a className='efecto-hover-enlace hover:font-semibold' href="#sobreMi">Sobre Mi</a>
                    <a className='efecto-hover-enlace hover:font-semibold' href='#contacto' > {/* TE QUEDASTE AQUIIIIIIIIIIIIIIIIIIIIIIII */}
                        Contacto
                    </a>
                </div>

                <div>
                    <Link to={"/contacto"} className='md:flex hidden justify-center items-center gap-x-2 transform hover:scale-105 transition hover:font-semibold' href="">
                        <p>Contactame</p>
                        <i className="fa-solid fa-arrow-right-long text-base"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navegacion