const button = document.getElementById("calculate");
const weightInputTextfield = document.getElementById("weight");
const heightInputTextfield = document.getElementById("height");
const resultsNode = document.getElementById("results");
let method = "metric";
const selectorNode = document.getElementById("method");

const calculateBmi = () => {
  let bmiValue;
  if (method === "metric") {
    bmiValue = BMICalculator.calculateMetric(
      weightInputTextfield.value,
      heightInputTextfield.value
    );
  } else {
    bmiValue = BMICalculator.calculateImperial(
      weightInputTextfield.value,
      heightInputTextfield.value
    );
  }
  resultsNode.innerHTML = `<h2> Your BMi value is: ${bmiValue.value.toFixed(2)} 
  And you are considered ${bmiValue.display.message}</h2>`;
  resultsNode.style.color = bmiValue.display.color;
};

button.addEventListener("click", () => {
  calculateBmi();
});

selectorNode.addEventListener("change", () => {
  method = selectorNode.options[selectorNode.selectedIndex].value;
  if (method === "imperial") {
    weightInputTextfield.placeholder = weightInputTextfield.placeholder.replace(
      "kilogram",
      "pounds"
    );
    heightInputTextfield.placeholder = heightInputTextfield.placeholder.replace(
      "cm",
      "inches"
    );
  } else {
    weightInputTextfield.placeholder = weightInputTextfield.placeholder.replace(
      "pounds",
      "kilogramns"
    );
    heightInputTextfield.placeholder = heightInputTextfield.placeholder.replace(
      "inches",
      "cm"
    );
  }
});
