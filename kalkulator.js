<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kalkulator Sederhana</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<style>
    body {
        font-family: Arial, sans-serif;
    }
    .calculator {
        width: 300px;
        margin: 50px auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    input[type="number"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
    }
    .button-container {
        display: flex;
        gap: 10px;
        justify-content: center; 
    }
    .button-container button {
        padding: 10px;
        font-size: 16px;
        background-color: #32CD32;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .button-container button:hover {
        background-color: #0056b3;
    }
    #result {
        margin-top: 15px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
    }
</style>
</head>
<body>
<h1 style="text-align: center;">Kalkulator Sederhana</h1>
<div class="calculator">
    <input type="number" id="num1" placeholder="Masukkan angka pertama">
    <input type="number" id="num2" placeholder="Masukkan angka kedua">
    <div class="button-container">
        <button onclick="calculate('+')"><i class="fas fa-plus"></i></button>
        <button onclick="calculate('-')"><i class="fas fa-minus"></i></button>
    </div>
    <p id="result">Hasil: </p>
</div>
<script>
    function calculate(operator) {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var result;

        if (operator === '+') {
            result = num1 + num2;
            document.getElementById('result').innerText = 'Hasil: ' + num1 + ' + ' + num2 + ' = ' + result;
        } else if (operator === '-') {
            result = num1 - num2;
            document.getElementById('result').innerText = 'Hasil: ' + num1 + ' - ' + num2 + ' = ' + result;
        }
    }
</script>
</body>
</html>
