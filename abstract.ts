abstract class student

{
   abstract stname:string
   abstract method():void
   fun():void
   {
    console.log("hello");
    
   }
}
 
class students extends student
{
    stname = "HI"
    method(): void {
        console.log("Welcome");
        
    }
}

let object = new students()

object.fun()
object.method()
console.log(object.stname);