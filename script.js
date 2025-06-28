function convertTemperature() {
  const input = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitSelect").value;
  const result = document.getElementById("resultDisplay");

  if (isNaN(input)) {
    result.innerHTML = "❌ Please enter a valid number.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (unit === "celsius") {
    celsius = input;
    fahrenheit = (input * 9 / 5) + 32;
    kelvin = input + 273.15;
  } else if (unit === "fahrenheit") {
    celsius = (input - 32) * 5 / 9;
    fahrenheit = input;
    kelvin = celsius + 273.15;
  } else if (unit === "kelvin") {
    kelvin = input;
    celsius = input - 273.15;
    fahrenheit = (celsius * 9 / 5) + 32;
  }

  result.innerHTML = `
    ✅ <strong>Celsius:</strong> ${celsius.toFixed(2)} °C <br>
    ✅ <strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F <br>
    ✅ <strong>Kelvin:</strong> ${kelvin.toFixed(2)} K
  `;
}
