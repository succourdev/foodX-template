const products = [
    {
        "productImage": "placeholder-image.jpg",
        "productName": "Aatata Buscuit",
        "category": "Buscuit",
        "currentQty": 12,
        "price": "$95.97",
        "status": "Pending",
        "option": "View"
    },
    {
        "productImage": "placeholder-image.jpg",
        "productName": "Cold Brew Coffee",
        "category": "Drinks",
        "currentQty": 10,
        "price": "$95.97",
        "status": "Approved",
        "option": "View"
    },
    {
        "productImage": "placeholder-image.jpg",
        "productName": "Peanut Butter Cookies",
        "category": "Cookies",
        "currentQty": 9,
        "price": "$86.35",
        "status": "Approved",
        "option": "View"
    },
    {
        "productImage": "placeholder-image.jpg",
        "productName": "Wheet Flakes",
        "category": "Flakes",
        "currentQty": 8,
        "price": "$95.97",
        "status": "Pending",
        "option": "View"
    },
    {
        "productImage": "placeholder-image.jpg",
        "productName": "Potato Chips",
        "category": "Chips",
        "currentQty": 23,
        "price": "$95.97",
        "status": "Approved",
        "option": "View"
    },
    {
        "productImage": "placeholder-image.jpg",
        "productName": "Tuwer Dal",
        "category": "Dals",
        "currentQty": 50,
        "price": "$95.97",
        "status": "Approved",
        "option": "View"
    },
    {
        "productImage": "placeholder-image.jpg",
        "productName": "Almond Milk",
        "category": "Milk",
        "currentQty": 25,
        "price": "$121.43",
        "status": "Approved",
        "option": "View"
    },
];

const productTableBody = document.getElementById("productTableBody");
const pagination = document.getElementById("pagination");

const itemsPerPage = 5;
let currentPage = 1;

function displayProducts(products) {
    productTableBody.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const row = `
            <tr>
                <td>
                    <img src="${product.productImage}" alt="Product Image" width="50" height="50">
                </td>
                <td>${product.productName}</td>
                <td>${product.category}</td>
                <td>${product.currentQty}</td>
                <td>${product.price}</td>
                <td>${product.status}</td>
                <td>
                    <a href="#" class="btn btn-sm btn-outline-primary">View</a>
                    <a href="#" class="btn btn-sm btn-outline-info">Edit</a>
                    <a href="#" class="btn btn-sm btn-outline-danger">Delete</a>
                </td>
            </tr>
        `;
        productTableBody.innerHTML += row;
    }
}

function createPagination() {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = i;
        if (i === currentPage) {
            li.classList.add("active");
        }
        a.addEventListener("click", () => {
            currentPage = i;
            displayProducts(products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
            createPagination();
        });
        li.appendChild(a);
        pagination.appendChild(li);
    }
}

displayProducts(products.slice(0, itemsPerPage));
createPagination();