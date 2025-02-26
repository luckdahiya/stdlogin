import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Delete.css';
import Navbar from './Navbar';

const Delete = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:7000/form'); 
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching the students:', error);
            }
        };

        fetchStudents();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:7000/form/${id}`); 
            setStudents(students.filter((student) => student._id !== id));
            alert('Student deleted successfully!');
        } catch (error) {
            console.error('Error deleting the student:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="delete-container">
                <h2>Delete Student Records</h2>
                {students.length === 0 ? (
                    <p className="no-records">No student records available.</p>
                ) : (
                    <table className="delete-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student._id}>
                                    <td>{student.name}</td>
                                    <td>{student.studentClass}</td>
                                    <td>{student.age}</td>
                                    <td>
                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDelete(student._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Delete;
