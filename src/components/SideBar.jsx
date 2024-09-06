import React from 'react';

import logo from '../assets/react.svg';
import NavBar from './NavBar';

export default function SideBar() {
    return (
        <div className='bg-dark-blue-primary h-full w-56 text-center'>
            <div className='flex justify-center items-center flex-col py-10 border-b-2 border-grey-200'>
                <img src={logo} alt="Udemy Inter. school Logo" className='w-20 mb-5' />
                <p className='text-white '>Udemy Inter. school</p>
            </div>
            <NavBar />
        </div>
    )
}
