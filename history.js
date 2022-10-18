const greenBtn = document.querySelector("#greenBtn");
const redBtn = document.querySelector("#redBtn");
const blueBtn = document.querySelector("#blueBtn");

greenBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
    history.pushState({"colour":"green"}, "Green page", "green.html");
})

redBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
    history.pushState({"colour":"red"}, "Red page", "red.html");
})

blueBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
    history.pushState({"colour":"blue"}, "Blue page", "blue.html");
})

window.addEventListener('popstate', function(evnt) {
	console.log(evnt);
	document.body.style.backgroundColor=(evnt.state.colour);
});
