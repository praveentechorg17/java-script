function form_validate(){
   let name= document.getElementById("ename").value
   // alert(name)
   if( name == "" && name.length <=5){
      document.getElementById("abc").innerHTML=" *Please Enter User Name"
      // alert("Pls Enter Name")
   }

   let email= document.getElementById("eemail").value;
   if(email == ""){
      document.getElementById("msg").innerHTML="*Please Enter Email Id " 
   }
   let xyz= document.getElementById("enumber").value
   if ( xyz == ""){
document.getElementById("praveen").innerHTML="*Plese Enter Mobile Number"
   }
   return false
}
 
 

 
 
 