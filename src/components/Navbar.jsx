
import Link from 'next/link'
import './styles.css'
import Image from 'next/image'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'


async function Navbar() {
const session = await getServerSession(authOptions)
const image = 'https://proyectotopicos22.000webhostapp.com/anime.jpg';
console.log(session)
  return (
   <nav className='  flex justify-between text-white px-24 items-center py-3 navCss'>
        <img src={image} width={50} height={50} className='imgT'/>
        <h1 className='text-xl font-bold geek'>GEEKTOWN</h1>
        <ul className='flex gap-x-2'>
            {!session?.user ? (
                    <>
                    <li>
                        <Link className=" nuevo" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                         <Link className=" nuevo"href="/auth/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className=" nuevo" href="/auth/register">
                            Register
                        </Link>
                    </li>       
            
                    </>
                    ):(
                        <>
                        <li>
                            <Link className=" nuevo" href="/">
                             Home
                            </Link>
                        </li>
                        <li>
                            <Link className=" nuevo" href="/dashboard">
                             Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link className=" nuevo" href="/api/auth/signout">
                            Logout
                            </Link>
                        </li>
                    </>
                    )
                } 
        </ul>
   </nav>
  );
}

export default Navbar