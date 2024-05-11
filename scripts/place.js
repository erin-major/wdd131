const year = document.querySelector("#currentyear");
const modifiedDate = document.querySelector("#lastModified");
const windChill = document.querySelector('#windChill');

const today = new Date();

year.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span> | Erin Major | Utah, United States`;
modifiedDate.innerHTML = `Last Modification: ${today}`;

const temperature = 10;
const wind = 5;

const calculateWindChill = (temp, wind) => 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));

if (temperature <= 10 && wind > 4.5) {
    calculatedChill = calculateWindChill(temperature, wind);
    windChill.innerHTML = `${calculatedChill.toFixed(2)}° C`;
}

else {
    windChill.innerHTML = `N/A`;
}