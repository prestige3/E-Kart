let startbtn= document.querySelectorAll("button");//list of all buttons in html
for(var button of startbtn){
	button.addEventListener("click",addtocart);
}
function addtocart(event){
	console.log(event);
	var btID= event.target.id;
	var func = collectdata(btID);//returning map
	storage(func);
}




function collectdata(id){
	var img1 =document.getElementById('img'+ id).getAttribute('src');
	var amnt1 =document.getElementById('A'+ id).innerHTML;
	var desp1 =document.getElementById('D'+ id).innerHTML;
	console.log(img1);
  

  let map1={image:img1, Amount:amnt1, Description:desp1}

  console.log(map1);
 return map1;
}
function storage(map1){
	var nolist=[];
   var book= localStorage.getItem('booklist');//returns JSON obj.
   if(book === null){
      nolist.push(map1);
   }else{
     nolist = JSON.parse(book);//converts JSON obj to list
     nolist.push(map1);
   }
   localStorage.setItem('booklist',JSON.stringify(nolist));
}
function displaycartitems(){
	var displayed= localStorage.getItem('booklist');//JSON obj.
	var list= JSON.parse(displayed);//converts JSON obj to list
	var icon = document.getElementById("icon");
	if(list === null){
		icon.innerHTML = "CART IS EMPTY!"
	}else{
     icon.innerHTML = "";
	for(counter =0; counter < list.length; counter++){
		var map1 = list[counter];
		var desp = map1.Description;
		var amnt = map1.Amount;
		var img = map1.image;
		console.log(img);
        icon.innerHTML += '<h3>'+ desp + amnt +'</h3> <img src="'+img+'"/>';  
	}
  }
}