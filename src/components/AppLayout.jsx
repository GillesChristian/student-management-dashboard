import React from 'react';

export default function AppLayout({ children }) {
    return (
        <div className='flex w-full  h-screen maxWidth[1440px] font-poppins' >
            {children}
        </div>
    )
}
