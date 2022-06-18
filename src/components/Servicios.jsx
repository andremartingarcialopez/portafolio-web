import React from 'react'

const Servicios = () => {
    return (
        <>
            <div id='servicios' className=' h-auto lg:pt-[5rem] w-full'>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <h2 className='background-titulos text-shadow titulos'>Mis Servicios</h2>
                    <h3 className='subtitulos'>Un compañero de trabajo el cual se caracteriza por ser perseverante y responsable.</h3>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='w-full gap-y-4 flex lg:flex-row flex-col justify-center lg:justify-center lg:gap-x-20 items-center pb-20'>

                    {/*                     <div className='flex relative '>
                        <img className='p-[3.1rem] mx-[0.5rem]' src="img/1.svg" width={"350px"} alt="" />

                        <div className='absolute flex flex-col gap-y-[6rem] lg:gap-y-[5.5rem]'>
                            <img src="img/2.svg" className='animate__animated animate__pulse animate__infinite animate__slower  lg:w-[9rem] w-[8.5rem] ' alt="" />
                            <img src="img/3.svg" className='animate__animated animate__pulse animate__infinite animate__slower  lg:w-[8.5rem] w-[8.5rem]' alt="" />
                        </div>

                        <div className='absolute flex flex-col w-full   items-end gap-y-[8rem] lg:gap-y-[5rem]'>
                            <img src="img/4.svg" className='animate__animated animate__pulse animate__infinite animate__slower  lg:w-[8rem] w-[7rem] px-2 ' alt="" />
                            <img src="img/5.svg" className='animate__animated animate__pulse animate__infinite animate__slower  lg:w-[8.5rem] w-[8.5rem] ' alt="" />
                        </div>
                    </div> */}

                    <img className='w-[22rem]' src="img/yo1.webp" alt="imagen-servicios" />

                    <div className='flex flex-col pt-7 lg:pt-0  justify-center items-center gap-y-[2rem]'>

                        <div className='glass-object-servicios px-7 w-[20rem] rounded-lg p-2'>
                            <div className='flex flex-row justify-start items-center'>
                                <i className="fa-solid fa-laptop-code skill-title text-5xl"></i>
                                <h3 className='skill-title text-center text-2xl pb-2 font-[600]'>Habilidades de Desarrollador</h3>
                            </div>
                            <p className='text-white/90'>Conocimiento de las tecnologias web HTML, CSS, Javascript y React.js. Me gusta hacer paginas web responsivas con TailwindCSS con diseños de interfaz atractivos visulamente para los usuarios.</p>
                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}

export default Servicios