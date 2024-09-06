import React from 'react';

export default function StudentTable({ students, student, handleClick }) {
    const studentData =
        students.map((std, index) =>
        (
            <tr
                key={std.id}
                onClick={() => handleClick(std)}
                className={`grid grid-cols-4 p-3 text-grey-400 hover:bg-blue-primary hover:text-white
                ${student && student.id === std.id ? 'bg-blue-secondary text-white' : ''}
                ${(!student || student.id !== std.id) && index % 2 === 0 ? 'bg-dark-blue-transparent' : ''}`}>

                <td>{std.first_name}</td>
                <td>{std.last_name}</td>
                <td>{703700 + std.id}</td>
                <td>{std.email}</td>
            </tr>
        ));

    return (
        <div className='w-[820px] mx-auto h-[490px] overflow-y-auto scroll-container'>
            <table className='min-w-full'>
                <thead className='sticky top-0'>
                    <tr className='grid grid-cols-4  text-grey-10 bg-dark-blue-primary p-4 text-left'>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Student ID</th>
                        <th>Email Address</th>
                    </tr>
                </thead>

                <tbody>
                    {students && studentData}
                    {!students &&
                        <tr className='flex items-center justify-center min-h-[432px]'>
                            <td colSpan='4' className='text-3xl text-dark-blue-secondary font-extrabold'>No students found</td>
                        </tr>}
                </tbody>
            </table>
        </div>
    )
}
