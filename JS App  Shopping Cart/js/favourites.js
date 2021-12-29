let productsDom = document.querySelector('.products');
let noProductsDom = document.querySelector('.noProducts');

function drawfavouriteProductsUI(allProducts = []) {
    if (JSON.parse(localStorage.getItem('productsFavourite')).length === 0)
        noProductsDom.innerHTML = "There is No Items !!"

    let products = JSON.parse(localStorage.getItem('productsFavourite')) || allProducts;
    let productsUI = products.map((item) => {
        return `
        <div class="product-item">
            <img src="${item.imageUrl}" class="product-item-img" alt="product1">
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <span>size: ${item.size}</span><br>
                <span>Quantity: ${item.qty}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeItemFromFavourite(${(item.id)})">Remove from Favourite</button>
            </div>
        </div>
        `;
    });
    productsDom.innerHTML = productsUI.join("");
}
drawfavouriteProductsUI();

function removeItemFromFavourite(id) {
    let productsFavourite = localStorage.getItem('productsFavourite');
    if (productsFavourite) {
        let items = JSON.parse(productsFavourite);
        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem('productsFavourite', JSON.stringify(filteredItems));
        drawfavouriteProductsUI(filteredItems);
    }
}