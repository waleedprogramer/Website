// Create an array of products
var products = [
    { productName: "Laptop", quantity: 1, price: 1500 },
    { productName: "Smartphone", quantity: 1, price: 800 },
    { productName: "Tablet", quantity: 2, price: 300 },
    { productName: "Headphones", quantity: 3, price: 200 },
    { productName: "Smartwatch", quantity: 2, price: 400 }
];
// Function to display products in the HTML table
function displayProducts() {
    var tableBody = document.getElementById('productTableBody');
    // Clear existing rows
    tableBody.innerHTML = '';
    // Loop through each product in the array
    products.forEach(function (product) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = product.productName;
        row.appendChild(nameCell);
        var quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);
        var priceCell = document.createElement('td');
        priceCell.textContent = "$".concat(product.price.toFixed(2));
        row.appendChild(priceCell);
        tableBody.appendChild(row);
    });
}
// Call the displayProducts function when the page loads
window.onload = displayProducts;
var sales = [];
function addSale() {
    var productName = document.getElementById('productName').value.trim();
    var saleAmount = parseFloat(document.getElementById('saleAmount').value.trim());
    if (!productName || isNaN(saleAmount) || saleAmount < 0) {
        alert('Please enter a valid product name and amount.');
        return;
    }
    var sale = { productName: productName, amount: saleAmount };
    sales.push(sale);
    updateSalesTable();
    updateReport();
}
function updateSalesTable() {
    var tableBody = document.getElementById('salesTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows
    sales.forEach(function (sale) {
        var newRow = tableBody.insertRow();
        newRow.insertCell().innerText = sale.productName;
        newRow.insertCell().innerText = sale.amount.toFixed(2);
    });
}
function updateReport() {
    var totalAmount = sales.reduce(function (sum, sale) { return sum + sale.amount; }, 0);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}
