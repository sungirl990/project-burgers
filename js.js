var acc = document.getElementsByClassName("member__name");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    this.classList.toggle("active");


    var member__content = this.nextElementSibling;
    if (member__content.style.display === "flex") {
        member__content.style.display = "none";
    } else {
        member__content.style.display = "flex";
    }
  });
}

