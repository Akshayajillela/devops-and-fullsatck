<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Array Example</title>
</head>
<body>

    <h2>JavaScript Array Demo</h2>

    <button onclick="showArray()">Show Array Elements</button>

    <p id="output"></p>

    <script>
        // Array
        let fruits = ["Apple", "Banana", "Mango", "Orange"];

        // Function to display array
        function showArray() {
            document.getElementById("output").innerHTML =
                "Fruits: " + fruits.join(", ");
        }
    </script>

</body>
</html>
