class parent{
    constructor(){
        console.log("parent class constructor")
    }

}
class child extends parent{
constructor(){
    super();
    console.log("child class constructor")
}
}
new child();