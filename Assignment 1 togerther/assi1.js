
const menuItems = [
    { name: "Classic Burger", price: 12.50 },
    { name: "Garden Salad", price: 9.00 }
];


const addBtn = document.getElementById('addBtn');
const menuBody = document.getElementById('menuBody');

function renderTable() {

    menuBody.innerHTML = "";

 
    for (let i = 0; i < menuItems.length; i++) {
        let row = `<tr>
            <td>${i + 1}</td>
            <td>${menuItems[i].name}</td>
            <td>$${menuItems[i].price.toFixed(2)}</td>
        </tr>`;
        menuBody.innerHTML += row;
    }
}


addBtn.addEventListener('click', function() {
    const nameInput = document.getElementById('dishName');
    const priceInput = document.getElementById('dishPrice');


    if (nameInput.value === "" || priceInput.value === "") {
        alert("Please fill out both fields!");
        return;
    }

  
    const newItem = {
        name: nameInput.value,
        price: parseFloat(priceInput.value)
    };

    menuItems.push(newItem);

   
    renderTable();
    nameInput.value = "";
    priceInput.value = "";
});


renderTable();