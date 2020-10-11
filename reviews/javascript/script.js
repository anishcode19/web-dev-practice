// local reviews data
const reviews = [
  {
    id: 1,
    name: "XXXXXX",
    job: "web developer",
    img:
      "img/img-28.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "XYXYXY",
    job: "web designer",
    img:
      "img/img-27.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "img/img-17.jpeg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "img/img-5.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items

const img =document.getElementById("person-img");
const author =document.getElementById("author");
const job =document.getElementById("job");
const info =document.getElementById("info");

const prevBtn=document.querySelector(".prev-Btn");
const nextBtn=document.querySelector(".next-Btn");
const randomBtn=document.querySelector(".random-Btn");

// set starting items

let currentItem = 0;

// load initial items
window.addEventListener("DOMContentLoaded",function(){
  const item
})
