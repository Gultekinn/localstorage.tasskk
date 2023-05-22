
let products = [];
let basketItems = [];

const add_product_btn = document.querySelector(".add__product");
const price_input = document.querySelector("#price_input");
const name_input = document.querySelector("#name_input");
const carts = document.querySelector(".carts");
const add_to_wishlist_btn = document.querySelector(".add_to_wishlist_btn");
let basketItemsCounter = document.getElementById("basketItemsCounter");
const basketItemsBody = document.getElementById("basketItemsBody");
const wishlistItems =
  localStorage.getItem("wishlistItems") !== null
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [];
let productId = 0;
const arr = [];

const initialState = {
  wishlistItems,
};

let productPrice;
let productName;

function addToWishlist(item) {
  localStorage.setItem("wishlistItems", JSON.stringify(item));
}

const addProduct = (e) => {
  productPrice = price_input.value;
  productName = name_input.value;
  productId++;
  let product = new Product(productId, productName, productPrice);
  arr.push(product);
  carts.innerHTML = arr.map((item) => {
    return `
    <div class="cart cart${item.id}">
    <img
    src="https://www.farmersalmanac.com/wp-content/uploads/2021/03/peony-pink-flowers_as89294217.jpeg"
    alt=""
    />
    <h4 id="product_title">
    ${item.name}
    </h4>
    <div class="icona">
    <i style="color: yellow;"
    class="bi bi-star-fill"
    ></i>
    <i style="color: yellow" class="bi bi-star-fill"></i>
    <i style="color: yellow" class="bi bi-star-fill"></i>
    <i style="color: yellow" class="bi bi-star-fill"></i>
    <i style="color: yellow" class="bi bi-star-fill"></i>
  </div>
  <p style="text-align: center; margin-top: 10px" id="product_price">$50.000</p>
    <button class="btn1">Add to</button>
    <button data-toggle="modal2" data-target="#exampleModal2" onClick=${addToWishlist(
      item
    )} class="add_to_wishlist_btn">Wishlist</button>
</div>
    `;
  });
};

add_product_btn.addEventListener("click", addProduct);

class Product {
  constructor(id, name, category, price) {
    (this.id = id),
      (this.name = name),
      (this.category = category),
      (this.price = price);
  }
}



// baskete elave etmek
function addToBasket(id) {
  let target = products.find((product) => product.id == id);

  basketItems.push(target);
  console.log(basketItems);
  basketItemsCounter.innerHTML++;
  renderBasket(basketItems);
}



const renderBasket = (e) => {
  productPrice = price_input.value;
  productName = name_input.value;
  productId++;
  let product = new Product(productId, productName, productPrice);
  arr.push(product);
renderList(products);
  let innerHTML = "";
  for (let i = 0; i < e.target.length; i++) {

    innerHTML += ` <div class="cart cart${item.id}">
    <img
    src="https://www.farmersalmanac.com/wp-content/uploads/2021/03/peony-pink-flowers_as89294217.jpeg"
    alt=""
    />
    <h4 id="product_title">
    ${item.name}
    </h4>
    <div class="icona">
    <i style="color: yellow;"
    class="bi bi-star-fill"
    ></i>
    <i style="color: yellow" class="bi bi-star-fill"></i>
    <i style="color: yellow" class="bi bi-star-fill"></i>
    <i style="color: yellow" class="bi bi-star-fill"></i>
    <i style="color: yellow" class="bi bi-star-fill"></i>
  </div>
  <p style="text-align: center; margin-top: 10px" id="product_price">$50.000</p>
    <button class="btn1">Add to</button>
    <button data-toggle="modal2" data-target="#exampleModal2" onClick=${addToWishlist(
      item
    )} class="add_to_wishlist_btn">Wishlist</button>
</div>`;
  }
  basketItemsBody.innerHTML = innerHTML;
}





  