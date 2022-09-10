let employee=[{ id: 101, name: "praveen", salary: 45000 },
{ id: 102, name: "lokesh", salary: 55000 }]

let createemployee=(emp)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{  
                let flag= true 
          employee.push(emp)

          flag?resolve("not inserted successufully"): reject("inserted successufully")
            },4000)
        })
}
let getemployee=()=>{
        setTimeout(()=>{
            let rows=""
            employee.forEach((employee)=>{
                rows=rows+`<tr>
                             <td>${employee.id}</td>
                             <td>${employee.name}</td>
                             <td>${employee.salary}</td>
                             </tr>`
            })
            document.getElementById("tbody_data").innerHTML=rows
        },1000)
}
createemployee({id:103, name:"gopi", salary:65000})
.then((abc)=>{
  getemployee(abc)
})
.catch((xyz)=>{
    console.log(xyz)
    
})