document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temperature = 5; 
const windSpeed = 10;

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16));
    } else {
        return "N/A";
    }
}

const windChill = calculateWindChill(temperature, windSpeed);

document.getElementById("windChill").textContent = `${windChill}°C`;
