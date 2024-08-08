$(document).ready(function () {
    // Calculate total for each row
    calculateRowTotal();

    // Add row function
    $(".add-row").click(function () {
        var newRow = '<tr>' +
            '<td><input type="text" class="form-control" name="productName[]"></td>' +
            '<td><input type="number" class="form-control" name="quantity[]"></td>' +
            '<td><input type="number" class="form-control" name="price[]"></td>' +
            '<td><span class="total"></span></td>' +
            '<td><button type="button" class="btn btn-danger remove-row">Remove</button></td>' +
            '</tr>';
        $("#orderProductsTable tbody").append(newRow);
        calculateRowTotal();
    });

    // Remove row function
    $(document).on("click", ".remove-row", function () {
        $(this).closest("tr").remove();
        calculateTotal();
    });

    // Calculate row total
    function calculateRowTotal() {
        $("#orderProductsTable tbody tr").each(function () {
            var quantity = $(this).find('input[name="quantity[]"]').val();
            var price = $(this).find('input[name="price[]"]').val();
            var total = (quantity * price) || 0;
            $(this).find(".total").text(total);
        });
        calculateTotal();
    }

    // Calculate total
    function calculateTotal() {
        var subtotal = 0;
        $("#orderProductsTable tbody tr").each(function () {
            var rowTotal = parseFloat($(this).find(".total").text()) || 0;
            subtotal += rowTotal;
        });
        $("#subtotal").text(subtotal);
        $("#total").text(subtotal);
    }

    // Handle form submission
    $("#orderForm").submit(function (event) {
        event.preventDefault(); // Prevent default form submission
        // Your form submission logic here
        // Example:
        // alert("Order details submitted successfully!");
        // You can use AJAX to send data to a server-side script
    });
});