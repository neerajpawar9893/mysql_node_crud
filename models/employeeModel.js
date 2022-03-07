class Employee {
    constructor(data) {
        this.empName = data.empName;
        this.empId = data.empId;
        this.empProfile = data.empProfile
    }

    addEmp() {
        return `INSERT INTO employee (empName, empId, empProfile) VALUE('${this.empName}', '${this.empId}','${this.empProfile}')`
    }

    static getEmpById(id) {
        console.log(id,"<========id")
        return `SELECT * FROM employee WHERE empId= '${id}'`
    }

    static getAllEmp() {
        return `SELECT * FROM employee WHERE is_deleted = '${0}'`
    }

    updateEmp(id) {
        return `Update employee SET empName = '${this.empName}', empProfile= '${this.empProfile}' WHERE empId = '${id}' `
    }

    static deleteEmp(id) {
        return `Update employee SET is_deleted = '${1}' WHERE empId ='${id}'`
    }
}

module.exports = Employee;