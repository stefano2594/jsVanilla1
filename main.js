// hacemos un fetch para comunicarnos con nuestros archivo.json
const fetchData = async () => {
  // funcion del tipo asincrona
  fetch("./product.json")
    .then((res) => res.json())
    .then((data) => {
      //   renderProduct(data.productos);
      //     console.log(data);

      filtrar(data);
      obtenerShopifys();
    })
    .catch((error) => {
      console.log(error);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const MobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
let productDetailContainer = document.querySelector("#productDetail");
const ShoopingcardsContainer = document.querySelector(".my-order-content");

const darken = document.querySelector(".darken");

menuEmail.addEventListener("click", toggleDesktopMenu);

menuHamIcon.addEventListener("click", toggleMobileMenu);

//carrito
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

// productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  if (productDetailContainer) {
    productDetailContainer.classList.add("inactive");
  }
  shoppingCartContainer.classList.add("inactive");

  // darken.classList.remove('inactive');
}

function toggleMobileMenu() {
  desktopMenu.classList.add("inactive");
  MobileMenu.classList.toggle("inactive");
  // const isAsideClosed = aside.classList.contains('inactive');
  // if (!isAsideClosed) {
  //     aside.classList.add('inactive');
  // }
  // MobileMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add("inactive");
  if (productDetailContainer) {
    productDetailContainer.classList.add("inactive");
  }
}

function toggleCarritoAside() {
  //  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  // if (!isMobileMenuClosed) {
  //     mobileMenu.classList.add('inactive');
  // }
  // aside.classList.toggle('inactive');
  desktopMenu.classList.add("inactive");
  MobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.toggle("inactive");

  //productDetailContainer.remove();
}

function openProductDetailAside(e, data) {
  idGtAside = e.currentTarget.parentElement.children[1].id;

  data.forEach((pro) => {
    if (pro.id == idGtAside) {
      render_product_detail(pro);
      desktopMenu.classList.add("inactive");
      darken.classList.remove("inactive");
      shoppingCartContainer.classList.add("inactive");
    }
  });

  console.log(idGtAside);
}

function closeProductDetailAside() {
  //let productDetailContainer = document.querySelector('#productDetail');
  // const productDetailContainer = document.querySelector('#productDetail');
  // productDetailContainer.classList.add('inactive');
  let productDetailContainer = document.querySelector("#productDetail");
  productDetailContainer.remove();
  shoppingCartContainer.classList.add("inactive");
  darken.classList.add("inactive");
}

// const productList = [];
// productList.push({
//     id: 1,
//     name: 'Bike',
//     price: 120,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// });

function filtrar(data) {
  //  productSelect.filter();
  let All_Cards,
    Clothes_Cards,
    Electronics_Cards,
    Toys_Cards,
    Furnitures_Cards,
    Others_Cards;

  //  All_Cards = [...data];

  const filtrados = data.productos;
  console.log(data.productos);

  All_Cards = [...filtrados];
  Clothes_Cards = filtrados.filter((dat) => dat.Category == "Clothes");
  Electronics_Cards = filtrados.filter((dat) => dat.Category == "Electronics");
  Toys_Cards = filtrados.filter((dat) => dat.Category == "Toys");
  Furnitures_Cards = filtrados.filter((dat) => dat.Category == "Furnitures");
  Others_Cards = filtrados.filter((dat) => dat.Category == "Others");

  const SelectAll = document.querySelector("#All");
  const SelectClothes = document.querySelector("#Clothes");
  const SelectElectronics = document.querySelector("#Electronics");
  const SelectToys = document.querySelector("#Toys");
  const SelectFurnitures = document.querySelector("#Furnitures");
  const SelectOthers_Cards = document.querySelector("#Others");

  // para la parte mobile
  const SelectMobileAll = document.querySelector(".mobile-menu #All");
  const SelectMobileClothes = document.querySelector(".mobile-menu #Clothes");
  const SelectMobileElectronics = document.querySelector(
    ".mobile-menu #Electronics"
  );
  const SelectMobileToys = document.querySelector(".mobile-menu #Toys");
  const SelectMobileFurnitures = document.querySelector(
    ".mobile-menu #Furnitures"
  );
  const SelectMobileOthers_Cards = document.querySelector(
    ".mobile-menu #Other"
  );
  // renderiza cada card de productos sin filtros
  renderProduct(All_Cards);

  // Eventos
  // renderiza cada card de productos con filtros si se procede a dar click a determinado id del nav => li => a
  SelectClothes.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");

    SelectCard2.forEach((Se) => {
      Se.remove();
    });

    renderProduct(Clothes_Cards);
    obtenerShopifys();
  });
  SelectAll.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });

    renderProduct(All_Cards);
    obtenerShopifys();
  });
  SelectElectronics.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });

    renderProduct(Electronics_Cards);
    obtenerShopifys();
  });
  SelectToys.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });

    renderProduct(Toys_Cards);
    obtenerShopifys();
  });
  SelectFurnitures.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });

    renderProduct(Furnitures_Cards);
    obtenerShopifys();
  });
  SelectOthers_Cards.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });

    renderProduct(Others_Cards);
    obtenerShopifys();
  });
  // ahora eventos para el menu mobiles
  SelectMobileClothes.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });
    MobileMenu.classList.add("inactive");
    renderProduct(Clothes_Cards);
    obtenerShopifys();
  });
  SelectMobileAll.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });
    MobileMenu.classList.add("inactive");
    renderProduct(All_Cards);
    obtenerShopifys();
  });
  SelectMobileElectronics.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });
    MobileMenu.classList.add("inactive");
    renderProduct(Electronics_Cards);
    obtenerShopifys();
  });
  SelectMobileFurnitures.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });
    MobileMenu.classList.add("inactive");
    renderProduct(Furnitures_Cards);
    obtenerShopifys();
  });
  SelectMobileToys.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });
    MobileMenu.classList.add("inactive");
    renderProduct(Toys_Cards);
    obtenerShopifys();
  });
  SelectMobileOthers_Cards.addEventListener("click", (e) => {
    let SelectCard2 = document.querySelectorAll(".product-card");
    SelectCard2.forEach((Se) => {
      Se.remove();
    });
    MobileMenu.classList.add("inactive");
    renderProduct(Others_Cards);
    obtenerShopifys();
  });
}

