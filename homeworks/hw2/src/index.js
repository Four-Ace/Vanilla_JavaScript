const firstClassName = "first";
const secondClassName = "second";
let flag = 0;

console.log(window.innerWidth);

window.addEventListener("resize", handleWindowWidthEvent);

if (window.innerWidth < 600) {
  document.body.className = "";
} else if (600 <= window.innerWidth && window.innerWidth < 900) {
  document.body.className = secondClassName;
} else {
  document.body.className = firstClassName;
}

function handleWindowWidthEvent() {
  const target = document.body.classList;
  if (flag !== 1 && window.innerWidth < 600) {
    flag = 1;
    if (target.contains(secondClassName)) {
      target.remove(secondClassName);
    }
    monitoring(target);
  } else if (
    flag !== 2 &&
    600 <= window.innerWidth &&
    window.innerWidth < 900
  ) {
    flag = 2;
    if (target.contains(firstClassName)) {
      target.remove(firstClassName);
    }
    target.add(secondClassName);
    monitoring(target);
  } else if (flag !== 3 && window.innerWidth > 900) {
    flag = 3;
    target.remove(secondClassName);
    target.add(firstClassName);
    monitoring(target);
  }
}

function monitoring(target_) {
  console.log(flag);
  console.log(target_.value);
}
