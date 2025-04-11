<!DOCTYPE html>
<html>
    <body>

        <h1>JVS Functions</h1>
        <h2>setTimeout() with a Callback</h2>

        <p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>

        <h1 id="demo"></h1>

        <script>
            setTimeout(myFunction, 3000);

            function myFunction() {
                document.getElementById("demo").innerHTML = "I LOVE YOU !!";
            }
        </script>
    </body>
</html>