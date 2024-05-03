let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (value) {
  gsap.to(cursor, {
    x: value.x,
    y: value.y,
    duration: 0.5,
    // ease:"back.out"
  });
});

imageDiv.addEventListener("mouseenter", function (params) {
  cursor.innerHTML = "Rock";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff4a",
  });
});

imageDiv.addEventListener("mouseleave", function (params) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "",
  });
});
