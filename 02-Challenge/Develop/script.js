// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn'); //this says when they clicks the add employess button, make something happen

let employeesArray= []
// Collect employee data
const collectEmployees = function() {
  let firstNameInput= prompt("Enter first name of employee")
  let lastNameInput= prompt ("Enter last name of employee")
  let salaryInput= prompt ("Enter salary")

  let employee= {
    firstName: firstNameInput, 
    lastName: lastNameInput,
    salary: salaryInput
}   //This is a user created object

employeesArray.push(employee)

return employeesArray
console.log (displayAverageSalary(salaryArray))
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let array = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    array += employeesArray [i];
  }
return array/employeesArray.length
}

let salaryArray = employeesArray.map(e=> {
  return + e.salary
  })






// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

// displayEmployees([
//   {
//   firstName: "Sally",
//   lastName: "Smith",
//   salary: 55000 
// },
// {
//   firstName: "Sally",
//   lastName: "Smith",
//   salary: 55000 
// },
// ])

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);



// git remote add origin https://github.com/magtron3030/employee.salary.doc.git