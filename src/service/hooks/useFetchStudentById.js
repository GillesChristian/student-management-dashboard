import { useState, useEffect } from 'react';

import { fetchStudentById } from '../StudentService';

export const useFetchStudentById = (id) => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadStudent = async () => {
            try {
                const response = await fetchStudentById(id);
                setStudent(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadStudent();
    }, [id]);

    return { student, loading, error };
};
