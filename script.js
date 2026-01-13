<!DOCTYPE html>
<html>
<head>
    <title>Even or Odd Checker</title>
</head>
<body>

<h2>Check Even or Odd</h2>

<input type="number" id="num" placeholder="Enter a number">
<br><br>

<button onclick="checkNumber()">Check</button>

<p id="result"></p>

<script>
    function checkNumber() {
        let number = document.getElementById("num").value;

        if (number === "") {
            document.getElementById("result").innerHTML = "Please enter a number";
        } 
        else if (number % 2 === 0) {
            document.getElementById("result").innerHTML = number + " is Even";
        } 
        else {
            document.getElementById("result").innerHTML = number + " is Odd";
        }
    }
</script>

</body>
</html>
