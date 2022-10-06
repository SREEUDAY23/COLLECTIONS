const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Outfit",
    colors: [
      {
        code: "red",
        img: "./img/1.png",
      },
      {
        code: "darkblue",
        img: "./img/1.png",
      },
    ],
  },
  {
    id: 2,
    title: "LOOK1",
    colors: [
      {
        code: "lightgray",
        img: "./img/2.png",
      },
      {
        code: "green",
        img: "./img/2.png",
      },
    ],
  },
  {
    id: 3,
    title: "LOOK2",
    colors: [
      {
        code: "yellow",
        img: "./img/1.png",
      },
      {
        code: "red",
        img: "./img/1.png",
      },
    ],
  },
  {
    id: 4,
    title: "LOOK3",
    colors: [
      {
        code: "orange",
        img: "./img/2.png",
      },
      {
        code: "purple",
        img: "./img/2.png",
      },
    ],
  },
  {
    id: 5,
    title: "LOOK4",
    colors: [
      {
        code: "aqua",
        img: "./img/1.png",
      },
      {
        code: "darkred",
        img: "./img/1.png",
      },
    ],
  },
  
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductImg.src = choosenProduct.colors[0].img;
    
  });
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


