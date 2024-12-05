const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;


xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		let resultado = JSON.parse(this.response)
		console.log(this.response);
	}
	document.getElementById("nom1").value = resultado.fname
	document.getElementById("nom2").value = resultado.fname
	document.getElementById("%").value = resultado.percentatge
});


xhr.open('GET', 'https://love-calculator.p.rapidapi.com/getPercentage?sname='+nom1+'&fname='+nom2');
xhr.setRequestHeader('X-RapidAPI-Key', '8d5886dc28mshcb8cb4af2de6751p1d614bjsnc8828f0f22b3');
xhr.setRequestHeader('X-RapidAPI-Host', 'love-calculator.p.rapidapi.com');

xhr.send();
