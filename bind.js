< !DOCTYPE html>
<html>
    <body>

        <h1>Function bind()</h1>

        <p>This example will display a person name after 3 seconds:</p>

        <p id="demo"></p>

        <script>
            const person = {
                firstName:"Alamin",
                lastName: "Muajaheed",
                display: function() {
                    let X = document.getElementById("demo");
                    x.innerHtml = this.firstName + " " + this.lastName;
                }
            }

            let display = person.display.bind(person);
            setTimeout(display, 3000);
        </script>
    </body>
</html> 