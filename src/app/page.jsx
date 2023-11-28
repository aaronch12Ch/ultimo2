

import './globals.css'

function HomePage() {

 

  return (<>
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <div >
          <h1 className="text-white text-8xl nuevo2 ">Geektown</h1>
        
        <div className="flex justify-center items-center">
        <p className=" text-white text-6xl mt-4 ppod animate-bounce">Podcast</p>
        </div>
      </div>
    </div>
    <div className='border-dashed border-2 border-white bg-neutral-900	rounded-lg mx-8 flex justify-center items-center mt-16' >
      <h2 className="text-white text-8xl  nuevo3  ">¿Quienes somos?</h2>
      <p className=' text-white pl-5'>El propósito de este proyecto es crear una plataforma web 
        utilizando el lenguaje React para ofrecer a los entusiastas de la cultura 
        geek un espacio interactivo donde puedan explorar, disfrutar y discutir sobre 
        una amplia gama de temas, desde sagas cinematográficas hasta innovaciones tecnológicas, 
        cómics, videojuegos. y más. Esta introducción marca el inicio de un viaje para construir 
        un enclave digital que no solo presenta contenido, sino que también invita a la participación 
        activa, la interacción y la exploración de los rincones más fascinantes de la cultura geek.​</p>
    </div>
    </>
  )
}

export default HomePage