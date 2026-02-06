<!DOCTYPE html>
<html>
<head>
    <title>Array and Function Example</title>
</head>
<body>

    <h2>Array and Function Example</h2>
    <p id="result"></p>

    <script>
        // Function to calculate sum of array
        function findSum(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }

        // Array
        let numbers = [5, 10, 15, 20];

        // Function call
        let output = findSum(numbers);

        // Display result
        document.getElementById("result").innerHTML =
            "Sum of array elements = " + output;
    </script>

</body>
</html>
