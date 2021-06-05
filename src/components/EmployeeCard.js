import React from 'react';

function EmployeeCard(props) {
    const { id, name, gender, age, email, phoneNo } = props.data;

    return (
        <div className="employee-card">
            <p><span>ID:</span> {id}</p>
            <p><span>Name:</span> {name}</p>
            <p><span>Gender:</span> {gender}</p>
            <p><span>Age:</span> {age}</p>
            <p><span>Email:</span> {email}</p>
            <p><span>Phone No:</span> {phoneNo}</p>
        </div>
    );
}

export default EmployeeCard;