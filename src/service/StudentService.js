import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/students';

export const fetchStudents = () => axios.get(API_URL, { timeout: 1000, });
export const fetchStudentById = (id) => axios.get(`${API_URL}/${id}`);
export const createStudent = (studentData) => axios.post(API_URL, studentData);
export const updateStudent = (id, studentData) => axios.put(`${API_URL}/${id}`, studentData);
export const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);