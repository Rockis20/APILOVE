const data = null;
const foto = document.getElementById("img")

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		let resultado = JSON.parse(this.response)
		console.log(this.response);
	    document.getElementById("%").value = resultado.percentage

		if(resultado.percentage>=50){
			foto.src = "https://cdn.memegenerator.es/descargar/4241362"
		}else{
		    foto.src = "https://img.chilango.com/2018/02/memes-14-de-febrero.jpg"
		}
	}
});

document.getElementById("buto").addEventListener("click", function(){
	let nom1 = document.getElementById("nom1").value
	let nom2 = document.getElementById("nom2").value

	xhr.open('GET', 'https://love-calculator.p.rapidapi.com/getPercentage?sname='+nom1+'&fname='+nom2);
    xhr.setRequestHeader('X-RapidAPI-Key', '8d5886dc28mshcb8cb4af2de6751p1d614bjsnc8828f0f22b3');
    xhr.setRequestHeader('X-RapidAPI-Host', 'love-calculator.p.rapidapi.com');
    xhr.send();
})
