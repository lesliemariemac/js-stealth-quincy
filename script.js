var button = document.querySelector(".show-cat");
console.log(button);

var cat = document.querySelector(".cat");
console.log(cat);

button.addEventListener("click", function () {
    //button.innerText = "It's working";
    //cat.classList = ".show-cat";
    if (cat.classList.contains("show")) {
    //console.log("yes"); 
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
    } else {
      cat.classList.add("show"); 
      //console.log ("no");
      button.innerText = "Shoo, cat!!";
      button.classList.remove("disappear");
      
      
}
});
