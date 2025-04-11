<!DOCTYPE html>
<html>
    <body>
        <h2>JA TRY CATCH</h2>
        <p>Please input a number between 5 and 10</p>

        <input id="demo" type="text">
        <button type="button" onclick="myfunction()">Test Input</button>
        <p id="p01"></p>

        <script>
            function myfunction() {
                const message = document.getElementById("p01");
                message.innerHTML = "";
                let x = document.getElementById("demo").value;
                try {
                    if(x.trim() == "") throw "empty";
                    if(isNaN(x)) throw "not a number";
                    x = Number(x);
                    if(x < 5) throw "too low";
                    if(x > 10) throw "too high"
                }
                catch(err) {
                    message.innerHTML = "Input is" + err;
                }
            }
        </script>

    </body>
</html>