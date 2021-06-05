import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EmployeeCard from './EmployeeCard';

function Dashboard(props) {
    if(props.loginData.isLoggedIn !== true) {
        return (
            <Redirect to="/"/>
        );
    }

    const employees = props.employeesData.employees.map(employee => (
        <EmployeeCard key={employee.id} data={employee}/>
    ));

    return employees;
}

const mapStateToprops = state => ({
    loginData: state.login,
    employeesData: state.employees
});

export default connect(mapStateToprops, null)(Dashboard);