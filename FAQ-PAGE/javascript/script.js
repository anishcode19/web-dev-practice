// const btns = document.querySelectorAll(".question-btn");
// // console.log(btns);
//
// btns.forEach(function(btn){
//   btn.addEventListener("click", function(event){
//     // console.log(event.currentTarget);
//     // console.log(event.currentTarget.parentElement.parentElement);
//     const question = event.currentTarget.parentElement.parentElement;
//     // if(question.classList.contains("show-text")){
//     //   question.classList.remove("show-text");
//     // }else{
//     //   question.classList.add("show-text");
//     // }
//
//     question.classList.toggle("show-text");
//   });
// });


const questions = document.querySelectorAll(".question");

questions.forEach(function(e){
  const btn = e.querySelector(".question-btn");
  // console.log(btn);
  btn.addEventListener("click",function(){
    questions.forEach(function(item){
      if(item !== e){
        item.classList.remove("show-text");
      }
    });

    e.classList.toggle("show-text");
  });
});
