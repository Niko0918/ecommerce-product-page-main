//Show or hide mini cart content
const cartContent = document
  .getElementById("header")
  .getElementsByClassName("mini-cart-content")[0]

const cartIcon = document
  .getElementById("header")
  .getElementsByClassName("cart-icon")[0]

const addToCartButton = document
  .getElementById("main")
  .getElementsByClassName("add-to-cart")[0]

function showCart() {
  cartContent.style.display = "block"
  console.log("open")
}

window.addEventListener("mouseup", function (event) {
  console.log("ssss")
  if (
    !cartContent.contains(event.target) &&
    !cartIcon.contains(event.target) &&
    !addToCartButton.contains(event.target)
  ) {
    cartContent.style.display = "none"
  }
})

//Plus or minus product quantity
const productQuantity = document.getElementsByClassName(
  "product-quantity-number"
)[0]

function minusQuantity() {
  if (productQuantity.value > 0) {
    productQuantity.value--
  }
}

function plusQuantity() {
  productQuantity.value++
}

//Remove item from cart
function removeItemFromCart() {
  document.getElementById(
    "mini-cart-products-list"
  ).innerHTML = `<strong class="cart-is-empty">Your cart is empty.</strong>`
  console.log("removed")
  cartQuanity = 0
}

// Add to cart
var cartQuanity = 0
function addToCart() {
  const priceForProduct = parseFloat(
    document.getElementsByClassName("price")[0].textContent.substring(1)
  ).toFixed(2)
  const inputQuantity = document.getElementsByClassName(
    "product-quantity-number"
  )[0].value

  cartQuanity = cartQuanity + parseInt(inputQuantity)

  if (parseInt(inputQuantity) > 0) {
    document.getElementById("mini-cart-products-list").innerHTML = `<ul>
    <li>
      <img
        class="mini-cart-thumbnail"
        src="images/image-product-1-thumbnail.jpg"
        alt=""
      />
      <div>
        <span style="margin-bottom: 5px;">Fall Limited Edition Sneakers</span>
        <div class="mini-cart-product-price-container">
          <span class="price-for-one-piece">$${priceForProduct}</span><span> x </span><span class="number-of-pieces">${cartQuanity}</span>
          <strong class="price-for-all-pieces">$${
            priceForProduct * cartQuanity
          }</strong>
       </div>
      </div>
      <img
        onClick="removeItemFromCart()"
        class="mini-cart-delete"
        src="images/icon-delete.svg"
        alt=""
      />
    </li>
  </ul>`
    showCart()
  }
  console.log(priceForProduct + " mnozsto: " + inputQuantity)
}

//Image gallery
const galleryModal = document.getElementById("gallery-modal")
const mainProductImage = document.getElementById("main-product-image")
const mainProductModalImage = document.getElementById(
  "main-modal-gallery-image"
)

function changeMainProductImage(event) {
  const thumbnailProductImageNumber = event.target.id.split("-")[1]

  if (galleryModal.style.display == "none") {
    mainProductImage.src = `images/image-product-${thumbnailProductImageNumber}.jpg`
    mainProductModalImage.src = `images/image-product-${thumbnailProductImageNumber}.jpg`
  } else {
    mainProductModalImage.src = `images/image-product-${thumbnailProductImageNumber}.jpg`
  }
}

function openGallery() {
  galleryModal.style.display = "block"
}

function closeGallery(event) {
  const modalContent = document.getElementsByClassName("modal-container")[0]
  const galleryCloseButton = document.getElementById("gallery-close-button")

  if (
    !modalContent.contains(event.target) ||
    galleryCloseButton.contains(event.target)
  ) {
    mainProductImage.src = mainProductModalImage.src
    galleryModal.style.display = "none"
  }
}

function iconCloseOrange(icon) {
  icon.src = "../images/icon-close-orange.svg"
}

function iconCloseWhite(icon) {
  icon.src = "../images/icon-close-white.svg"
}
