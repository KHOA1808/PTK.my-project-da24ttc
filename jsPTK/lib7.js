const productList = [

    {
        id: "01",
        name: "Hạt giống hoa hồng Pháp",
        price: 230,
        image: "../assetsPTK/imagesPTK/rose2.jpg",
        productLink: "product-detail.html?id=01",
        desc: "ff"
    },

    {
        id: "02",
        name: "Hoa hướng dương",
        price: 210,
        image: "../assetsPTK/imagesPTK/huong-duong.jpg",
        productLink: "product-detail.html?id=02",
        desc: "lq"
    },

    {
        id: "03",
        name: "Hoa tulip",
        price: 240,
        image: "../assetsPTK/imagesPTK/hoa-tulip.png",
        productLink: "product-detail.html?id=03",
        desc: "delta force"
    },

    {
        id: "04",
        name: "Hoa sen",
        price: 250,
        image: "../assetsPTK/imagesPTK/hoa-sen.png",
        productLink: "product-detail.html?id=04",
        desc: "block blast"
    },

    {
        id: "05",
        name: "Hoa mai",
        price: 260,
        image: "../assetsPTK/imagesPTK/hoa-mai.jpg",
        productLink: "product-detail.html?id=05",
        desc: "chat gpt"
    },

    {
        id: "06",
        name: "Hoa ly",
        price: 270,
        image: "../assetsPTK/imagesPTK/hoa-ly.jpg",
        productLink: "product-detail.html?id=06",
        desc: "claude"
    },

    {
        id: "07",
        name: "Hoa lavender",
        price: 280,
        image: "../assetsPTK/imagesPTK/hoa-lavender.jpg",
        productLink: "product-detail.html?id=07",
        desc: "gemini"
    },

    {
        id: "08",
        name: "Hoa lan",
        price: 290,
        image: "../assetsPTK/imagesPTK/hoa-lan.jpg",
        productLink: "product-detail.html?id=08",
        desc: "deepseek"
    },

    {
        id: "09",
        name: "Hoa đào",
        price: 300,
        image: "../assetsPTK/imagesPTK/hoa-dao.jpg",
        productLink: "product-detail.html?id=09",
        desc: "PTK"
    },

    {
        id: "10",
        name: "Hoa cúc",
        price: 310,
        image: "../assetsPTK/imagesPTK/hoa-cuc.jpg",
        productLink: "product-detail.html?id=10",
        desc: "PTC"
    }

];

function loadProduct(products)
{
    for (let i = 0; i < products.length; i++)
    {
        addProduct_v2(products[i]);
    }
}

function addProduct_v2(product)
{
    // Tạo div chứa sản phẩm
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col mb-4");

    // Khung ảnh
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image");

    // Tạo ảnh
    const myImage = document.createElement("img");

    myImage.setAttribute("src", product.image);
    myImage.setAttribute("alt", product.name);

    myImage.setAttribute(
        "class",
        "img-fluid w-100 rounded-top"
    );

    myImage.style.height = "250px";
    myImage.style.objectFit = "cover";

    // Gắn ảnh vào khung ảnh
    productImage.appendChild(myImage);

    // Khung thông tin
    const productInfo = document.createElement("div");

    productInfo.setAttribute(
        "class",
        "product-info text-center border p-3 rounded-bottom"
    );

    // Tên sản phẩm
    const productName = document.createElement("p");

    const productNameText =
        document.createTextNode(product.name);

    productName.appendChild(productNameText);

    productName.setAttribute(
        "class",
        "fw-bold"
    );
    productInfo.appendChild(productName);
// Giá sản phẩm
    const productPrice = document.createElement("p");

    const productPriceText =
        document.createTextNode(product.price + "k/túi");

    productPrice.setAttribute(
        "class",
        "text-danger fw-bold"
    );

    productPrice.appendChild(productPriceText);

    productInfo.appendChild(productPrice);

    // Link chi tiết
    const productLink = document.createElement("a");

    const productLinkText =
        document.createTextNode("Xem chi tiết");

    productLink.setAttribute(
        "href",
        product.productLink
    );

    productLink.setAttribute(
        "class",
        "btn btn-primary"
    );

    productLink.appendChild(productLinkText);

    productInfo.appendChild(productLink);

    // Gắn image + info vào product item
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    // Hiển thị ra product-list
    document.getElementById("product-list")
        .appendChild(productItem);
}