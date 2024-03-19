"use strict";
// *** (method overriding) ***
class a {
    constructor(a) {
        this.a = a;
    }
}
class b extends a {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    add() {
        console.log(this.a + this.b);
    }
}
let obj = new b(1, 2);
obj.add();
class add {
    constructor() {
        this.x = 10;
        this.y = 20;
    }
    add() {
        console.log("class  add : ", this.x + this.y);
    }
}
class add1 extends add {
    constructor() {
        super(...arguments);
        this.x = 20;
        this.y = 40;
    }
    add() {
        console.log("class  add1 : ", this.x + this.y);
    }
}
class add2 extends add1 {
    constructor() {
        super(...arguments);
        this.x = 50;
        this.y = 50;
    }
    add() {
        console.log("class  add2 : ", this.x + this.y);
    }
}
let obj1 = new add();
obj1.add();
let obj2 = new add1();
obj2.add();
let obj3 = new add2();
obj3.add();
