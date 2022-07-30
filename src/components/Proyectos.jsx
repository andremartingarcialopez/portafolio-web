import React from 'react'

const Proyectos = () => {
    return (
        <>
            <div id='proyectos' className='text-center   h-auto flex flex-col justify-center '>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h2 className='background-titulos text-shadow titulos'>Mis Proyectos</h2>
                    <h3 className='subtitulos'>Me encanta poder ayudar a los demas con mis conocimientos y habilidades.</h3>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col justify-center items-center gap-x-5 gap-y-8 '>

                    <div className='flex flex-col justify-center items-center'>

                        <h4 className='font-bold text-[1.5rem] p-2 text-white/90'>Happy :) Pet</h4>
                        <a href="https://happy-pet-citas.netlify.app/" target="_blank">
                            <img className='glass-object rounded-2xl an w-[20rem] lg:w-[23rem] xl:w-[25rem] hover:animate-pulse' width="100px" height="100px" src="img/happypet-web.webp" alt="imagen-proyecto-happyPet-web" />
                        </a>
                        <p className='w-[20rem] text-center pt-2 text-white/90 '>Simulación de sitio web de agenda de mascotas, donde puedes agendar una cita como también poder editarla y eliminarla</p>
                        <p className='w-[20rem] text-center pt-2 text-white/90 '> <span className='font-bold'>Tecnologías:</span> <span className='text-[#8677fc]'>Vite</span><span className='text-[#d6bb32]'>JS</span>, <span className='text-[#38bdf8]'>TailwindCSS</span></p>
                    </div>

                    <div className='flex flex-col justify-center items-center '>
                        <h4 className='font-bold text-[1.5rem] p-2 text-white/90'>Shopy Car</h4>
                        <a href="https://shopy-car.netlify.app/" target="_blank">
                            <img className='glass-object rounded-2xl an w-[20rem] lg:w-[23rem] xl:w-[25rem] hover:animate-pulse' width="100px" height="100px" src="img/shopy-car.webp" alt="imagen-proyecto-shopy-car" />
                        </a>
                        <p className='w-[20rem] text-center pt-2 text-white/90 '>Simulación de una tienda web de cursos en el cual podemos agregar y quitar cursos a nuestro carrito de compras</p>
                        <p className='w-[20rem] text-center pt-2 text-white/90 '> <span className='font-bold'>Tecnologías:</span> <span className='text-[#E44D25]'>HTML</span>, <span className='text-[#264de4]'>CSS</span>, <span className='text-[#d6bb32]'>JavaScript</span></p>
                    </div>

                    <div className='flex flex-col justify-center items-center '>
                        <h4 className='font-bold text-[1.5rem] p-2 text-white/90'>Lista de tareas</h4>
                        <a href="https://listacheck.netlify.app/" target="_blank">
                            <img className='glass-object rounded-2xl an w-[20rem] lg:w-[23rem] xl:w-[25rem] hover:animate-pulse' width="100px" height="100px" src="img/check-list.webp" alt="imagen-proyecto-lista-de-tareas" />
                        </a>
                        <p className='w-[20rem] text-center pt-2 text-white/90 '>Simulación de una lista de tareas web en el cual podras agregar y eliminar tus tareas</p>
                        <p className='w-[20rem] text-center pt-2 text-white/90 '> <span className='font-bold'>Tecnologías:</span> <span className='text-[#E44D25]'>HTML</span>, <span className='text-[#264de4]'>CSS</span>, <span className='text-[#d6bb32]'>JavaScript</span></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Proyectos