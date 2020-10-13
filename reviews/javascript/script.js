// local reviews data
const reviews = [
  {
    id: 1,
    name: "Anamika Roy",
    job: "Blog Writer",
    img:
      "img/img-29.jpeg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repellendus ipsum officiis perspiciatis suscipit odio deleniti ipsa, in tempora laudantium!",
  },
  {
    id: 2,
    name: "XXXXXX",
    job: "web developer",
    img:
      "img/img-26.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "XYXYXY",
    job: "web designer",
    img:
      "img/img-18.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "peter jones",
    job: "intern",
    img:
      "img/img-17.jpeg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 5,
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

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

// set starting items

let currentItem = 0;

// load  item

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});


// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person btn
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person btn
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//  randomBtn code

randomBtn.addEventListener('click',function(){
  currentItem=Math.floor(Math.random()*reviews.length);
  showPerson(currentItem);
})
