// let a=["apple", "banana", "orange"]
// let b=["bat", "ball", "wickets","grapes" ,"banana"]
// let c=[...a,  ...b]
// console.log(c)
// console.log(b)


let account={id:101, name:"praveen", email:"praveen1999@gmail.com"}
let details={id:102, name:"lokesh"}
let account_details={...account, ...details}
console.log(account_details)