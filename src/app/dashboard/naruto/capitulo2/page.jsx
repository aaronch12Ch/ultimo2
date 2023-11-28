
"use client"
import React from 'react'
import Link from 'next/link';
import ReactAudioPlayer from 'react-audio-player';
import './styles.css'
function Cap2() {
    const audio2 ="https://proyectotopicos22.000webhostapp.com/podcast2.mp3";
    const img2 ="https://proyectotopicos22.000webhostapp.com/deshacer.png";
  return (<>
    <div className='m-2 regresarB'>
        <Link href="../naruto">
            <a className='button '>
                <img src={img2} width={45} height={45} />
            </a>
        </Link>
    </div>
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
        <div className="grid justify-items-center content-end  audios">
            
            <ReactAudioPlayer className='mb-6'
                    src={audio2}
                    autoPlay
                    controls
                />
        </div>
    </div>
    </>
  )
}

export default Cap2;