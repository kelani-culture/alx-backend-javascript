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