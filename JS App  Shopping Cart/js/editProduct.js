// //Variables
let products = JSON.parse(localStorage.getItem("products") || productsDB);
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find((i) => i.id === productId);
let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let updateForm = document.getElementById('update-form');
let inputFile = document.getElementById('upload-image-file');
let productsSizeValue;
let productImage;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImage = getProduct.imageUrl;

//Events
productSizeSelect.addEventListener('change', getProductsSizeValue);
updateForm.addEventListener('submit', updateProductFun);
inputFile.addEventListener('change', uploadImage)

//Function
function getProductsSizeValue(e) {
    productsSizeValue = e.target.value;
}

function updateProductFun(e) {
    e.preventDefault();
    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productsSizeValue.value;
    getProduct.imageUrl = productImage.value;

    localStorage.setItem("products", JSON.stringify(products));
    setTimeout(() => {
        window.location = "index.html";
    }, 500)
}

//uploadImage
function uploadImage() {
    let file = this.files[0];
    let types = ["image/jpg", "image/png"]


    if (types.indexOf(file.type) == -1) {
        alert("Type not Supported");
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        alert("Image not Exced 2MB");
        return;
    }
    getImageBase64(file);
    // productImage = URL.createObjectURL(file)
}


// function getImageBase64(file) {
//     let reader = new FileReader()

//     reader.readAsDataURL(file)
//     reader.onload = function() {
//         productImage = reader.result;
//     };
//     reader.onerror = function() {
//         alert('Error !!');
//     }
// }