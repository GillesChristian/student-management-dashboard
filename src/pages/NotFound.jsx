import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

export default function NotFound() {
    return (
        <div className='flex items-center justify-center flex-col h-screen font-poppins'>
            <div className='text-center tracking-wider mb-8'>
                <h1 className='text-9xl font-black'>404</h1>
                <p className='-mt-2 text-grey-300'>Ooups, Page not found!</p>
            </div>
            <Link to={'/dashboard'}>
                <Button buttonText={'Go to Dashboard'} color={'bg-dark-blue-secondary text-white'} />
            </Link>
        </div>
    )
}
