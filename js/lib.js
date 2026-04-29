const products = [
  { ten: "Hoa hồng", gia: "180,000", link: "../assets/hoa hồng.webp" },
  { ten: "Hoa cúc ", gia: "150,000", link: "../assets/nen1.jpg" },
  { ten: "Hoa tulip", gia: "300,000", link: "../assets/dang.jpg" }
];

function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach((sp, index) => {
    const row = document.createElement("tr");
    row.style.animation = `fadeIn 0.3s ease ${index * 0.05}s both`;

    const tdStt = document.createElement("td");
    tdStt.textContent = index + 1;

    const tdTen = document.createElement("td");
    tdTen.textContent = sp.ten;

    const tdGia = document.createElement("td");
    tdGia.textContent = sp.gia + " đ";
    tdGia.className = "price";

    const tdLink = document.createElement("td");
    const a = document.createElement("a");
    a.href = sp.link;
    a.textContent = "Xem chi tiết";
    a.className = "detail-link";
    tdLink.appendChild(a);

    row.appendChild(tdStt);
    row.appendChild(tdTen);
    row.appendChild(tdGia);
    row.appendChild(tdLink);

    container.appendChild(row);
  });
}

function addProduct(ten, gia, link) {
  products.push({ ten, gia, link: link || "#" });
  renderProducts();
}

function openModal() {
  document.getElementById("modal").classList.add("show");
  document.getElementById("inp-ten").focus();
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
  document.getElementById("inp-ten").value = "";
  document.getElementById("inp-gia").value = "";
  document.getElementById("inp-link").value = "";
}

function handleAdd() {
  const ten  = document.getElementById("inp-ten").value.trim();
  const gia  = document.getElementById("inp-gia").value.trim();
  const link = document.getElementById("inp-link").value.trim();

  if (!ten || !gia) {
    alert("Vui lòng nhập tên và giá sản phẩm!");
    return;
  }

  addProduct(ten, gia, link);
  closeModal();
}

window.onload = renderProducts;