type Point = {x: number, y: number};

const pointsObj: {[id: string]: Point} = {
    p: {x: 5, y: 10},
    q: {x: -1, y: 1},
    r: {x: Math.PI, y: Math.E},
};

const len = (p: Point) => Math.sqrt(p.x * p.x + p.y * p.y);

for (const [id, point] of Object.entries(pointsObj)) {
    console.log(`length of ${id} is ${len(point)}`);
}

const pointArray = Object.entries(pointsObj).map(([, point]) => point);

pointArray.push("foo");
pointArray.push({x: Infinity, y: -Infinity});

const filteredPoints = 
    pointArray.filter(p => Math.abs(p.x) !== Infinity || Math.abs(p.y) !== Infinity);

const pointLengths = filteredPoints.map(len);

pointLengths.push("foo");
pointLengths.push(25);
