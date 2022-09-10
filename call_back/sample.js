let employees = [{ id: 101, name: "praveen", salary: 45000 },
{ id: 102, name: "lokesh", salary: 55000 }]
let createemployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, 2000)
}
let getemployees = () => {
    setTimeout(() => {
        let rows = "";
        employees.map((employee) => {
            rows = rows + `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.salary}</td>
                        </tr>`

        })
        document.getElementById("rajini").innerHTML = rows
    }, 1000)
}
createemployee ({ id: 103, name: "gopi", salary: 65000 }, getemployees)
