// ====some notes==========
// localStorage.setItem("name", "hawraa");
// localStorage.setItem("Age", "27");
// console.log(localStorage.getItem("name"));

//removeItem (local storage تمسح عنصر معين من الداتا )
// localStorage.removeItem("name");

//clear تمسح البيانات كلها
// localStorage.clear();

// JSON.parse()//string to object
// JSON.stringify()//object to string




//Define Products
let productsDom = document.querySelector('.products');
let products = productsDB;


//Display Products
let drawProductsUI;
(drawProductsUI = function(products = []) {
    let productsUI = products.map((item) => {
        console.log("eee", item);
        return `
        <div class="product-item" style="border: ${item.isMe === 'Y' ? "2px solid green" : ""}">
            <img src="${item.imageUrl}" class="product-item-img" alt="product1">
            <div class="product-item-desc">
                <a onclick='saveItemData(${item.id})'>${item.title}</a>
                <p><p>${item.desc}</p></p>
                <span>size: ${item.size}</span>
                ${item.isMe === 'Y' && "<button class='edit-product' onclick='editProduct(" + item.id +")'>Edit Product </button>" }
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="addedToCart(${(item.id)})">Add to Cart</button>
                <i class="favourite far fa-heart" style="color: ${item.liked === true ? 'red' : ''}" onclick="addedToFavourite(${item.id})"></i>
            </div>
        </div>
        `;
    });
    productsDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem('products')) || products);



//Add to Cart
function addedToCart(id) {
    if (localStorage.getItem('username')) {
        let products = JSON.parse(localStorage.getItem("products")) || products;
        let product = products.find((item) => item.id === id);
        let isProductInCart = addedItem.some((i) => i.id === product.id);
        if (isProductInCart) {
            addedItem = addedItem.map((p) => {
                if (p.id === product.id) p.qty += 1;
                return p;
            });
        } else {
            addedItem.push(product);
        }
        //UI
        cartProductDivDom.innerHTML = "";
        addedItem.forEach((item) => {
            cartProductDivDom.innerHTML += `<p>${item.title}<span class="item-qty">${item.qty}</span></p>`;
        });
        //Save Data
        localStorage.setItem('productsInCart', JSON.stringify(addedItem));
        //Add Counter of Items
        let cartProductsItem = document.querySelectorAll('.carts-products div p');
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductsItem.length;
    } else {
        window.location = "login.html"
    }
}

function getUniqueArr(arr, filterType) {
    let unique = arr.map((item) => item[filterType])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter(item => arr[item])
        .map(item => arr[item]);

    return unique;
}


function saveItemData(id) {
    localStorage.setItem("productId", id);
    window.location = 'cartDetails.html';
}

//search function
let input = document.getElementById('search');
input.addEventListener('keyup', function(e) {
    search(e.target.value, JSON.parse(localStorage.getItem("products")));
    if (e.target.value.trim() === "")
        drawProductsUI(JSON.parse(localStorage.getItem('products')));
})

function search(title, myArray) {
    let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductsUI(arr);
}


//Add to Favourite
let favouriteItems = localStorage.getItem('productsFavourite') ? JSON.parse(localStorage.getItem('productsFavourite')) : [];

function addedToFavourite(id) {
    if (localStorage.getItem('username')) {
        let choosenItem = products.find((item) => item.id === id);
        choosenItem.liked = true;
        favouriteItems = [...favouriteItems, choosenItem];
        let uniqueProducts = getUniqueArr(favouriteItems, "id");
        localStorage.setItem('productsFavourite', JSON.stringify(uniqueProducts));
        products.map(item => {
            if (item.id === choosenItem.id) {
                item.liked = true;
            }
        })
        localStorage.setItem('products', JSON.stringify(products));
        drawProductsUI(products);
    } else {
        window.location = "login.html"
    }
}



// Filter Products By Size
let sizeFilter = document.getElementById('size-filter');
sizeFilter.addEventListener('change', getProductsFilterBySize);

function getProductsFilterBySize(e) {
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem('products')) || products;

    if (val === 'all') {
        drawProductsUI(products);
    } else {
        products = products.filter(i => i.size === val);
        drawProductsUI(products);
    }
}


//Edit Product
function editProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "editProduct.html";
}