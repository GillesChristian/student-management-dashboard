import React from 'react';

export default function IconButton({ icon, buttonText, isActive }) {
    const btnClasses = isActive
        ? 'bg-blue-primary'
        : '';
    return (
        <div className='flex justify-center'>
            <button
                className={`flex gap-x-3 text-14 px-4 py-3 w-48 text-white rounded border-none font-semibold ${btnClasses}`}>
                <div className='text-lg'> {icon}</div>
                {buttonText}
            </button>
        </div>
    )
}
