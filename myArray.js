< !Doctype html>
<html>
    <body style="text-align: right">

    <h1>JavaScript Functions</h1>
    <h2>Callback Functions</h2>
    <p id="demo"></p>

    <script>
        const myNumbers = [4, 1, -20, -7, 5, 9, -6];

        const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

        document.getElementById("demo").innerHtml = posNumbers;

        function removeNeg(numbers, callback) {
            const myArray = [];
            for (const x of numbers) {
                if (callback(x)) {
                    MimeTypeArray.push(x);
                }
            }
            return myArray;
        }
    </script>
    </body>
</html>