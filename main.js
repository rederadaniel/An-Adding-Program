    function calculateAll() {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);

        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById("result").innerHTML = "Please enter valid numbers.";
            return;
        }

        let addition = num1 + num2;
        let subtraction = num1 - num2;
        let multiplication = num1 * num2;
        let division = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero!";

        document.getElementById("result").innerHTML = `
            Addition: ${addition} <br>
            Subtraction: ${subtraction} <br>
            Multiplication: ${multiplication} <br>
            Division: ${division}
        `;
    }
