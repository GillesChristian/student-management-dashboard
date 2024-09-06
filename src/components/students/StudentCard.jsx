import React from 'react';
import { Link } from 'react-router-dom';

import { useDeleteStudent } from '../../service/hooks/useDeleteStudent';
import Button from '../Button';
import CardList from './CardList';

export default function StudentCard({
    firstName = 'XXXXX',
    lastName = 'XXXXX',
    stdID = 'XXXXXX',
    email = 'xxxxx.xx@gmail.com',
    dateOfBirth = 'XX/XX/XXXX',
    onDelete
}) {
    const { deleteService, loading, error } = useDeleteStudent();

    const handleDelete = async () => {
        // console.log(`delete fired !!! ${stdID}`)
        if (window.confirm(`Are you sure you want to delete student with ID ${stdID}?`)) {
            try {
                console.log(typeof deleteService, stdID);
                await deleteService(stdID);
                if (onDelete) onDelete(stdID);
            } catch (err) {
                // console.log('Error Message deleting student:', err.message);
                alert('Failed to delete student. Please try again.');
            }
        }
    };

    return (
        <div className='w-[300px] bg-blue-primary rounded flex flex-col items-center py-10'>
            <div className='text-center tracking-wide'>
                <h1 className='text-white text-24 font-bold'>Student Info</h1>
                <CardList label={'Student Name'} title={`${firstName} ${lastName}`} />
                <CardList label={'Student ID'} title={stdID + 703700} />
                <CardList label={'Email Address'} title={email} />
                <CardList label={'Date Of Birth'} title={dateOfBirth} />
            </div>

            <div className='space-x-4 mt-8'>
                <Link to={`/students/edit-student/${stdID}`}
                    state={{ student: { firstName, lastName, stdID, email, dateOfBirth } }}>
                    <Button buttonText='Edit' color='bg-grey-200 text-white' />
                </Link>
                <Button
                    buttonText='Delete'
                    onClick={handleDelete}
                    color='bg-accent text-white'
                    disabled={loading}
                />
            </div>
            {error && <p className='text-red-500'>{error}</p>}
        </div>
    );
}
