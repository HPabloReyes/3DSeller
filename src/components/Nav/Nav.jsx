import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link';
import home from './house.png'



function Nav() {
    return (
            
    <>
		<header>
        {/* <!-- Nav -->  */}
        <div className="nav">
            {/* <!-- Logo -->  */}
            <Link href={'/'} legacyBehavior>
            <a className="nav-logo" >
            <Image src={logo}  alt="13" className='nav-logo_img'/>
                3D<span className='span1'>SELLER</span>
                </a>
            </Link>
            {/* <!-- Nav Icons --> */}
            <div className="nav-icons">
                <Link href={"/productos"} legacyBehavior>
                <a className="btn" id="bell-icon" >Productos</a>
                </Link>
            </div>
            <div className="nav-icons">
                <Link href={"/contacto"} legacyBehavior>
                <a className="btn" id="bell-icon">Contacto</a>
                </Link>
            </div>
            <div className="nav-icons">
                <Link href={"/archivo"} legacyBehavior>
                <a className="btn" id="bell-icon">Archivo</a>
                </Link>
            </div>
            <div className="nav-icons">
                <Link href={"/recursos"}>
                <a className="btn" id="bell-icon">Recursos</a>
                </Link>
            </div>
            <div className="nav-icons">
                <Link href={"/createP"} legacyBehavior>
                <a className="btn" id="bell-icon">Crear Producto</a>
                </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Nav
