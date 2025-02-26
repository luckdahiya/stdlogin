import axios from 'axios';
import React, { useState } from 'react';
import './Form.css';
import Navbar from './Navbar';

const Form = () => {
    const [formData, setFormData] = useState({ name: '', studentClass: '', age: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.name || !formData.studentClass || !formData.age) {
            alert('All fields are required!');
            return;
        }
        try {
            await axios.post('http://localhost:7000/form', {name: formData.name, studentClass: formData.studentClass, age: formData.age,
            });
            alert('Form submitted successfully');
        } catch (error) {
            console.error('Error occurred in submitting the form', error.response || error.message);
            alert('Error submitting form');
        }
    };
    

    return (
        <>
        <div className="container">
            <Navbar />
            <form onSubmit={handleSubmit}>
                <h2>Student Registration</h2>
                <div id='all-three'>
                    <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label>Class:</label>
                    <input
                        type="number"
                        name="studentClass"
                        value={formData.studentClass}
                        onChange={handleChange}
                        placeholder="Enter your class"
                        required
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter your age"
                        required
                    />
                </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}

export default Form;
