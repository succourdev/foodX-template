$(document).ready(function() {
    $("#expenseForm").submit(function(event) {
        event.preventDefault(); 

        // Get form data
        var expenseCategory = $("#expenseCategory").val();
        var amount = $("#amount").val();
        var warehouse = $("#warehouse").val();
        var account = $("#account").val();
        var note = $("#note").val();

        // Validate required fields
        if (expenseCategory === "" || amount === "" || warehouse === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Submit data (replace with your actual submission logic)
        $.ajax({
            type: "POST",
            url: "your_submit_endpoint.php", // Replace with your actual endpoint
            data: {
                expenseCategory: expenseCategory,
                amount: amount,
                warehouse: warehouse,
                account: account,
                note: note
            },
            success: function(response) {
                // Handle success response
                alert("Expense added successfully!");
                $("#expenseForm")[0].reset(); // Reset form
            },
            error: function(error) {
                // Handle error response
                console.error("Error:", error);
                alert("An error occurred. Please try again later.");
            }
        });
    });
});