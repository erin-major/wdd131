const pi = 3.14;
let area = 0;

function circleArea(radius) {
    const area = radius * radius * pi;
    return area;
}

area = circleArea(3);
console.log(area);

area = circleArea(4);
console.log(area);

function calculate(a, b, callback) {
    callback(a + b);
  }
  
  function displayResult(result) {
    console.log('The result is: ' + result);
  }

  calculate(2, 3, displayResult);