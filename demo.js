// //   **(Array)**
var join = /** @class */ (function () {
    function join() {
        this.x = 10;
        this.y = 20;
        this.a = 20;
        this.b = 20;
    }
    join.prototype.add = function () {
        console.log("add : ", this.x + this.y);
    };
    join.prototype.sub = function () {
        console.log("sub : ", this.a - this.b);
    };
    return join;
}());
var obj = new join();
obj.add();
obj.sub();
