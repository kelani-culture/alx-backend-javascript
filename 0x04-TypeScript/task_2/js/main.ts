/** @format */

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

const employee1 = createEmployee(300);

if (employee1 instanceof Teacher) {
  console.log(employee1.workFromHome());
  console.log(employee1.getCoffeBreak());
  console.log(employee1.workTeacherTasks());
}

const employee2 = createEmployee(1000);

if (employee2 instanceof Director) {
  console.log(employee2.workFromHome());
  console.log(employee2.getCoffeeBreak());
  console.log(employee2.workDirectorTasks());
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks() !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks()
}
