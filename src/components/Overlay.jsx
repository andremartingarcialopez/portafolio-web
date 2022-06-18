import React from 'react'

const Overlay = () => {
    return (
        <>
            <div className='bg-animacion w-full h-screen md:flex flex flex-col lg:flex-row justify-center lg:gap-x-[7rem] items-center gap-y-[4rem] p-2'>

                <div className='flex justify-center items-center'>
                    <img className='border-img md:w-[400px] w-[300px] glass-object-profile' width="700px" height="700px" src="img\imagen-perfil.webp" alt="imagen-perfil" />
                </div>

                <div className='flex flex-col justify-center lg:items-center lg:h-[90vh]'>

                    <h1 className='text-shadow titulos text-white/70'>Desarrollador<br />
                        <p className='md:pt-5'>Front-End/React</p>
                    </h1>

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