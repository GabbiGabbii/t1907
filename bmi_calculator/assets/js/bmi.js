const BMICalculator = {
  calculateMetric(weight, height) {
    let results =
      parseInt(weight) / ((parseInt(height) / 100) * (parseInt(height) / 100));
    return {
      value: results,
      display: this.checkResult(results),
    };
  },
  calculateImperial(weight, height) {
    let results =
      (parseInt(weight) * 703) / (parseInt(height) * parseInt(height));
      
    return {
      value: results,
      display: this.checkResult(results),
    };
  },
  checkResult(bmiValue) {
    switch (true) {
      case bmiValue < 18.5:
        return {
          message: "underweight",
          color: "red",
        };
      case bmiValue >= 18.6 && bmiValue <= 24.9:
        return {
          message: "normal",
          color: "green",
        };
      case bmiValue >= 25 && bmiValue <= 29.9:
        return {
          message: "overweight",
          color: "red",
        };
      case bmiValue >= 30:
        return {
          message: "obese",
          color: "red",
        };
    }
  },
};
