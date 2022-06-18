import React from 'react'

const MainContacto = () => {
  return (
    <>
      <div className='h-screen w-full'>

        <div>
          <h2 data-aos="fade-up" data-aos-duration="1000" className="flex justify-center items-center pt-[7rem] titulos background-titulos px-1 ">Medios de contacto</h2>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center h-[70%]'>

          <div className='flex justify-center items-center ' data-aos="fade-up" data-aos-duration="1000">
            <img className='md:w-[27rem] w-[15rem] pb-7' src="img\yo3.webp" width="100px" height="100px" alt="imagen-contacto" />
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-around justify-around gap-y-12 pb-5 '>

            <div className='hover:glass-object-whats glass px-7 w-[17rem] rounded-lg p-2 animate__animated animate__headShake animate__infinite animate__slow'>
              <a href='https://api.whatsapp.com/send?phone=+523312839590' target={"_blank"} className='whats-title flex flex-row justify-start items-center gap-x-5'>
                <i className="fa-brands fa-whatsapp text-5xl"></i>
                <h3 className='text-center text-2xl pb-2 font-[600]'>WhatsApp</h3>
              </a>
            </div>

            <div className='hover:glass-object-call glass px-7 w-[17rem] rounded-lg p-2 animate__animated animate__headShake animate__infinite animate__slow'>
              <a href='tel:+333312839590' target={"_blank"} className='call-title flex flex-row justify-start items-center gap-x-5'>
                <i className="fa-solid fa-phone-volume text-5xl"></i>
                <h3 className='text-center text-2xl pb-2 font-[600]'>LLamada</h3>
              </a>
            </div>

            <div className='hover:glass-object-email glass px-7 w-[17rem] rounded-lg p-2 animate__animated animate__headShake animate__infinite animate__slow'>
              <a href='mailto:andregarlop.job@gmail.com' target={"_blank"} className='email-title flex flex-row justify-start items-center gap-x-5'>
                <i className="fa-solid fa-envelope-open-text text-5xl"></i>
                <h3 className='text-center text-2xl pb-2 font-[600]'>Email</h3>
              </a>
            </div> 

          </div>

        </div>

      </div>

    </>
  )
}

export default MainContacto