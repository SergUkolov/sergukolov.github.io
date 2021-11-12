document.addEventListener('DOMContentLoaded', function() {

let btn = document.querySelector('#scrolltotop')

function magic() {
  if (window.pageYOffset > 40) {
    btn.style.display = 'block'
  } else { btn.style.display = 'none' }
}


btn.onclick = function () {
	window.scrollTo(0,0)
}


window.onscroll = magic;

})

