import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './View.css';
import Navbar from './Navbar';

const View = () => {
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

    return (
        <>
            <Navbar />
            <div className="view-container">
                <div id='view-background'></div>
                <h2>Student Records</h2>
                {students.length === 0 ? (
                    <p className="no-records">No student records available.</p>
                ) : (
                    <table className="view-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student._id}>
                                    <td>{student.name}</td>
                                    <td>{student.studentClass}</td>
                                    <td>{student.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default View;
