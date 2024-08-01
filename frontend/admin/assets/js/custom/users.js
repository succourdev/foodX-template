
        const users = [
            {
                "id": 8045042,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "created": "Jul 25, 2023 09:33",
                "status": "Active"
            },
            {
                "id": 8045042,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "created": "Jul 25, 2023 09:33",
                "status": "Active"
            },
            {
                "id": 8045042,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "created": "Jul 25, 2023 09:33",
                "status": "Active"
            },
            {
                "id": 8045042,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "created": "Jul 25, 2023 09:33",
                "status": "Active"
            },
            {
                "id": 8045042,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "created": "Jul 25, 2023 09:33",
                "status": "Active"
            },
            {
                "id": 8045042,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "created": "Jul 25, 2023 09:33",
                "status": "Active"
            },
            {
                "id": 8045042,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "created": "Jul 25, 2023 09:33",
                "status": "Active"
            },
            {
                "id": 8023157,
                "name": "Jane Smith",
                "email": "jane.smith@example.com",
                "created": "Jul 19, 2023 09:24",
                "status": "Active"
            },
            {
                "id": 8022741,
                "name": "David Lee",
                "email": "david.lee@example.com",
                "created": "Jul 19, 2023 06:54",
                "status": "Deleted"
            },
            {
                "id": 7670428,
                "name": "Emily Brown",
                "email": "emily.brown@example.com",
                "created": "Jun 8, 2023 14:46",
                "status": "Active"
            },
            {
                "id": 7595956,
                "name": "Michael Wilson",
                "email": "michael.wilson@example.com",
                "created": "May 23, 2023 04:53",
                "status": "Active"
            },
            {
                "id": 7439147,
                "name": "Sarah Johnson",
                "email": "sarah.johnson@example.com",
                "created": "Apr 20, 2023 13:40",
                "status": "Deactivated"
            },
            {
                "id": 7344752,
                "name": "Robert Davis",
                "email": "robert.davis@example.com",
                "created": "Mar 29, 2023 05:06",
                "status": "Deleted"
            },
            {
                "id": 7344753,
                "name": "Jennifer Garcia",
                "email": "jennifer.garcia@example.com",
                "created": "Mar 29, 2023 05:06",
                "status": "Deactivated"
            },
            {
                "id": 7344749,
                "name": "William Rodriguez",
                "email": "william.rodriguez@example.com",
                "created": "Mar 29, 2023 05:06",
                "status": "Deactivated"
            },
            {
                "id": 7344745,
                "name": "Linda Martinez",
                "email": "linda.martinez@example.com",
                "created": "Mar 29, 2023 05:05",
                "status": "Deactivated"
            }
        ];

        // Global variables
        let currentPage = 1;
        const usersPerPage = 5;

        // Function to load user data
        function loadUsers(page) {
            const start = (page - 1) * usersPerPage;
            const end = start + usersPerPage;

            // Filter users based on search query
            const filteredUsers = users.filter(user => {
                const searchTerm = document.getElementById('searchInput').value.toLowerCase();
                return user.name.toLowerCase().includes(searchTerm) ||
                    user.email.toLowerCase().includes(searchTerm);
            });

            const displayedUsers = filteredUsers.slice(start, end);

            // Update the table body
            const userTableBody = document.getElementById('userTableBody');
            userTableBody.innerHTML = '';

            displayedUsers.forEach(user => {
                const row = userTableBody.insertRow();
                row.insertCell().innerHTML = `<div class="user-avatar"><img src="https://via.placeholder.com/30" alt="${user.name}"></div>${user.id}`;
                row.insertCell().innerHTML = user.name;
                row.insertCell().innerHTML = user.email;
                row.insertCell().innerHTML = user.created;
                row.insertCell().innerHTML = user.status;
                row.insertCell().innerHTML = `<button class="btn btn-sm btn-primary">Edit</button> <button class="btn btn-sm btn-danger">Delete</button>`;
            });
        }

        // Function to search users
        function searchUsers() {
            currentPage = 1;
            loadUsers(currentPage);
            updatePagination();
        }

        // Function to update pagination
        function updatePagination() {
            const totalUsers = users.length;
            const totalPages = Math.ceil(totalUsers / usersPerPage);
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';

            // Add previous button
            if (currentPage > 1) {
                const previousButton = document.createElement('li');
                previousButton.classList.add('page-item');
                const previousLink = document.createElement('a');
                previousLink.classList.add('page-link');
                previousLink.href = '#';
                previousLink.textContent = 'Previous';
                previousLink.addEventListener('click', () => {
                    currentPage--;
                    loadUsers(currentPage);
                    updatePagination();
                });
                previousButton.appendChild(previousLink);
                pagination.appendChild(previousButton);
            }

            // Add page number buttons
            for (let i = 1; i <= totalPages; i++) {
                const pageItem = document.createElement('li');
                pageItem.classList.add('page-item');
                const pageLink = document.createElement('a');
                pageLink.classList.add('page-link');
                pageLink.href = '#';
                pageLink.textContent = i;
                if (i === currentPage) {
                    pageItem.classList.add('active');
                }
                pageLink.addEventListener('click', () => {
                    currentPage = i;
                    loadUsers(currentPage);
                    updatePagination();
                });
                pageItem.appendChild(pageLink);
                pagination.appendChild(pageItem);
            }

            // Add next button
            if (currentPage < totalPages) {
                const nextButton = document.createElement('li');
                nextButton.classList.add('page-item');
                const nextLink = document.createElement('a');
                nextLink.classList.add('page-link');
                nextLink.href = '#';
                nextLink.textContent = 'Next';
                nextLink.addEventListener('click', () => {
                    currentPage++;
                    loadUsers(currentPage);
                    updatePagination();
                });
                nextButton.appendChild(nextLink);
                pagination.appendChild(nextButton);
            }
        }

        window.onload = () => {
            loadUsers(currentPage);
            updatePagination();
        };