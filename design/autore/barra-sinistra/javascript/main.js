var triangle = document.getElementsByClassName("equilateralTriangle");
for (let i in triangle) {
    triangle[i].addEventListener("click", rotate);
}

function rotate() {
    this.style.transform = "rotate(180deg)";
}