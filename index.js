// Function to update the result automatically
function updateResult() {
    // Get the input element
    var Quantity = document.getElementById('Quantity');

    // Get the value entered by the user and convert it to a number
    var QuantityValue = parseFloat(Quantity.value);

    // Check if the entered value is a valid number
    if (!isNaN(QuantityValue)) {
        // Get the multiplier value from the second <p> tag
        var Price = document.getElementById('Price');
        var PriceValue = parseFloat(Price.textContent);

        // Perform the calculation
        var Subtotal = 66500 * QuantityValue;

        // Get the result element and update its content
        var SubtotalElement = document.getElementById('Subtotal');
        SubtotalElement.textContent = '$'+ Subtotal +' JMD';


        var CheckTotal = document.getElementById('CheckTotal');
        var Total = Subtotal + 138570 + 50045;

        CheckTotal.textContent = '$'+ Total +' JMD';

        var CheckTotal2 = document.getElementById('CheckTotal2');

        CheckTotal2.textContent = '$'+ Total +' JMD';
    }
}

// Attach the updateResult function to the input event
var Quantity = document.getElementById('Quantity');
Quantity.addEventListener('input', updateResult);

