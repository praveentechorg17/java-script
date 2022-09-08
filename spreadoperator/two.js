const bcrypt = require("bcrypt")

 let user ={
         id:"101",
         name:"lokesh",
         email:"gopi123@gmail.com",
         sal:"450000"
 }
let salt=bcrypt.genSaltSync(5);
let newid=bcrypt.hashSync(user.id,salt);
let newname=bcrypt.hashSync(user.name,salt);
let newemail=bcrypt.hashSync(user.email,salt);
let newsal=bcrypt.hashSync(user.sal,salt)
// console.log(user.id)
let new_user={...user,id:newid,name:newname,email:newemail,sal:newsal}
// console.log(user)
console.log(new_user)
