let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let bNames = names.filter((name) => name.charAt(0) == "B");

console.log(bNames);

let namesLength = names.map((name) => name.length);

console.log(namesLength);

let averageLength = names.reduce((total, name) => total + name.length, 0) / names.length;

console.log(averageLength);