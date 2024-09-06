import { useState, useEffect } from 'react';

import { fetchStudents } from '../StudentService';

export const useFetchStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadStudents = async () => {
            try {
                const response = await fetchStudents();
                setStudents(response.data.students);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadStudents();
    }, []);

    return { students, loading, error };
};