const renderProduct = (data) => {
  for (product of data) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product= {name, price, image} -> product.image
    const producImg = document.createElement("img");
    producImg.setAttribute("src", product.image);
    producImg.addEventListener("click", (e) => openProductDetailAside(e, data));

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    productInfo.setAttribute("id", product.id);
    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigureDiv = document.createElement("div");
    productInfoFigureDiv.setAttribute("id", "figure_shopify");
    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfoFigureDiv.appendChild(productInfoFigure);

    productInfo.append(productInfoDiv, productInfoFigureDiv);

    productCard.append(producImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
};

const productSelect = [];
const obtenerShopifys = () => {
  SelectCarrito1 = document.querySelectorAll("#figure_shopify");
  SelectCarrito1.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      console.log(e.target.parentElement);
      obtenerProducto(e);
      refresh();
      render_Order_cart();
    });
  });
};

const obtenerProducto = (e) => {
  let containerAside = e.target.parentElement.parentElement;

  console.log(containerAside);
  let getCard = e.target.parentElement.parentElement.parentElement;

  let setImg = e.target.parentElement.parentElement.parentElement.parentElement;

  let imgpro = setImg.children[0].getAttribute("src");

  let precio = getCard.children[0].children[0].textContent;
  let titlenam = getCard.children[0].children[1].textContent;

  let buy = {
    id: containerAside,
    name: titlenam,
    price: precio,
    image: imgpro,
  };

  productSelect.push(buy);
  let contadorRender = document.createElement("div");
  contadorRender.innerText = productSelect.length;
  let nav_shooping_Count = document.querySelector(".navbar-shopping-cart");

  let nav_shoop = document.querySelector(".navbar-shopping-cart div");
  nav_shoop.remove();
  nav_shooping_Count.appendChild(contadorRender);
  //    console.log(productSelect);
};

