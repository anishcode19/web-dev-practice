function searchFun(){
  let filter =document.getElementById("myInput").value.toUpperCase();
  let myTable=document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");
  let th = myTable.getElementsByTagName("th");
  for(var i=0;i<tr.length;i++){
    // for(var j=0;j<th.length;j++){
    let td=tr[i].getElementsByTagName("td")[1];
    if(td){
      let textvalue=td.textContent || td.innerHTML;
      if(textvalue.toUpperCase().indexOf(filter)>-1){
        tr[i].style.display="";
      }else {
        tr[i].style.display="none";
        }
      // }
    }
  }
}
