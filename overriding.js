// *** (method overriding) ***
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = /** @class */ (function () {
    function a(a) {
        this.a = a;
    }
    return a;
}());
var b = /** @class */ (function (_super) {
    __extends(b, _super);
    function b(a, b) {
        var _this = _super.call(this, a) || this;
        _this.b = b;
        return _this;
    }
    b.prototype.add = function () {
        console.log(this.a + this.b);
    };
    return b;
}(a));
var obj = new b(1, 2);
obj.add();
var add = /** @class */ (function () {
    function add() {
        this.x = 10;
        this.y = 20;
    }
    add.prototype.add = function () {
        console.log("class  add : ", this.x + this.y);
    };
    return add;
}());
var add1 = /** @class */ (function (_super) {
    __extends(add1, _super);
    function add1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 20;
        _this.y = 40;
        return _this;
    }
    add1.prototype.add = function () {
        console.log("class  add1 : ", this.x + this.y);
    };
    return add1;
}(add));
var add2 = /** @class */ (function (_super) {
    __extends(add2, _super);
    function add2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 50;
        _this.y = 50;
        return _this;
    }
    add2.prototype.add = function () {
        console.log("class  add2 : ", this.x + this.y);
    };
    return add2;
}(add1));
var obj1 = new add();
obj1.add();
var obj2 = new add1();
obj2.add();
var obj3 = new add2();
obj3.add();
