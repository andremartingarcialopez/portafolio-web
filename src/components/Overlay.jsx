import React from 'react'

const Overlay = () => {
    return (
        <>
            <div className='bg-animacion w-full h-screen md:flex flex flex-col lg:flex-row justify-center lg:gap-x-[7rem] items-center px-7 pt-[3rem]'>

                <div className='flex justify-center items-center container mx-auto'>
                    <img className='border-img md:w-[400px]  w-[250px] glass-object-profile' width="100px" height="100px" src="img\imagen-perfil.webp" alt="imagen-perfil" />
                </div>

                <div className='flex flex-col justify-center lg:items-center lg:h-[90vh]'>

                    <h1 className='text-shadow titulos text-white/70'>Futuro Desarrollador<br />
                        <p className='md:pt-5'>Front-End/React</p>
                    </h1>

                    <p className='text-center pt-5 text-black/50 text-base font-[600]'>
                        Me considero una persona trabajadora,organizada con mi tiempo y responsable. Me
                        gusta que el trabajo se entregue de la mejor manera posible. Busco una oportunidad laboral donde pueda
                        desarrollar mis habilidades y conocimientos como también aprender y desarrollar nuevas.</p>
                    <div className='flex flex-row justify-center items-baseline pt-5 gap-x-3 text-xl text-black/50'>
                        <i className="fa-solid fa-location-dot"></i>
                        <p className='text-center pt-5 text-black/50 text-xl font-[600]'>Guadalajara Jalisco, México</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Overlay