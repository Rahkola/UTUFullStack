// API http://dummy.restapiexample.com/

/**
 * Get all employee data
 * @param {function} callback Callback function which is invoked after request completes successfully
 */
const getEmployees = (callback) => $.get('http://dummy.restapiexample.com/api/v1/employees', data => {
  callback(data);
});

/**
 * Get a single employee data
 * @param {number} id Employee id
 * @param {function} callback Callback function which is invoked after request completes successfully
 */
const getEmployee = (id, callback) => $.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`, data => {
  callback(data);
});

/**
 * Create new record in database
 * @param {{"employee_name":"test","salary":"123","age":"23","id":"719"}} employee Employee information
 */
const createEmployee = (employee, callback) => $.ajax({
  url:'http://dummy.restapiexample.com/api/v1/create',
  type:"POST",
  data:employee,
  contentType:"application/json; charset=utf-8",
  dataType:"json",
  success: data => {
    callback(data);
  }});

/**
 * Update an employee record
 * @param {number} id Employee id
 * @param {{"employee_name":"test","salary":"123","age":"23","id":"719"}} employee Employee information
 */
const updateEmployee = (id, employee) => $.put(`http://dummy.restapiexample.com/api/v1/update/${id}`, employee, data => {
  callback(data);
});

/**
 * Delete an employee record
 * @param {number} id Employee id
 */
const deleteEmployee = (id) => $.get(`http://dummy.restapiexample.com/api/v1/delete/${id}`, data => {
  callback(data);
});