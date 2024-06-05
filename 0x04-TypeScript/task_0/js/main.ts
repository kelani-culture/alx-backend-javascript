interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const student1: Student = {firstName: 'John', lastName: 'cena', age: 23, location: 'san fran'};
const student2: Student = {firstName: 'John', lastName: 'john', age: 24, location: 'lagos'};

let studentsList: Student[] = [student1, student2];


const table = document.createElement('table');
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Location'];

headers.forEach(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});

table.appendChild(headerRow);

studentsList.forEach(student => {
  const row = document.createElement('tr');
  
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);
  
  table.appendChild(row);
});

document.body.appendChild(table);