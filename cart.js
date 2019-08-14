var sizes = [0, 0, 0] // [S, M, L]
var size_name = ['S', 'M', 'L'];

function addToCart() {
	var cartHTML; //html code that replced to minicart 
	var miniCart = document.GetElementByID("miniCart");
	var item_sum = 0;

	for (i=0; i< sizes.length; i++) {
		item_sum += sizes[i];
		if(sizes[i] > 0) {
			var s =sizes[i].toString();
			var s_name = size_name[i];
			console.log(s);
			console.log(s_name);
		}
	}
}

function selectSize() {
	var element = document.getElementsByName("size");


}

