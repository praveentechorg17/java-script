class fruits{
constructor(banana,grapes){
this.fruits_banana=banana;
this.fruits_grapes=grapes
}
}
class fruitcolors  extends fruits{
 constructor(guavava,banana,grapes,thamarind,){
    super(banana,grapes);
    this.fruits_guavava=guavava;
    this.fruits_thamarind=thamarind
 }
}
let c1= new  fruitcolors("green","yellow", "red", "blue")
console.log(c1)
class lokesh extends fruits{
    constructor(guavava,banana,grapes,thamarind,cherry){
        super(banana,grapes)
        this.fruits_guavava=guavava;
        this.fruits_thamarind=thamarind;
        this.fruits_cherry=cherry
    }
   
}
let c2= new lokesh('guavava','banana','grapes','thamarind','cherry');
console.log(c2)