<htm>
    <body>
        <h1>JVS Class Inheritance</h1>

        <p>Use the "extends" keyword to inherit all methods from another class.</p>

        <p>Use the "super" method to call the parent's constructor functions</p>

        <p id="demo"></p>

        <script>
            class Car {
                constructor(brand) {
                    this.carname = brand;
                }
                present() {
                    return 'I have a ' + this.carname;
                }
            }
            class Model extends Car {
                constructor(brand, mod) {
                    super(brand);
                    this.model = mod;
                }
                show() {
                    return this.present() + ', it is a ' + this.model;
                }
            } 
            const myCar = new Model("Honda", "Accord");
            document.getElementById("demo").innerHTML = myCar.show();
        </script>
    </body>
</htm>