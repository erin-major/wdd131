let steps = ['one', 'two', 'three'];
let stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
});
document.getElementById('myList').innerHTML = stepsHtml.join();

let grades = ['A', 'B', 'A'];
function convertGradeToGpa(grade) {
    if (grade == 'A') {
        return 4.0;
    }
    else if (grade == 'B') {
        return 3.0;
    }
    else if (grade == 'C') {
        return 2.0;
    }
    else if (grade == 'D' ) {
        return 1.0;
    }
    else {
        return 0;
    }
}

let gradeGpa = grades.map(convertGradeToGpa);
let pointsTotal = gradeGpa.reduce(function(total, item) {
    return total + item;
});

let gpa = pointsTotal / gradeGpa.length;
let foods = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let longFoods = foods.filter((food) => food.length > 6);

let numbers = [12, 34, 21, 54];
let luckyNumber = 21;
let indexOfLucky = numbers.indexOf(luckyNumber);

