var element = document.getElementById("container");
createResizeEvent(element);
element.addEventListener("resize", function(){
    console.log("resized");
});