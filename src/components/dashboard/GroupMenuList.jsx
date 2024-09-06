import React from 'react';
import { Link } from 'react-router-dom';
import { FaLandmark, FaUserPlus, FaUserCog } from 'react-icons/fa';


import MenuList from './MenuList';

export default function GroupMenuList() {
    return (
        <div className='mt-0'>
            <div className='mb-10 font-semibold tracking-wide'>
                <h1 className='text-36 text-black'>
                    Welcome to the Students Dashboard
                </h1>
                <p className='text-24 text-grey-400 text-center'>
                    Here is how you can manage students
                </p>
            </div>
            <div>
                <Link to='/students'>
                    <MenuList
                        icon={<FaLandmark />}
                        title={'View all students'}
                        description={'View all the students stored in our database.'}
                    />
                </Link>

                <Link to='/students/create-student'>
                    <MenuList
                        icon={<FaUserPlus />}
                        title={'Add student'}
                        description={'Add other student to the system.'}
                    />
                </Link>

                <Link to='/students'>
                    <MenuList
                        icon={<FaUserCog />}
                        title={'Edit and Delete student'}
                        description={'you can also edit and delete users on the system.'}
                    />
                </Link>
            </div>
        </div>
    )
}
