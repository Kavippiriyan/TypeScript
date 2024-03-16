var players = /** @class */ (function () {
    function players(a, b, c) {
        this.players = {
            player1: "Rohit",
            player2: "Kholi",
            player3: "Dhoni",
        };
        this.fun = function () {
            console.log(this.players.player1, " ", this.pl1skill);
            console.log(this.players.player2, " ", this.pl2skill);
            console.log(this.players.player3, " ", this.pl3skill);
        };
        this.pl1skill = a;
        this.pl2skill = b;
        this.pl3skill = c;
    }
    return players;
}());
var object = new players("I'm Hitman", "I'm Fire", "I'm cool");
object.fun();