const render_Order_cart = () => {
  productSelect.forEach((pro) => {
    const Productcard = document.createElement("div");
    Productcard.classList.add("shopping-cart");

    const figureProduct = document.createElement("figure");

    const FigureImgProduct = document.createElement("img");
    FigureImgProduct.setAttribute("src", `${pro.image}`);
    FigureImgProduct.setAttribute("alt", `${pro.name}`);

    const precioProduct = document.createElement("p");
    precioProduct.innerText = pro.name;
    const nameProduct = document.createElement("p");
    nameProduct.innerText = pro.price;

    const cerrarProduct = document.createElement("img");
    cerrarProduct.setAttribute("src", "./icons/icon_close.png");
    cerrarProduct.setAttribute("alt", "close");
    cerrarProduct.addEventListener("click", (e) => {
      let eliminarOrdeTarget = e.currentTarget.parentElement;
      let cerrarTarget = e.currentTarget.parentElement.children[1].innerText;
      console.log(cerrarTarget);

      eliminarOrdeTarget.remove();
      //let index = productSelect.indexOf(cerrarTarget);
      let index = productSelect.findIndex((p) => p.name == `${cerrarTarget}`);
      console.log(index);
      productSelect.splice(index, 1);

      // let mofTotal = document.querySelector("#total");
      // let total = 0;
      // productSelect.forEach((pr) => {
      //   let prices = pr.price;
      //   let tra = prices.slice(1);
      //   let proc = parseInt(tra);
      //   total = total + proc;
      //   // console.log(proc);
      // });
      to = document.querySelector("#total");
      but = document.querySelector("#butt");
      to.remove();
      but.remove();

      render_showOrderProduct();

      let contadorRender = document.createElement("div");
      contadorRender.innerText = productSelect.length;
      let nav_shooping_Count = document.querySelector(".navbar-shopping-cart");

      let nav_shoop = document.querySelector(".navbar-shopping-cart div");
      nav_shoop.remove();
      nav_shooping_Count.appendChild(contadorRender);
    });

    figureProduct.appendChild(FigureImgProduct);

    Productcard.append(
      figureProduct,
      precioProduct,
      nameProduct,
      cerrarProduct
    );

    ShoopingcardsContainer.appendChild(Productcard);
    //   <!-- <div class="order">
    //             <p>
    //                 <span>Total</span>
    //             </p>
    //             <p>$560.00</p>
    //         </div>

    //         <button class="primary-button">
    //             Checkout
    //         </button> -->
  });
  render_showOrderProduct();
};

const render_showOrderProduct = () => {
  const orderProduct = document.createElement("div");
  orderProduct.classList.add("order");
  orderProduct.setAttribute("id", "total");
  const forma = document.createElement("p");

  const spaTotal = document.createElement("span");
  spaTotal.innerText = "Total";
  let total = 0;

  productSelect.forEach((pr) => {
    let prices = pr.price;
    let tra = prices.slice(1);
    let proc = parseInt(tra);
    total = total + proc;
    // console.log(proc);
  });
  const form1 = document.createElement("p");
  form1.innerText = "$ " + total;
  const butt = document.createElement("button");
  butt.classList.add("primary-button");
  butt.innerText = "Checkout";
  butt.setAttribute("id", "butt");
  forma.appendChild(spaTotal);

  orderProduct.append(forma, form1);

  ShoopingcardsContainer.appendChild(orderProduct);
  ShoopingcardsContainer.appendChild(butt);
};

const refresh = () => {
  let eli = document.querySelectorAll(".shopping-cart");

  let eli1 = document.querySelector("#total");

  let eli2 = document.querySelector("#butt");

  if (eli1) {
    eli1.remove();
  }
  if (eli2) {
    eli2.remove();
  }

  eli.forEach((el) => {
    el.remove();
  });
};

