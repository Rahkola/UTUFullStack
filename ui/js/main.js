// api.js included in index.html and the functions available in global namespace

const updateEmployeesDOM = (employees) => {
  //$("#employees").html(employees);
  JSON.parse(employees).forEach(function (val){$('#elist').append('<li>'+val.employee_name+'</li>')});
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

