import React from 'react'

const Footer = () => {
    return (
        <>

            <div className="custom-shape-divider-bottom-1654615957">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>

            <div className='bg-[#1d3557] text-white gap-y-4 w-full flex flex-col lg:flex-row justify-around  items-center h-auto py-3'>

                <div>
                    <p>©2022 André Martín García López</p>
                </div>

                <div>
                    <p>| Desarrolador React/Front-End |</p>
                </div>

                <div className='md:flex md:gap-x-10  grid grid-cols-2 gap-2  lg:grid lg:grid-cols-2 '>

                    <a className='enlaces-footer' href="https://github.com/andremartingarcialopez">
                        <i className="fa-brands fa-github"></i>
                        <p>Github</p>
                    </a>

                    <a className='enlaces-footer' href="mailto: andregarlop.job@gmail.com">
                        <i className="fa-solid fa-envelope"></i>
                        <p>Email</p>
                    </a>

                    <a className='enlaces-footer' href="https://www.linkedin.com/in/andr%C3%A9-garc%C3%ADa-l%C3%B3pez-ba8a26240/">
                        <i className="fa-brands fa-linkedin"></i>
                        <p>LinkedIn</p>
                    </a>

                    <a className='enlaces-footer' href="https://www.instagram.com/andre_garlop/">
                        <i class="fa-brands fa-instagram "></i>
                        <p>Instagram</p>
                    </a>

                    <a className='enlaces-footer col-span-2' target={"_blank"} href="/img/André-Martín-García-López-CV.pdf">
                        <i class="fa-solid fa-file-pdf"></i>
                        <p>Curriculum Vitae</p>
                    </a>

                </div>

            </div>

        </>
    )
}

export default Footer