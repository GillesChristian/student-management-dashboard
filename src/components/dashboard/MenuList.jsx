import React from 'react';

export default function MenuList({ icon, title, description }) {
    return (
        <div className='flex items-center gap-x-8 px-8 py-7 rounded hover:bg-dark-blue-transparent'>
            <div className='bg-dark-blue-transparent p-3 rounded text-3xl text-dark-blue-secondary'>
                {icon}
            </div>
            <div className='text-grey-400 tracking-wide'>
                <h2 className='text-24 font-semibold'>{title}</h2>
                <p className='text-14'>{description}</p>
            </div>
        </div>

    )
}
