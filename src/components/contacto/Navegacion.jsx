import React from 'react'
import { Link } from "react-router-dom"

const Navegacion = () => {
    return (
        <div>
            <div className='glass text-white/70 hover:text-white md:flex block itemes-center justify-around py-4 fixed w-full'>

                <div className=''>
                    <Link to={"/"} className='flex justify-center items-center gap-x-3 efecto-hover-enlace md:text-xl font-semibold' >
                        <i class="fa-solid fa-arrow-left"></i>
                        <p>André Martín García López</p>

                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Navegacion