import React from 'react'

const Proyectos = () => {
    return (
        <>
            <div id='proyectos' className='text-center   h-auto lg:h-screen flex flex-col justify-center '>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h2 className='background-titulos text-shadow titulos'>Mis Proyectos</h2>
                    <h3 className='subtitulos'>Me encanta poder ayudar a los demas con mis conocimientos y habilidades.</h3>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col justify-center items-center lg:flex-row gap-x-5 gap-y-8 '>
                    <a href="https://garlo.netlify.app/" target={"_blank"}>
                        <img className='glass-object rounded-2xl w-[20rem]  lg:w-[23rem] xl:w-[25rem] hover:animate-pulse ' src="img/garlo-web.webp" alt="" />
                    </a>

                    <a href="https://proy-cucei-mindbot.herokuapp.com/" target={"_blank"}>
                        <img className='glass-object rounded-2xl  w-[20rem] lg:w-[23rem] xl:w-[25rem] hover:animate-pulse' src="img/mindbot-web.webp" alt="" />
                    </a>

                    <a href="https://happy-pet-citas.netlify.app/" target={"_blank"}>
                        <img className='glass-object rounded-2xl an w-[20rem] lg:w-[23rem] xl:w-[25rem] hover:animate-pulse' src="img/happypet-web.webp" alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Proyectos