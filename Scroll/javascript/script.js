// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

document.querySelector("#date").innerHTML = new Date().getFullYear();
8
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer =document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
  // linksContainer.classList.toggle("show-links");

  //  or

  const linksHeight = links.getBoundingClientRect().height;
  // console.log(linksHeight);
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if(containerHeight==0){
    linksContainer.style.height=`${linksHeight}px`;
    navToggle.style.transform= `rotate(-90deg)`;
  }else {
    linksContainer.style.height= 0;
    navToggle.style.transform= `rotate(0deg)`;
  }
});

// ********** fixed navbar ************
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  // console.log(scrollHeight);
  const navBarHeight = navBar.getBoundingClientRect().height;
  // console.log(navBarHeight);
  if (scrollHeight > navBarHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }

  // top link property

  if(scrollHeight> 100){
    topLink.classList.add("show-link");
  }else{
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
  link.addEventListener("click",function(e){
    e.preventDefault();


    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // console.log(element);
    // position of the element

    const navHeight=navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight);
    const fixedNav = navBar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if(!fixedNav){
      position= position-navHeight;
    }

    if(navHeight > 82){
      position=position + containerHeight;
    }

    window.scrollTo({
      left:0,
      top:position,
    });
    linksContainer.style.height = 0;
    navToggle.style.transform= `rotate(0deg)`;
  })
});































// select links
