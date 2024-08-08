$(document).ready(function() {
    $("#add-account-form").submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var accountName = $("#accountName").val();
        var accountType = $("#accountType").val();
        var initialBalance = $("#initialBalance").val();
        var description = $("#description").val();

        // Validate form data (add your own validation logic)

        // Send data to server (you'll need a server-side script for this)
        // Example using AJAX:
        $.ajax({
            url: "your_server_script.php", // Replace with your server-side script URL
            method: "POST",
            data: {
                accountName: accountName,
                accountType: accountType,
                initialBalance: initialBalance,
                description: description
            },
            success: function(response) {
                // Handle successful response (e.g., display a success message)
                console.log(response);
            },
            error: function(error) {
                // Handle errors (e.g., display an error message)
                console.error(error);
            }
        });
    });
});