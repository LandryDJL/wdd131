
// Get the current year
const currentYear = new Date().getFullYear();

// Get the date the document was last modified
const lastModifiedDate = document.lastModified;

// Output the current year in the first paragraph of the footer
document.getElementById('current-year').innerHTML = `© ${currentYear} - `;

// Output the last modified date in the second paragraph of the footer
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;


document.addEventListener('DOMContentLoaded', function() {
    // Static values for temperature (in Celsius) and wind speed (in km/h)
    const temperature = 28;
    const windSpeed = 10;
    const condition = "Cloudy";

    // Wind chill factor
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display the wind chill factor in the "Weather" section
    document.getElementById('temp').textContent = ` ${temperature} °C`;
    document.getElementById('windSpeed').textContent = `${windSpeed} Km/h`;
    document.getElementById('weatherCondition').textContent = condition;
    document.getElementById('windChill').textContent = windChill;

    // Function to calculate the wind chill factor
    function calculateWindChill(temp, speed) {
        // The formula for calculating wind chill in Celsius and km/h
        if (temp <= 10 && speed > 4.8) {
            const windChillValue = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))
            return windChillValue.toFixed(2);
        } else {
            return "N/A";
        }
    }
});