const productListOrder = [];

// const Selectcarrito = document.querySelector('#shopping-Cart-button');
// Selectcarrito.addEventListener('click', e => AgregarOrder_CardDetail(e));

const obtenerProductoAside = (e) => {
  let containerAside = e.currentTarget.parentElement.id;
  let getCard;
  let getCardl;
  let imgpro;
  let precio;
  let titlenam;

  //  let setImg = e.target.parentElement.parentElement.parentElement.parentElement;
  getCard = e.target.parentElement.parentElement;
  getCardl = e.currentTarget.parentElement.parentElement;

  imgpro = getCard.children[1].getAttribute("src");
  if (getCardl) {
    precio = getCardl.children[2].children[0].textContent;
    titlenam = getCardl.children[2].children[1].textContent;
  }

  let buy = {
    id: containerAside,
    name: titlenam,
    price: precio,
    image: imgpro,
  };

  productSelect.push(buy);

  let contadorRender = document.createElement("div");
  contadorRender.innerText = productSelect.length;
  let nav_shooping_Count = document.querySelector(".navbar-shopping-cart");

  let nav_shoop = document.querySelector(".navbar-shopping-cart div");
  nav_shoop.remove();
  nav_shooping_Count.appendChild(contadorRender);

  // console.log(containerAside);
};

function AgregarOrder_CardDetail(e) {
  darken.classList.add("inactive");
  // shoppingCartContainer.classList.add('inactive');

  //productDetailContainer.classList.add('inactive');

  obtenerProductoAside(e);
  refresh();
  render_Order_cart();
  let productDetailContainer = document.querySelector("#productDetail");
  productDetailContainer.remove();
}

function render_product_detail(pro) {
  const ina = document.createElement("aside");
  //  ina.classList.add('inactive');
  ina.setAttribute("id", "productDetail");

  const divdetailClose = document.createElement("div");
  divdetailClose.classList.add("product-detail-close");
  divdetailClose.addEventListener("click", closeProductDetailAside);
  const imgClose = document.createElement("img");
  imgClose.setAttribute("src", "./icons/icon_close.png");
  imgClose.setAttribute("alt", "close");

  const imgProduct = document.createElement("img");
  imgProduct.setAttribute("src", pro.image);

  const divInfo = document.createElement("div");
  divInfo.setAttribute("id", pro.id);
  divInfo.classList.add("product-info");

  const pPrecio = document.createElement("p");
  pPrecio.innerText = "$ " + pro.price;

  const pNombre = document.createElement("p");
  pNombre.innerText = pro.name;

  const pContenido = document.createElement("p");
  pContenido.innerText = pro.content;

  const DetailButton = document.createElement("button");
  DetailButton.classList.add("primary-button");
  DetailButton.classList.add("add-to-cart-button");
  DetailButton.setAttribute("id", "shopping-Cart-button");
  DetailButton.innerText = "Add to cart";
  DetailButton.addEventListener("click", (e) => AgregarOrder_CardDetail(e));

  const imgButton = document.createElement("img");
  imgButton.setAttribute("src", "./icons/bt_add_to_cart.svg");
  imgButton.setAttribute("alt", "add to cart");

  divdetailClose.appendChild(imgClose);

  DetailButton.appendChild(imgButton);

  divInfo.append(pPrecio, pNombre, pContenido, DetailButton);

  ina.appendChild(divdetailClose);
  ina.appendChild(imgProduct);
  ina.appendChild(divInfo);

  const container = document.querySelector(".cards-container");
  container.appendChild(ina);
}

// enlaces

let IrSignOut = desktopMenu.children[0].children[2].children[0];
IrSignOut.setAttribute("href", "./clase3.html");

let IrMyAccount = desktopMenu.children[0].children[1].children[0];
IrMyAccount.setAttribute("href", "./clase4.html");
console.log(IrMyAccount);

let MyOrders = desktopMenu.children[0].children[0].children[0];
MyOrders.setAttribute("href", "./clase9.html");
