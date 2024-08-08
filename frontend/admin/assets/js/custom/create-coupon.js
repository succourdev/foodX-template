const generateCode = document.getElementById('generateCode');
    const couponCodeInput = document.getElementById('couponCode');
    const couponForm = document.getElementById('couponForm');

    generateCode.addEventListener('click', () => {
      // Generate a random coupon code (replace with your own logic)
      const randomCode = Math.random().toString(36).substring(2, 15);
      couponCodeInput.value = randomCode;
    });

    couponForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Get form data
      const couponCode = couponCodeInput.value;
      const amount = document.getElementById('amount').value;
      const type = document.getElementById('type').value;
      const qty = document.getElementById('qty').value;
      const expiredDate = document.getElementById('expiredDate').value;

      // Perform validation if needed

      // Send data to server using AJAX or other methods
      console.log('Coupon Code:', couponCode);
      console.log('Amount:', amount);
      console.log('Type:', type);
      console.log('Qty:', qty);
      console.log('Expired Date:', expiredDate);
    });