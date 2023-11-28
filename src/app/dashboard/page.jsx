"use client"
import Link from 'next/link';
import './styles.css'
function DashboardPage() {
  const image = 'https://proyectotopicos22.000webhostapp.com/narutoLog.png';
  const image2 = 'https://proyectotopicos22.000webhostapp.com/onepiceLog.png';
  const image3 = 'https://proyectotopicos22.000webhostapp.com/myHeroAcademiaLog.png';
  const image4 ='https://proyectotopicos22.000webhostapp.com/bleachLog.webp';
  const image5 ='https://proyectotopicos22.000webhostapp.com/dragonBLog.png';
  const tamanoImg = 60;
  return (<>
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <div>
          <div className='flex justify-center items-center'>
            <h1 className="text-white text-5xl ">Programas disponibles</h1>
          </div>
        <div className=' flex  justify-center items-center  contenedorx'>
          <ul className="  text-white ">
            
            
            <li className='nuevo3  mx-5'>
                <Link  href="dashboard/naruto">
                  <img src={image} width={tamanoImg} height={tamanoImg} />
                </Link>
            </li>
            <li className='nuevo3 mx-5'>
              <Link  href="dashboard/naruto">
                <img src={image2} width={tamanoImg} height={tamanoImg} />
               </Link>
            </li>
            <li className='nuevo3  mx-5'>
              <Link  href="dashboard/naruto">
                <img src={image3} width={tamanoImg} height={tamanoImg} />
              </Link></li>
            <li className='nuevo3  mx-5'>
              <Link href="dashboard/naruto">
                <img src={image4} width={tamanoImg} height={tamanoImg} />
              </Link></li>
            <li className='nuevo3  mx-5'>
              <Link href="dashboard/naruto">
                <img src={image5} width={tamanoImg} height={tamanoImg} />
              </Link></li>
            
          </ul>
        </div>
            
        </div>
    </section>
    </>
  )
}
export default DashboardPage;