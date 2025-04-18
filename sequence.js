<!DOCTYPE html>
<html>
    <body>

        <h1>JVS Functions</h1>
        <h2>Function Sequence</h2>
        <p>JavaScript function are executed in the sequence they are called.</p>

        <p>The result of the calculation is:</p>
        <p id="demo"></p>

        <script>
            function myDisplayer(some) {
                document.getElementById("demo").innerHTML = some;
            }

            function myCalculator(num1, num2) {
                let sum = num1 + num2;
                myDisplayer(sum);
            }

            myCalculator(5, 5);
        </script>

    </body>
</html>