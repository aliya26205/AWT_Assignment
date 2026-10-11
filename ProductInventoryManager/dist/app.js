"use strict";
let products = [
    {
        id: 101,
        name: "Wireless Mouse",
        price: 799,
        quantity: 12,
        category: "Electronics",
        inStock: true
    },
    {
        id: 102,
        name: "Mechanical Keyboard",
        price: 2499,
        quantity: 5,
        category: "Accessories",
        inStock: true
    },
    {
        id: 103,
        name: "USB-C Cable",
        price: 399,
        quantity: 0,
        category: "Accessories",
        inStock: false
    },
    {
        id: 104,
        name: "Laptop Stand",
        price: 1299,
        quantity: 8,
        category: "Workspace",
        inStock: true
    }
];
const form = document.getElementById("productForm");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const categoryInput = document.getElementById("category");
const searchInput = document.getElementById("search");
const stockFilter = document.getElementById("stockFilter");
const tableBody = document.getElementById("productTable");
const emptyMessage = document.getElementById("emptyMessage");
const productCount = document.getElementById("productCount");
function getAvailableProducts(items) {
    return items.filter(product => product.inStock);
}
function updateDashboard() {
    const available = getAvailableProducts(products);
    const outOfStock = products.filter(product => !product.inStock);
    const totalValue = products.reduce((total, product) => total + product.price * product.quantity, 0);
    document.getElementById("totalProducts").textContent =
        String(products.length);
    document.getElementById("inStockCount").textContent =
        String(available.length);
    document.getElementById("outStockCount").textContent =
        String(outOfStock.length);
    document.getElementById("inventoryValue").textContent =
        totalValue.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        });
}
function renderProducts() {
    tableBody.replaceChildren();
    const query = searchInput.value.trim().toLowerCase();
    const filter = stockFilter.value;
    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query);
        const matchesStock = filter === "all" ||
            (filter === "in" && product.inStock) ||
            (filter === "out" && !product.inStock);
        return matchesSearch && matchesStock;
    });
    productCount.textContent = `${filtered.length} products`;
    emptyMessage.hidden = filtered.length > 0;
    filtered.forEach(product => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.className = "id-cell";
        idCell.textContent = `#${product.id}`;
        row.appendChild(idCell);
        const nameCell = document.createElement("td");
        const nameWrapper = document.createElement("div");
        nameWrapper.className = "product-name";
        nameWrapper.textContent = product.name;
        nameCell.appendChild(nameWrapper);
        row.appendChild(nameCell);
        const categoryCell = document.createElement("td");
        const categoryBadge = document.createElement("span");
        categoryBadge.className = "category-badge";
        categoryBadge.textContent = product.category;
        categoryCell.appendChild(categoryBadge);
        row.appendChild(categoryCell);
        const priceCell = document.createElement("td");
        priceCell.textContent = product.price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2
        });
        row.appendChild(priceCell);
        const quantityCell = document.createElement("td");
        quantityCell.textContent = String(product.quantity);
        row.appendChild(quantityCell);
        const statusCell = document.createElement("td");
        const status = document.createElement("span");
        status.className = product.inStock
            ? "status available"
            : "status unavailable";
        status.textContent = product.inStock ? "In stock" : "Out of stock";
        statusCell.appendChild(status);
        row.appendChild(statusCell);
        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Remove";
        deleteButton.setAttribute("aria-label", `Remove ${product.name}`);
        deleteButton.addEventListener("click", () => {
            products = products.filter(item => item.id !== product.id);
            renderProducts();
            updateDashboard();
        });
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        tableBody.appendChild(row);
    });
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);
    const quantity = Number(quantityInput.value);
    const category = categoryInput.value;
    if (name === "" ||
        category === "" ||
        !Number.isFinite(price) ||
        price <= 0 ||
        !Number.isInteger(quantity) ||
        quantity < 0) {
        alert("Please enter valid product details.");
        return;
    }
    const newProduct = {
        id: products.length > 0
            ? Math.max(...products.map(product => product.id)) + 1
            : 101,
        name,
        price,
        quantity,
        category,
        inStock: quantity > 0
    };
    products.push(newProduct);
    form.reset();
    renderProducts();
    updateDashboard();
    nameInput.focus();
});
searchInput.addEventListener("input", renderProducts);
stockFilter.addEventListener("change", renderProducts);
renderProducts();
updateDashboard();
