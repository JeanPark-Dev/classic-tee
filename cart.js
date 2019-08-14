var sizes = [0, 0, 0] // [S, M, L]
var size_name = ['S', 'M', 'L'];

function addToCart() {
	var cartHTML; //html code that replced to minicart 
	var miniCart = document.getElementById("miniCart");
	var item_sum = 0;

	for (i=0; i< sizes.length; i++) {
		item_sum += sizes[i];
		if(sizes[i] > 0) {
			var s =sizes[i].toString();
			var s_name = size_name[i];
			
			console.log(s);
			console.log(s_name);
			// cartHTML += "<div class=\'Item\'>"
			// 	+ "<img class=\"item-img\" src=\"classic-tee.jpg\">"+
			// 	+"<div>"+
			// 	"Classic Tee" + "<br>" +
			// 	s + "x " + "$75.00<br>" +
			// 	"Size: " + s_name+
			// 	"</div><br>"+
			// 	"</div>";
			cartHTML += "<p>"+s + s_name+"</p>"
		}
	}
	// console.log(sizes);
	// console.log(size_name);
	miniCart.innerHTML = cartHTML;
	document.getElementById("sum-item").innerHTML = item_sum.toString();
}

function selectSize() {
	var element = document.getElementsByName("size");

	for (i = 0; i < element.length; i++){
		if(element[i].checked) {
			sizes[i] += 1;
		}
	}
	addToCart();
}

function myCart(){
	var miniCart = document.getElementById("miniCart");
	if (miniCart.style.display === "none") {
		miniCart.style.display = "block";
	} else {
		miniCart.style.display = "none";
	}
}