const year = document.querySelector("#currentyear");
const modifiedDate = document.querySelector("#lastModified");
const windChill = document.querySelector('#windChill');

const today = new Date();

year.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span> | Erin Major | Utah, United States`;
modifiedDate.innerHTML = `Last Modification: ${today}`;