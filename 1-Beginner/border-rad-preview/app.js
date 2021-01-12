
let morphs = document.querySelectorAll('.square');
let slider = document.getElementById('slider');
let output = document.getElementById('slider-value');

slider.addEventListener('change', function() {
	changeValue();
});

function changeValue(e) {
	for(var i=0; i<morphs.length; i++) {
	  morphs[i].style.borderRadius = slider.value + "%";
	  morphs[i].style.transform = `translateX(-${slider.value + '%'})`;
	}
	output.value = slider.value;
}