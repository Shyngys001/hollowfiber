let check = false;
function displayWindow() {
  check = !check;
  if (check) {
    document.getElementById("arch--burger-content").style.display = "flex";
  } else {
    document.getElementById("arch--burger-content").style.display = "none";
  }
}

function closeWindow() {
  document.getElementById("arch--burger-content").style.display = "none";
  check = !check
}



const water = document.getElementById('s_water');
const s_image = document.getElementById('s_image');

function show_water(){
    water.style.width = "100%";
    water.style.visibility = "visible";
    water.classList.add('rotate');
}

s_image.addEventListener('mouseover', show_water);
s_image.addEventListener('mouseout', () => {
    water.classList.remove('rotate');
    water.style.visibility = "hidden";
});


// monti




var button1 = document.getElementById("song-1");
var button2 = document.getElementById("song-2");
var button3 = document.getElementById("song-3");
var text = document.getElementById("m-main-text-p");

button1.addEventListener("click", function() {
  text.textContent = "As the hikers trekked through the dense forest, a symphony of chirping birds and rustling leaves accompanied their every step, creating a harmonious melody of nature. The scent of damp earth filled the air, mingling with the sweet fragrance of wildflower";
  console.log('first change');
});
button2.addEventListener("click", function() {
  text.textContent = "Old bookstore was a treasure trove of literary wonders, its shelves lined with weathered books that whispered stories of bygone eras. The scent of aged pages filled the air, enticing visitors to explore the endless worlds contained within those time-worn covers.";
  console.log('second change');
});
button3.addEventListener("click", function() {
  text.textContent = "Crisp autumn breeze danced through the colorful foliage, painting the landscape in hues of gold, crimson, and amber. The sound of crunching leaves underfoot added a rhythmic melody to the serene atmosphere, as nature embraced the changing season with a graceful flourish.";
  console.log('thrdh change');
});