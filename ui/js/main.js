// api.js included in index.html and the functions available in global namespace


const updateEmployeesDOM = (employees) => {
  JSON.parse(employees).forEach(function (val){$('#elist').append('<li>'+
    '<span>' + val.employee_name+'</span><img a src="https://www.gravatar.com/avatar/'+md5(val.employee_name)+'?d=identicon"></li>')});
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

