const menu = [
  {
    id: 1,
    title : "sea hamptons ",
    surname: "Beach",
    category: "beach",
    budget: 100,
    img: "img/beach-1.jpg",
    desc: `It is a village district, census-designated place, and beach resort in the town of Hampton, New Hampshire, United States, along the Atlantic Ocean. Its population at the 2010 census was 2,275.Hampton Beach is in Rockingham County, about 15 miles (24 km) south of Portsmouth.`,
  },

  {
    id: 2,
    title : "salt creek ",
    surname: "Beach",
    category: "beach",
    budget: 1000,
    img: "img/beach-2.jpg",
    desc: `It is a beach park located in Dana Point, California, in the county of Orange. A popular destination for South Orange County residents, it features amenities such as a halfcourt basketball court, beach volleyball, and a seven-acre grassy Bluff Park, and offers opportunities for surfing, swimming, and fishing.`,
  },
  {
    id: 3,
    title : "Pearl ",
    surname: "Beach",
    category: "beach",
    budget: 500,
    img: "img/beach-3.jpg",
    desc: `Pearl Beach is a suburb of Central Coast Council on the Central Coast of New South Wales, Australia. Pearl Beach was assigned 'suburb' status by the Geographical Names Board of NSW on 25 October 1991.`,
  },
  {
    id: 4,
    title : "Forest ",
    surname: "Road",
    category: "special",
    budget: 0,
    img: "img/forest-road-1.jpg",
    desc: `Being alone does not necessarily mean that you should be lonely. Being alone gives you the chance to discover yourself. It allows you to learn things about yourself and know yourself better.`,
  },

  {
    id: 5,
    title : "Forest ",
    surname: "Track",
    category: "special",
    budget: 0,
    img: "img/forest-road-2.jpg",
    desc: `Don't aim for success if you want it; just do what you love and believe in, and it will come naturally. Never stop fighting until you arrive at your destined place - that is, the unique you.`,
  },

  {
    id: 6,
    title : "Taj ",
    surname: "Mahal",
    category: "monument",
    budget: 300,
    img: "img/monument-1.jpg",
    desc: `The Taj Mahal 'Crown of the Palace', is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.`,
  },
  {
    id: 7,
    title : "Eiffel ",
    surname: "Tower",
    category: "monument",
    budget: 3000,
    img: "img/monument-3.jpg",
    desc: `The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.`,
  },
  {
    id: 8,
    title : "Lotus ",
    surname: "Temple",
    category: "monument",
    budget: 300,
    img: "img/monument-4.jpg",
    desc: `The Lotus Temple, located in Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city. regardless of religion or any other qualification.`,
  },
  {
    id: 9,
    title : "Mount ",
    surname: "Everest",
    category: "mountain",
    budget: 9000,
    img: "img/mountain-1.jpg",
    desc: `Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point.`,
  },
  {
    id: 10,
    title : "The Great ",
    surname: "Himalayan",
    category: "mountain",
    budget: 0,
    img: "img/mountain-2.jpg",
    desc: `The Indian Himalayan Region is the section of the Himalayas within India, spanning 11 Indian states and union territories namely Jammu and Kashmir, Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, Meghalaya, Assam and West Bengal.`,
  },

  {
    id: 11,
    title : "sendang gile",
    surname: "Waterfall",
    category: "waterfall",
    budget: 1100,
    img: "img/waterfall-1.jpg",
    desc: `Tucked away in the village of Senaru in the island's northern Lombok Utara regency are two of Lombok's finest and most popular cascades, Sendang Gile, located on the foot of the majestic Mount Rinjani. The village is located about a 2 ½ hour drive from Mataram.`,
  },
  {
    id: 12,
    title : "chedoke",
    surname: "Waterfall",
    category: "waterfall",
    budget: 1000,
    img: "img/waterfall-2.jpg",
    desc: `Chedoke Falls is 15.5 metre urban ribbon waterfall found atop the Niagara Escarpment in Hamilton, Ontario, Canada. The watercourse is the Chedoke Creek, an urban creek that runs through the west end of Hamilton and crosses the Bruce Trail and the Radial Trail.`,
  },

]



const sectionCenter =document.querySelector(".section-center");
const container= document.querySelector(".btn-Container");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded",function(){
  displayMenuItems(menu);
  displayMenuButtons();
})


function displayMenuItems(menuItem){
  let displayMenu =menuItem.map(function(item){

    return `<div class="menu-item">
      <img src=${item.img} alt=${item.title} class="img">

      <div class="details">
        <h3>${item.title} <span> ${item.surname} </span></h3>
        <p>${item.desc}</p>

        <div class="more">
          <a href="#" class="read-more">Read <span>More</span> </a>
          <div class="icon-links">
            <a href="#"><i class="fas fa-heart"></i></a>
            <a href="#"><i class="fas fa-eye"></i></a>
            <a href="#"><i class="fas fa-paperclip"></i></a>
          </div>
        </div>
      </div>
    </div>`
  });
  displayMenu=displayMenu.join("");
  sectionCenter.innerHTML= displayMenu;
}

function displayMenuButtons(){
  const categories = menu.reduce(function(value,item){
    if(!value.includes(item.category)){
      value.push(item.category);
    }
    return value;
  },
  ['all']
);

const categoryBtns = categories.map(function(category){
  return `<button class="filter-btn"type="button"data-id=${category}>${category}</button>`
}).join("");
container.innerHTML =categoryBtns;
const filterBtns=document.querySelectorAll(".filter-btn")
filterBtns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const category=e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
      if(menuItem.category === category){
        return menuItem;
      }
    })
    // console.log(menuCategory);

    if(category==="all"){
      displayMenuItems(menu);
    }else{
      displayMenuItems(menuCategory);
    }
  });
});
}


























// comment
