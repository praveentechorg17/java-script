
let employees = [
                      { id: 101, name: "praveen ", sal: 45000 },
                      { id: 102, name: " santhosh", sal: 55000 },
                      { id: 103, name: "gopi ", sal: 65000 },
                     { id: 104, name: "dhoni", sal: 85000 },
                      {id:105, name:"nagendra", sal:75000}
                                           ]
function getEmployees() {
  let rows = ""
  for (let i = 0; i <= employees.length - 1; i++) {
      rows = rows + `<tr>
                          <td>${employees[i].id}</td>
                          <td>${employees[i].name}</td>
                          <td>${employees[i].sal}</td>
                      </tr>`
  }
  document.getElementById('tbody_Data').innerHTML = rows
}