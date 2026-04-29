const productDatabase = [
  {id:1, name:"Hoa Oải Hương", price:200000, img:"../assets/nen4.jpg"},
  {id:2, name:" HoaTulip", price:15000, img:"../assets/dang.jpg"},
  {id:3, name:"Hoa Cúc", price:100000, img:"../assets/nen1.jpg"},
  {id:4, name:"Hoa Hồng", price:180000, img:"../assets/hoa hồng.webp"},
 {id:5, name:"Hoa Cẩm Tú Cầu", price:190000, img:"../assets/lam.jpg"},
{id:6, name:"Hoa Nhái", price:18000, img:"../assets/hinh1.jpg"},
{id:7, name:"Hoa Linh Lan", price:1000000, img:"../assets/hinh2.jpeg"},
{id:8, name:"Hoa Lưu Ly", price:300000, img:"../assets/hinh3.jpg"},
];

function addProduct(imgSrc, name, price, linkUrl) {
  const container = document.getElementById("product-list");

  const myDiv = document.createElement("div");
  myDiv.setAttribute("class", "product-item");

  const myDiv1 = document.createElement("div");
  myDiv1.setAttribute("class", "product-image");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", imgSrc);
  productImg.setAttribute("alt", name);

  myDiv1.appendChild(productImg);
  myDiv.appendChild(myDiv1);

  const myDiv2 = document.createElement("div");
  myDiv2.setAttribute("class", "product-info");

  const myP1 = document.createElement("p");
  myP1.textContent = name;

  const myP2 = document.createElement("p");
  myP2.textContent = price + " VND";

  const myLink = document.createElement("a");
  myLink.setAttribute("href", linkUrl || "#");
  myLink.textContent = "Xem chi tiết";

  myDiv2.appendChild(myP1);
  myDiv2.appendChild(myP2);
  myDiv2.appendChild(myLink);

  myDiv.appendChild(myDiv2);
  container.appendChild(myDiv);
}

function loadAllProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  for (let i = 0; i < productDatabase.length; i++) {
    addProduct(
      productDatabase[i].img,
      productDatabase[i].name,
      productDatabase[i].price,
      "#"
    );
  }
}


// Thêm vào cuối lib.js
document.addEventListener("DOMContentLoaded", function() {
  loadAllProducts();
});