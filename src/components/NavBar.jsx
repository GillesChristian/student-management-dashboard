import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaHome } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

import IconButton from './IconButton';

export default function NavBar() {
    return (
        <div className='flex flex-col space-y-1 mt-10'>
            <NavLink
                to={'/dashboard'}
                className={({ isActive }) => isActive ? 'active' : ''}
            >
                {({ isActive }) => (
                    <IconButton icon={<FaHome />} buttonText={'Dashboard'} isActive={isActive} />
                )}
            </NavLink>

            <NavLink to={'/students'}
                className={({ isActive }) => isActive ? 'active' : ''}
            >
                {({ isActive }) => (
                    <IconButton icon={<FaUsers />} buttonText={'Students'} isActive={isActive} />
                )}
            </NavLink>

        </div>
    )
}
