"use strict";
const calculateShapeArea = (param) => {
    if ('radius' in param) {
        const circleArea = Math.PI * param.radius * param.radius;
        return circleArea;
    }
    else {
        const rectangleArea = param.height * param.width;
        return rectangleArea;
    }
};
