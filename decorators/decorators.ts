@something
class a
{
    name ="kavin"
 
    fun():void
    {
        console.log("Welcome Back!");
        
    }
    constructor (name:string)
    {
        this.name=name
        console.log(this.name);
        
    }
}
let obj = new a("kavin")
obj.fun()

function something(target:Function)
{
    console.log("Something");
    
}