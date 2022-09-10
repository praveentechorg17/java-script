let employees = [{ id: 101, name: "praveen", loc: "banglore" },
{ id: 102, name: "gopi", loc: "hyderabad" }]
let createemployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, 6000)
}
let getemployee = () => {
    setTimeout(()=>{
        let rows=""
        employees.forEach((employee)=>{
            rows=rows+`<tr>
                           <td>${employee.id}</td> 
                           <td>${employee.name}</td> 
                           <td>${employee.loc}</td>
            
            
            
            </tr>`
        })
        document.getElementById("eng").innerHTML=rows
    },1000)
}
createemployee({ id: 103, name: "lokesh", loc: "mysore" }, getemployee)        