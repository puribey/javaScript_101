var btn = document.getElementById('theme');
console.log(btn);


btn.addEventListener('click',function(){
	//var body = document.getElementsByTagName("BODY")[0];
	document.body.classList.toggle('theme2');
});