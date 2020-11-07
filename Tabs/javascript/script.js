const about = document.querySelector(".about");
const btns  = document.querySelectorAll(".tab-btn");

const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
  // console.log(e.target);
  const id = e.target.dataset.id;
  if(id){
    // remove active from  each btn
    btns.forEach(function(btn){
    btn.classList.remove("active");
    });
    e.target.classList.add("active");

    articles.forEach(function(article){
      article.classList.remove("active");
    })
    const ele = document.getElementById(id);
    ele.classList.add("active");
  }

})
