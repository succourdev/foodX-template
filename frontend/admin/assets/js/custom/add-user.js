const form = document.getElementById('add-user-form');

  // Add event listener to the form submit event
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validate the form data
    if (name === '' || phone === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }

    // Send the form data to the server using AJAX or fetch API
    // For example, using fetch API:
    fetch('/add-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
        role
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response data
    })
    .catch(error => {
      console.error(error);
      // Handle the error
    });
  });