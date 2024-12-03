function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("bmiResult").textContent = "Hasil BMI: 0";
    document.getElementById("bmiMessage").textContent =
      "Silakan masukkan data yang valid.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  document.getElementById("bmiResult").textContent = `Hasil BMI: ${bmi}`;

  if (bmi < 18.5) {
    document.getElementById("bmiMessage").textContent =
      "Anda berada di kategori underweight. Cara untuk menaikkan berat badan adalah dengan rajin berolahraga dan makan makanan yang mengandung protein yang tinggi";
  } else if (bmi < 24.9) {
    document.getElementById("bmiMessage").textContent =
      "Anda berada di kategori normal. Untuk menjaga badan tetap ideal adalah dengan menjaga pola makan, olahraga rutin, istirahat yang cukup, dan lain lain";
  } else if (bmi < 29.9) {
    document.getElementById("bmiMessage").textContent =
      "Anda berada di kategori overweight. Cara untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan rutin berolahraga";
  } else {
    document.getElementById("bmiMessage").textContent =
      "Anda berada di kategori obesitas.";
  }
}

function downloadResult() {
  const resultText = document.getElementById("bmiResult").textContent;
  const messageText = document.getElementById("bmiMessage").textContent;
  const blob = new Blob([`${resultText}\n${messageText}`], {
    type: "text/plain",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "hasil_bmi.txt";
  link.click();
}
