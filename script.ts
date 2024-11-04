// Define the Product type with name, quantity, and price properties
interface Product {
  productName: string;
  quantity: number;
  price: number;
}

// Create an array of products
const products: Product[] = [
  { productName: "Laptop", quantity: 1, price: 1500 },
  { productName: "Smartphone", quantity: 1, price: 800 },
  { productName: "Tablet", quantity: 2, price: 300 },
  { productName: "Headphones", quantity: 3, price: 200 },
  { productName: "Smartwatch", quantity: 2, price: 400 }
];

// Function to display products in the HTML table
function displayProducts() {
  const tableBody = document.getElementById('productTableBody') as HTMLTableSectionElement;

  // Clear existing rows
  tableBody.innerHTML = '';

  // Loop through each product in the array
  products.forEach((product) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = product.productName;
    row.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = product.quantity.toString();
    row.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = `$${product.price.toFixed(2)}`;
    row.appendChild(priceCell);

    tableBody.appendChild(row);
  });
}

// Call the displayProducts function when the page loads
window.onload = displayProducts;



interface Sale {
  productName: string;
  amount: number;
}

let sales: Sale[] = [];

function addSale(): void {
  const productName = (document.getElementById('productName') as HTMLInputElement).value.trim();
  const saleAmount = parseFloat((document.getElementById('saleAmount') as HTMLInputElement).value.trim());

  if (!productName || isNaN(saleAmount) || saleAmount < 0) {
      alert('Please enter a valid product name and amount.');
      return;
  }

  const sale: Sale = { productName, amount: saleAmount };
  sales.push(sale);
  updateSalesTable();
  updateReport();
}

function updateSalesTable(): void {
  const tableBody = document.getElementById('salesTable')!.getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Clear existing rows

  sales.forEach((sale) => {
      const newRow = tableBody.insertRow();
      newRow.insertCell().innerText = sale.productName;
      newRow.insertCell().innerText = sale.amount.toFixed(2);
  });
}

function updateReport(): void {
  const totalAmount = sales.reduce((sum, sale) => sum + sale.amount, 0);
  (document.getElementById('totalAmount') as HTMLSpanElement).innerText = totalAmount.toFixed(2);
}


