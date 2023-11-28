"use client"
import Link from 'next/link';
import React from 'react'
import './styles.css'

function Naruto() {
    const imgN="https://proyectotopicos22.000webhostapp.com/narutoLog.png";
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <div>
            <div className=" flex justify-center items-center">
                <img src={imgN} width={500} height={45}/>
                {/* <h1 className='text-white tituloNaruto'>Naruto</h1> */}
            </div>

            <div>
                <ul className='pt-3'>
                    <>
                    <li>
                        <Link className="text-violet-500  m-5 capitulosSt " href="naruto/capitulo">Capitulo1</Link>
                    </li>
                    <li>
                        <Link className="text-violet-500  m-5 capitulosSt " href="naruto/capitulo2">Capitulo2</Link>
                    </li>
                    </>
                </ul>
            </div>
            
        </div>
    </section>
  )
}

export default Naruto;