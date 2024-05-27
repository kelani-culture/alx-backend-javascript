/** @format */

export default function createIteratorObject(report) {
  function* employeeGenerator() {
    const allEmployees = report.allEmployees;
    for (const department in allEmployees) {
      if (allEmployees.hasOwnProperty(department)) {
        for (const employee of allEmployees[department]) {
          yield employee;
        }
      }
    }
  }

  return employeeGenerator();
}
