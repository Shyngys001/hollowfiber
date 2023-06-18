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