// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

// const foodsElement = document.querySelector('#favorite-foods');

// function createAndAppendFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
// }
// myInfo.favoriteFoods.forEach(createAndAppendFoodItem);

// const foodsElement = document.querySelector('#favorite-foods');
// function mapFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     return favoriteFood;
// }

// function mapFoodItemSmall(food) {
//     return `<li>${food}</li>`;
// }

// const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// foodsElement.innerHTML = foodListElements.join('');

  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
//   // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);

const foodsElement = document.querySelector('#favorite-foods');
const placesElement = document.querySelector('#places-lived')

function createListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join('');
}

function foodTemplate(food) {
    return `<li>${food}</li>`;
}

function placeTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = createListMarkup(myInfo.favoriteFoods, foodTemplate);
placesElement.innerHTML = createListMarkup(myInfo.placesLived, placeTemplate);


// Check Understanding

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for  (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
    }
}

i = 0;

while (i < studentReport.length) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach(function(score) {
    if (score < 30) {
        console.log(score);
    }
});

for (let score in studentReport) {
    if (score < 30) {
        console.log(score);
    }
}

let currentDate = new Date();

dayCount = 5;

for (let i = 1; i < dayCount; i++) {
    let nextDay = new Date();
    nextDay.setDate(currentDate.getDate() + i);
    console.log(nextDay.getDay());
}

