// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation 
// of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the 
// "undefined" is case-sensitive.

//    a:x1
//    b:y1
//    c:x2
//    d:y2
// Assume that [a,b,c,d] and the slope are all integers (no floating numbers!). 
// Slope: https://en.wikipedia.org/wiki/Slope



function slope(points) {
  let x1 = points[0];
  let y1 = points[1];
  let x2 = points[2];
  let y2 = points[3];

  const y = y2 - y1;
  const x = x2 - x1;

  if (x === 0) {
    return "undefined";
  }

  let result = y / x;
  return result.toString();
}

