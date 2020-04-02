const images = []
const $gallery = document.getElementById('gallery')

for (var i = 1; i < 21; i++) {
  images.push(`<div class="image_container">`)
  images.push(`<img class="gallery_image img-hover" id="gallery_image"src="img/img${i}.jpg" alt="Just some furr babies" onclick="onClick(this)" title="Click on doggo to enlarge the image">`)
  images.push(`</div>`)
}

$gallery.innerHTML = images.join('')

// Help from W3SCHOOLS Link---> https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("img-big").style.display = "block";
}