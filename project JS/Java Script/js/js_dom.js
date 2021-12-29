/* Setup Variables */
var productBtn = document.getElementById("product-btn");
var productContainer = document.getElementById("product-container");

var data = [
    { id: 1, name: 'Product 1', desc: 'Iraq' },
    { id: 2, name: 'Product 2', desc: 'Egypt' },
    { id: 3, name: 'Product 3', desc: 'Lebanon' },
    { id: 4, name: 'Product 4', desc: 'Syrian' },
];
//draw UI
function drawUI(items) {
    productContainer.innerHTML = "";
    // console.log(items);
    items.forEach(function(ele) {
        // console.log(ele);
        // productContainer.innerHTML += ele.name;
        // productContainer.innerHTML += "<div>" + ele.name + "</div>";
        productContainer.innerHTML += `
            <div onclick='deleteitem(${ele.id})'>
                ${ele.name} 
            </div>
        `;
    });
}
// drawUI(data);

//Load Data
//لما الصفحة يتعملها لود
window.onload = function() {
    drawUI(data);
}

//Add Item
productBtn.addEventListener('click', additem);

function additem() {
    var productinput = document.getElementById('product_input');
    //Simple Validation
    if (productinput.value == "") alert("You Should Enter Product");
    var lastId = data.length ? data[data.length - 1].id : 0;
    // console.log(++lastId);
    //add to array
    data.push({ id: ++lastId, name: productinput.value, desc: 'Iran' })
        // console.log(data);
    var addeditem = data[data.length - 1];
    // console.log(addeditem);
    productContainer.innerHTML += `
    <div onclick='deleteitem(${addeditem.id})'>
        ${addeditem.name} 
    </div>
    `;
    productinput.value = "";
};

function deleteitem(id) {
    // console.log(id);
    // data.splice(0, 1);
    // console.log(data);
    var index = data.map(function(i) {
        return i.id;

    }).indexOf(id);
    // console.log(index);
    if (index !== -1) {
        data.splice(index, 1);
        drawUI(data);
    }
    // console.log(data);
}