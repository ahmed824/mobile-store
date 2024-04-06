let productsInCart = localStorage.getItem("productsInCart")
let allProducts = document.querySelector('.products')

let removeFromCartBtn = document.querySelector('.remove_from_cart')



if (productsInCart) {
    let item = JSON.parse(productsInCart)
    drawCartsProducts(item);
}


function showAlert(message, type) {
    const alertContainer = document.getElementById('alert-container');
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    alertContainer.appendChild(alertDiv);
    setTimeout(() => {
        alertDiv.remove();
    }, 1500);
}

function drawCartsProducts(products) {
    let y = products.map((item) => {
        return ` 
        <div class="product_item mb-3">
                    <img src="${item.imgUrl}" alt="mobile image" class="product_item_img w-25 me-3 col-4">
                    <div class="col-8">
                        <div class="product_item_desc">
                            <h2>${item.title}</h2>
                            <p>the new mobile from oppo company 6-2022</p>
                            <span>color : ${item.color}</span>
                        </div>
                        <div class="product_item_action position-relative">
                            <button class="remove_from_cart btn mt-3" onclick="removeFromCart(${item.id})">Remove From Cart</button>
                        </div> 
                    </div>
                </div>
        `
    })
    allProducts.innerHTML = y;
}


function removeFromCart(id) {
    let items = JSON.parse(localStorage.getItem("productsInCart"));
    const indexToRemove = items.findIndex(item => item.id === id);
    if (indexToRemove !== -1) {
        items.splice(indexToRemove, 1);
        localStorage.setItem('productsInCart', JSON.stringify(items));
        drawCartsProducts(items);
        showAlert("Product removed from cart successfully!", "success");
    } else {
        showAlert("Item not found in the cart!", "danger");
    }
}
