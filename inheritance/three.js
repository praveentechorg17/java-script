class parent{
constructor(msg){
    console.log(msg)
    console.log("my name is praveen")
}
}
class child extends parent{
    constructor(){
        super("india");
        console.log("my name is lokesh")
    }
}
new child();