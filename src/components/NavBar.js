import React from 'react'
import CartWidget from './CartWidget'
import logo1 from '../components/images/perez coffee.svg';

const NavBar = () => {
  return (
    <div className="navbar justify-around bg-base-100">
        <div className="w-64 rounded-full pr-32">
            <img
            src={logo1}
            />
            <a className="btn btn-ghost normal-case text-2xl text-amber-800">Perez Coffee</a>
        </div>
        <div>
            <ul  className='flex justify-around space-x-44 menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box'>
                <li><a className='text-3xl'>Home</a></li>
                <li><a className='text-3xl'>Tienda</a></li>
                <li><a className='text-3xl'>Productos</a></li>
            </ul>
        </div>
        <CartWidget/>
    </div>



  )
}

export default NavBar