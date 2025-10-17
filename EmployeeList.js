import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then((response) => {
      setEmployees(response.data);
    });
  }, []);

  return (
    <div>
      <h3>Employees:</h3>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
