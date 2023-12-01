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
let imageNumer = mainProductImage.src
  .split("-")
  .slice(-1)
  .join("")
  .split(".")[0]

function changeMainProductImage(event) {
  const thumbnailProductImageNumber = event.target.id.split("-")[1]

  mainProductImage.src = `images/image-product-${thumbnailProductImageNumber}.jpg`
  mainProductModalImage.src = `images/image-product-${thumbnailProductImageNumber}.jpg`
}

function nextImage() {
  imageNumer++
  if (imageNumer > 4) {
    imageNumer = 1
  }
  mainProductImage.src = `images/image-product-${imageNumer}.jpg`
  mainProductModalImage.src = `images/image-product-${imageNumer}.jpg`
}

function previousImage() {
  imageNumer--
  if (imageNumer < 1) {
    imageNumer = 4
  }
  mainProductImage.src = `images/image-product-${imageNumer}.jpg`
  mainProductModalImage.src = `images/image-product-${imageNumer}.jpg`
}

function openGallery() {
  galleryModal.style.display = "block"
}
const galleryCloseButton = document.getElementById("gallery-close-button")

function closeGallery(event) {
  const modalContent = document.getElementsByClassName("modal-container")[0]

  if (
    !modalContent.contains(event.target) ||
    galleryCloseButton.contains(event.target)
  ) {
    mainProductImage.src = mainProductModalImage.src
    galleryModal.style.display = "none"
  }
}

function iconCloseOrange() {
  galleryCloseButton.src = "images/icon-close-orange.svg"
}

function iconCloseWhite() {
  galleryCloseButton.src = "images/icon-close-white.svg"
}

function openHamburgerMenu() {
  const hamburgerMenu = document.getElementById("hamburger-menu")
  const hamburgerMenuBackground = document.getElementById(
    "hamburger-menu-background"
  )
  if (hamburgerMenu.style.display == "none") {
    hamburgerMenu.style.display = "block"
    hamburgerMenuBackground.style.display = "block"
    document.body.style.overflowY = "hidden"
    document.body.style.overflowX = "hidden"
  } else {
    hamburgerMenu.style.display = "none"
    hamburgerMenuBackground.style.display = "none"
    document.body.style.overflowY = "visible"
    document.body.style.overflowX = "visible"
  }
}

function closeHamburgerMenu(event) {
  const hamburgerMenuContent = document.getElementById("hamburger-menu")
  const hamburgerMenuCloseIcon = document.getElementById(
    "hamburger-menu-close-icon"
  )
  const hamburgerMenuBackground = document.getElementById(
    "hamburger-menu-background"
  )

  console.log(hamburgerMenuBackground.contains(event.target))
  if (
    hamburgerMenuBackground.contains(event.target) ||
    hamburgerMenuCloseIcon.contains(event.target)
  ) {
    hamburgerMenuContent.style.display = "none"
    hamburgerMenuBackground.style.display = "none"
    document.body.style.overflowY = "visible"
    document.body.style.overflowX = "visible"
  }
}
