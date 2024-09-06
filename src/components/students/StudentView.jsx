import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useFetchStudents } from '../../service/hooks/useFetchStudents';
import StudentTable from './StudentTable';
import StudentCard from './StudentCard';
import Button from '../Button';
import Loader from '../Loader';

export default function StudentView() {
    const { students, loading, error } = useFetchStudents();
    const [stdData, setStdData] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (students !== stdData) {
            setStdData(students);
        }
    }, [students]);

    const handleClick = (student) => {
        setSelectedStudent(student);
        navigate(`/students/${703700 + student.id}`);
        // console.log(student);
    };

    const handleStudentDelete = (studentID) => {
        setStdData(prevStudents =>
            prevStudents.filter(student => student.id !== studentID)
        );
        if (selectedStudent && selectedStudent.id === studentID) {
            setSelectedStudent(null);
        }
        navigate(`/students`);
    };
    return (
        <>
            {loading && <Loader />}
            <div>
                <Link to={'/students/create-student'} className='ml-6'>
                    <Button buttonText='Add Students' color='bg-blue-primary text-white' />
                </Link>

                <div className='flex justify-evenly gap-x-4 px-4 mt-10'>
                    <StudentTable students={stdData} student={selectedStudent} handleClick={handleClick} />
                    <StudentCard
                        firstName={`${selectedStudent?.first_name || 'XXXXXXXX'}`}
                        lastName={`${selectedStudent?.last_name || 'XXXXXXXX'}`}
                        stdID={selectedStudent?.id || ''}
                        email={selectedStudent?.email || 'xxxxx.xx@gmail.com'}
                        dateOfBirth={selectedStudent?.date_of_birth || 'XX-XX-XXXX'}
                        onDelete={handleStudentDelete} />
                </div>

            </div>
        </>
    )
}
