class players
{
     players = 
     {
        player1:"Rohit",
        player2:"Kholi",
        player3:"Dhoni",

     }
     pl1skill:string
     pl2skill:string
     pl3skill:string

     constructor (a:string,b:string,c:string)
     {
        this.pl1skill = a
        this.pl2skill = b
        this.pl3skill = c
     }

     fun = function ()
     {
        console.log(this.players.player1," ",this.pl1skill)
        console.log(this.players.player2," ",this.pl2skill)
        console.log(this.players.player3," ",this.pl3skill)
     }
}

let object = new players("I'm Hitman","I'm Fire","I'm cool")

object.fun()