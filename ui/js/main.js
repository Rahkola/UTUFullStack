// api.js included in index.html and the functions available in global namespace

const updateEmployeesDOM = (employees) => {
  $("#employees").html(employees);
}

// // API usage examples
// getEmployees(data => {
//   console.log(data);
//   updateEmployeesDOM(data);
// })

let employees;

const onGetEmployeesButtonClick = () => {
  getEmployees(data => {
    updateEmployeesDOM(data);
  })  
}

const onClearEmployeesButtonClick = () => {
  updateEmployeesDOM('');
}

// getEmployee(17647, data => {
//   console.log(data);
//   $("#employees").html(data);
//   //updateEmployeesDOM(data);
// })

// DOM manipulation functions

