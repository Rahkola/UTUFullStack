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

const onAddNewEmployeeButtonClick = () =>{
  let name = $("#name").val();
  let age = $("#age").val();
  let salary = $("#salary").val();
  let id = Math.random(1,20000);
  let newEmployee = { name, age, salary, id };
  console.log(newEmployee);
  createEmployee(JSON.stringify(newEmployee), () => {
    getEmployees(data => {
      updateEmployeesDOM(data);
    });
  });
}

// getEmployee(17647, data => {
//   console.log(data);
//   $("#employees").html(data);
//   //updateEmployeesDOM(data);
// })

// DOM manipulation functions

