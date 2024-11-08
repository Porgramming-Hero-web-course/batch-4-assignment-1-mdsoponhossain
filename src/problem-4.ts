
type Circle = {
    shape: 'circle';
    radius: number
}

type Rectangle = {
    shape: "rectangle",
    width: number,
    height: number,
}

const calculateShapeArea = (param: Circle | Rectangle): number => {
    if ('radius' in param) {
        const circleArea = Math.PI * param.radius * param.radius;
        const result = parseFloat(circleArea.toFixed(2))
        return result;
    } else {
        const rectangleArea = param.height * param.width;
        const result = parseFloat(rectangleArea.toFixed(2))
        return result;
    }

};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea);


const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
// console.log(rectangleArea)






