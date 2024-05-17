function findHighestTemperatureOfTheDay(temperatures) {
  // Initialize the highest temperature and current temperature with the first temperature in the array
  let highestTemperature = temperatures[0];
  let currentTemperature = temperatures[0];

  // Loop through the rest of the temperatures in the array
  for (let i = 1; i < temperatures.length; i++) {
    // Update the current temperature to be the maximum of the current temperature and the sum of the current temperature and the next temperature in the array
    currentTemperature = Math.max(
      temperatures[i],
      currentTemperature + temperatures[i]
    );

    // If the current temperature is higher than the highest temperature, update the highest temperature
    if (currentTemperature > highestTemperature) {
      highestTemperature = currentTemperature;
    }
  }

  // Return the highest temperature found
  return highestTemperature;
}

console.log(findHighestTemperatureOfTheDay([3, 2, -3])); // 5
console.log(findHighestTemperatureOfTheDay([-1, -2, -3])); // -1
