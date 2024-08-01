const orderData = [
    {
        "orderImage": "assets/images/product/1.png",
        "orderCode": "406-4883635",
        "date": "Jul 20, 2022",
        "paymentMethod": "Paypal",
        "deliveryStatus": "Success",
        "amount": "$15"
    },
    {
        "orderImage": "assets/images/product/2.png",
        "orderCode": "573-685572",
        "date": "Jul 25, 2022",
        "paymentMethod": "Paypal",
        "deliveryStatus": "Success",
        "amount": "$15"
    },
    {
        "orderImage": "assets/images/product/3.png",
        "orderCode": "759-4568734",
        "date": "Jul 29, 2022",
        "paymentMethod": "Stripe",
        "deliveryStatus": "Pending",
        "amount": "$15"
    },
    {
        "orderImage": "assets/images/product/4.png",
        "orderCode": "546-7664537",
        "date": "Jul 30, 2022",
        "paymentMethod": "Paypal",
        "deliveryStatus": "Success",
        "amount": "$15"
    },
    {
        "orderImage": "assets/images/product/5.png",
        "orderCode": "479-7533144",
        "date": "Aug 01, 2022",
        "paymentMethod": "Stripe",
        "deliveryStatus": "Success",
        "amount": "$15"
    },
    {
        "orderImage": "assets/images/product/6.png",
        "orderCode": "456-1245789",
        "date": "Aug 10, 2022",
        "paymentMethod": "Stripe",
        "deliveryStatus": "Cancel",
        "amount": "$15"
    },
    {
        "orderImage": "assets/images/product/7.png",
        "orderCode": "057-3657895",
        "date": "Aug 18, 2022",
        "paymentMethod": "Paypal",
        "deliveryStatus": "Cancel",
        "amount": "$15"
    },
    {
        "orderImage": "assets/images/product/8.png",
        "orderCode": "123-1234567",
        "date": "Aug 29, 2022",
        "paymentMethod": "Paypla",
        "deliveryStatus": "Success",
        "amount": "$15"
    },
    {
        "orderImage": "assets/images/product/9.png",
        "orderCode": "987-9876543",
        "date": "Sep 09, 2022",
        "paymentMethod": "Paypal",
        "deliveryStatus": "Success",
        "amount": "$15"
    },
    {
        "orderImage": "assets/images/product/10.png",
        "orderCode": "147-3692584",
        "date": "Sep 17, 2022",
        "paymentMethod": "Stripe",
        "deliveryStatus": "Success",
        "amount": "$15"
    },
    {
        "orderImage": "assets/images/product/11.png",
        "orderCode": "586-5865224",
        "date": "Sep 20, 2022",
        "paymentMethod": "Stripe",
        "deliveryStatus": "Pending",
        "amount": "$11"
    }
];

const ordersPerPage = 5; // Number of orders to display per page

function displayOrders(orders) {
    const orderTableBody = document.getElementById("orderTableBody");
    orderTableBody.innerHTML = ''; // Clear previous orders

    orders.forEach(order => {
        const row = orderTableBody.insertRow();
        row.innerHTML=`
            <tr class="odd"  href="order-detail.html">
                <td>
                    <span class="order-image">
                        <img src="${order.orderImage}" class="img-fluid" alt="users">
                    </span>
                </td>
                <td>${order.orderCode}</td>
                <td>${order.date}</td>
                <td>${order.paymentMethod}</td>
                <td><span class="order-success">${order.deliveryStatus}</span></td>
                <td>${order.amount}</td>
                <td>
                    <ul>
                        <li>
                            <a href="order-detail.html">
                                <i class="ri-eye-line"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="ri-pencil-line"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="ri-delete-bin-line"></i>
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-sm btn-solid text-white" href="order-tracking.html">
                                Tracking
                            </a>
                        </li>
                    </ul>
                </td>
            </tr>
        `
        
    });
}

function createPagination(totalPages) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ''; // Clear previous pagination

    const ul = document.createElement("ul");
    ul.classList.add("pagination", "justify-content-center");

    // Previous button
    const previousButton = document.createElement("li");
    previousButton.classList.add("page-item");
    if (currentPage === 1) {
        previousButton.classList.add("disabled");
    }
    const previousLink = document.createElement("a");
    previousLink.classList.add("page-link");
    previousLink.textContent = "Previous";
    previousLink.addEventListener("click", () => {
        currentPage--;
        displayOrders(orderData.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage));
        createPagination(totalPages);
    });
    previousButton.appendChild(previousLink);
    ul.appendChild(previousButton);

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement("li");
        pageItem.classList.add("page-item");
        if (i === currentPage) {
            pageItem.classList.add("active");
        }
        const pageLink = document.createElement("a");
        pageLink.classList.add("page-link");
        pageLink.textContent = i;
        pageLink.addEventListener("click", () => {
            currentPage = i;
            displayOrders(orderData.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage));
            createPagination(totalPages);
        });
        pageItem.appendChild(pageLink);
        ul.appendChild(pageItem);
    }

    // Next button
    const nextButton = document.createElement("li");
    nextButton.classList.add("page-item");
    if (currentPage === totalPages) {
        nextButton.classList.add("disabled");
    }
    const nextLink = document.createElement("a");
    nextLink.classList.add("page-link");
    nextLink.textContent = "Next";
    nextLink.addEventListener("click", () => {
        currentPage++;
        displayOrders(orderData.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage));
        createPagination(totalPages);
    });
    nextButton.appendChild(nextLink);
    ul.appendChild(nextButton);

    pagination.appendChild(ul);
}

let currentPage = 1;
const totalPages = Math.ceil(orderData.length / ordersPerPage);

// Load initial orders and pagination
displayOrders(orderData.slice(0, ordersPerPage));
createPagination(totalPages);