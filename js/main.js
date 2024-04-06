

let userInfo = document.querySelector('#user_info')
let userData = document.querySelector('#user')
let links = document.querySelector('#links')

if (localStorage.getItem("userName")) {
    links.remove()
    userInfo.style.display = "flex"
    userData.innerHTML = localStorage.getItem("userName")
}

let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    }, 1500);
})

////////////////////////////////////////////////////

let allProducts = document.querySelector('.products')

let products = [
    {
        id: 1,
        title: "Oppo Reno 7",
        color: "Black",
        imgUrl: "img/oppo reno 7.jpg"
    },
    {
        id: 2,
        title: "Iphone 13",
        color: "Silver",
        imgUrl: "img/IPhone-13.jpg"
    },
    {
        id: 3,
        title: "Iphone X",
        color: "White",
        imgUrl: "img/pexels-jess-bailey-designs-788946.jpg"
    },
    {
        id: 4,
        title: "Redmi",
        color: "Black",
        imgUrl: "img/pexels-mustafa-ezz-10902918.jpg"
    },
    {
        id: 5,
        title: "Samsung S22",
        color: "White",
        imgUrl: "img/pexels-debraj-roy-13780425.jpg"
    },
    {
        id: 6,
        title: "Samsung Galaxy",
        color: "Gold",
        imgUrl: "img/pexels-mohi-syed-47261.jpg"
    },
    {
        id: 7,
        title: "Redmi 12",
        color: "Blue",
        imgUrl: "img/pexels-umang-patel-16079514.jpg"
    },
]

function drawItems() {
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
                            
                            <button  class="add_to_cart btn mt-3" onclick="addToCart(${item.id})">Add To Cart</button>
                            <i class="fa-solid fa-heart fav"></i>
                            
                        </div>
                    </div>
                </div>
        `
    })
    allProducts.innerHTML = y;
    
}
drawItems()

let cartsProductDiv = document.querySelector('.carts_products div')
let badge = document.querySelector(".badge")

let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartsProductDiv.innerHTML += `<p class="product-info">${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;

}
if(addedItem.length === 0 ) {
    badge.style.display = "none";
}

if (localStorage.getItem=("userName")) {
    function addToCart(id) {
        let choosenItem = products.find((item) => item.id === id);
        cartsProductDiv.innerHTML += ` <P class="product-info">${choosenItem.title}</P>`;

        addedItem = [...addedItem, choosenItem]
        localStorage.setItem("productsInCart", JSON.stringify(addedItem))
        let cartProductsLength = document.querySelectorAll('.carts_products div p').length;
    badge.style.display = "block";
    badge.innerHTML = cartProductsLength;

        showAlert("Product added to cart successfully!", "success");
    }
} else {
    window.location = "login.html"
}



///////////////////////////////

let shoppingCartIcon = document.querySelector('.shopping_cart')
let cartsProducts = document.querySelector(".carts_products")

shoppingCartIcon.addEventListener("click", opencart)

function opencart() {
    if (cartsProductDiv.innerHTML != '') {
        if (cartsProducts.style.display == "block") {
            cartsProducts.style.display = "none"
        } else {
            cartsProducts.style.display = "block"
        }
    }
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