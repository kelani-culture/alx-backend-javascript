interface Teacher {
    firstName: string,
    lastName: string,
    location: string
    yearsOfExperience?: number,
    contract: boolean,
    fullTimeEmployee: boolean,
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};


interface Directors extends  Teacher {
  numberOfReports: number,
};


// a function that print teacher

function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + '. ' + lastName;
}

console.log(printTeacher(teacher3.firstName, teacher3.lastName));