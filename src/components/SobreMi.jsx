import React from 'react'

const SobreMi = () => {
    return (
        <>
            <div id='sobreMi' className='text-center lg:h-auto h-auto w-full md:pt-14'>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h2 className='background-titulos text-shadow titulos pt-14'>Sobre mi</h2>
                    <h3 className='subtitulos pb-0'>Un poco más de mi vida...</h3>
                </div>
                <div className='w-full gap-y-4 flex flex-col justify-center lg:justify-around lg:gap-x-20 items-center pb-20'>

                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src="img/yo2.svg" className='w-[370px]  ' alt="" />
                    </div>

                    <div  className='flex flex-col lg:flex-row justify-around items-around gap-y-10 lg:gap-x-10'>

                        <div data-aos="fade-up" data-aos-duration="1000" className='glass-object-sobre-mi w-[20rem] rounded-2xl py-2 px-3'>
                            <div className='flex justify-center md:justify-start items-baseline gap-x-2 about-title text-2xl lg:text-2xl'>
                                <i className="fa-solid fa-graduation-cap"></i>
                                <h3 className='text-center pb-2 font-[600] uppercase'> Educación</h3>
                            </div>
                            <p className='text-white/80 text-left'>Estudie la carrera de "Ingeniería en Computación" en el Centro Universitario de Ciencias Exactas e Ingenierías | CUCEI.</p>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" className='glass-object-sobre-mi w-[20rem] rounded-2xl py-2 px-3'>
                            <div className='flex justify-center md:justify-start items-baseline gap-x-2 about-title text-2xl lg:text-2xl'>
                                <i class="fa-solid fa-person-running"></i>
                                <h3 className='text-center pb-2 font-[600] uppercase'>Deporte</h3>
                            </div>
                            <p className='text-white/80 text-left'>Me considero una persona activa/atlética por lo cual disfruto mucho cada día el hacer actividad física por ejemplo hacer ejercicio, salir a caminar o mi actividad favortita, salir a correr.</p>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" className='glass-object-sobre-mi w-[20rem] rounded-2xl py-2 px-3'>
                            <div className='flex justify-center md:justify-start items-baseline gap-x-2 about-title text-2xl lg:text-2xl'>
                                <div>
                                    <i class="fa-solid fa-music"></i>
                                    <i class="fa-solid fa-gamepad"></i>
                                </div>
                                <h3 className='text-left pb-2 font-[600] uppercase'> Musica y Videojuegos</h3>

                            </div>
                            <p className='text-white/80 text-left'>En mi tiempo libre me encanta jugar videojuegos, disfruto escuchar música para relajarme un poco como también me gusta tocar la guitarra y mezclar música.</p>
                        </div>

                    </div>



                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='pt-4'>
                    <h2 className='text-shadow titulos'> Responsable. Perseverante. Trabajador.</h2>
                    <a className='subtitulos md:text-2xl' href="https://www.instagram.com/andre_garlop/" target={"_blank"}>¿Quieres saber más sobre mí? <br /> Visita mi <span className='degradado-instagram'>Instagram</span> </a>
                </div>

            </div>
        </>
    )
}

export default SobreMi