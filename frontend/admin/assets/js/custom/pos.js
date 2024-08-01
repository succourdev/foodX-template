
        // Function to update quantity
        function updateQuantity(element, action) {
            const quantityElement = element.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);

            if (action === 'increment' && quantity < 10) {
                quantity++;
            } else if (action === 'decrement' && quantity > 1) {
                quantity--;
            }

            quantityElement.textContent = quantity;
        }

        // Event listeners for quantity buttons
        const quantityButtons = document.querySelectorAll('.order-item-quantity-button');
        quantityButtons.forEach(button => {
            button.addEventListener('click', () => {
                const action = button.textContent === '+' ? 'increment' : 'decrement';
                updateQuantity(button, action);
            });
        });
  