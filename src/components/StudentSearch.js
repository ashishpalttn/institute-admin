import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = `${process.env.REACT_APP_API_URL}/secure/student/student`;
const StudentSearch = () => {
    const [searchInput, setSearchInput] = useState('');
    const [students, setStudents] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/search`, {
                params: {
                    name: isNaN(searchInput) ? searchInput : null, // Search by name if input is not a number
                    id: !isNaN(searchInput) ? searchInput : null, // Search by ID if input is a number
                },
                
            }, {withCredentials:true});
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    useEffect(()=>{
        handleSearch()
    },[searchInput])

    return (
        <div>
            <input
                type="text"
                placeholder="Search by Name or ID"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search Student</button>
            <div>
                {Array.isArray(students) && searchInput? students.map((student) => (
                    <div key={student.id}>
                        <p>{student.studentName} (ID: {student.id})</p>
                    </div>
                )):
                <p>No data found</p>
                }
            </div>
        </div>
    );
};

export default StudentSearch;
