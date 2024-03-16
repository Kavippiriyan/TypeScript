// *** (method overriding) ***

class a {
    a: number
    constructor(a: number) {
        this.a = a
    }
}

class b extends a {
    b: number
    constructor(a: number, b: number) {
        super(a)
        this.b = b

    }

    add(): void {
        console.log(this.a + this.b);

    }
}

let obj = new b(1, 2)

obj.add()


class add {
    x: number = 10
    y: number = 20

    add(): void {
        console.log("class  add : ", this.x + this.y);

    }


}

class add1 extends add {
    x: number = 20
    y: number = 40

    add(): void {
        console.log("class  add1 : ", this.x + this.y);

    }


}

class add2 extends add1 {
    x: number = 50
    y: number = 50

    add(): void {
        console.log("class  add2 : ", this.x + this.y);

    }


}

let obj1 = new add()
obj1.add()

let obj2 = new add1()
obj2.add()

let obj3 = new add2()
obj3.add()


