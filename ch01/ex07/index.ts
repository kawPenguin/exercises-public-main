export class Point{
    x : number;
    y : number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    add(point:Point){
        this.x += point.x;
        this.y += point.y;

        return this;
    }

    distance() {
        return Math.sqrt(
            this.x * this.x + this.y * this.y
        );
    }
}

const p = new Point(1,1);
const p2 = new Point(2,2);
const addP = p.add(p2);

console.log(p.distance());

console.log(addP);
