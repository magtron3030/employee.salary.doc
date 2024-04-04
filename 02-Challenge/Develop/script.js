// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn'); //this says when they clicks the add employess button, make something happen

let employeesArray = []
// Collect employee data
const collectEmployees = function() {
  let firstNameInput= prompt("Enter first name of employee")
  let lastNameInput= prompt ("Enter last name of employee")
  let salaryInput= prompt ("Enter salary")

  let employee = {
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
  
  let totalSalaries = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalaries += parseInt(employeesArray[i].salary);
  }
  return totalSalaries/employeesArray.length
}




// Select a random employee

  const getRandomEmployee = function(employeesArray) {
  const random = employeesArray [Math.floor(Math.random() * employeesArray.length)];

  console.log(`Congratulations to ${random.firstName} ${random.lastName} for winning unlimted cheese sticks for the rest of your life!`)
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


const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  const avgSalary = displayAverageSalary(employees);

  console.log('==============================');
  console.log(avgSalary)

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



