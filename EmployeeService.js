import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(API_URL);
  }
}

export default new EmployeeService();
