
class parent{
    name='praveen'
    assets="100cr"
    get_good_qualities(){
        console.log("all parents are good ")
    }
    }
    
class child extends parent{
    get_naughty_qualities(){
        console.log("all children are good ")
    }
    

}
let c1= new  child();
console.log(c1.name+c1.assets)
c1.get_good_qualities()
c1.get_naughty_qualities()
