const data = null;
const foto = document.getElementById("foto")

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

/*xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		let resultado = JSON.parse(this.response)
		console.log(this.response);
	    document.getElementById("%").value = resultado.percentage

		if(resultado.percentage>50 && resultado.percentage<=75){
			foto.src = "https://media.tenor.com/GBdIH5sL4XQAAAAM/the-rock-rock.gif"
			document.body.style.backgroundImage = "url('https://media.makeameme.org/created/si-se-puede-c93581e149.jpg')"
		}else if(resultado.percentage>=25 && resultado.percentage<=50){
		    foto.src = "https://media.makeameme.org/created/si-se-puede-c93581e149.jpg"
			document.body.style.backgroundImage = "url('https://cdn.memegenerator.es/imagenes/memes/full/28/26/28265529.jpg')"
		}else if(resultado.percentage<25){
			foto.src = "https://img.chilango.com/2018/02/memes-14-de-febrero.jpg"
			document.body.style.backgroundImage = "url('https://ih1.redbubble.net/image.4976389687.0688/flat,750x,075,f-pad,750x1000,f8f8f8.jpg')"
		}else if(resultado.percentage>=75)
			foto.src = "https://memegenerator.net/img/instances/45200666.jpg"
			document.body.style.backgroundImage = "url('https://ih1.redbubble.net/image.4259295007.0124/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg')"
		}
});*/

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {  // Usamos 4 en vez de this.DONE
        let resultado = JSON.parse(this.response);
        console.log(this.response);
        document.getElementById("%").value = resultado.percentage;

        if (resultado.percentage > 50 && resultado.percentage <= 75) {
            foto.src = "https://media.tenor.com/GBdIH5sL4XQAAAAM/the-rock-rock.gif";
            document.body.style.backgroundImage = "url('https://media.makeameme.org/created/si-se-puede-c93581e149.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "auto";
            document.body.style.backgroundPosition = "center";    
        } else if (resultado.percentage >= 25 && resultado.percentage <= 50) {
            foto.src = "https://media.makeameme.org/created/si-se-puede-c93581e149.jpg";
            document.body.style.backgroundImage = "url('https://cdn.memegenerator.es/imagenes/memes/full/28/26/28265529.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "auto";
            document.body.style.backgroundPosition = "center";
        } else if (resultado.percentage < 25) {
            foto.src = "https://img.chilango.com/2018/02/memes-14-de-febrero.jpg";
            document.body.style.backgroundImage = "url('https://ih1.redbubble.net/image.4976389687.0688/flat,750x,075,f-pad,750x1000,f8f8f8.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "auto";
            document.body.style.backgroundPosition = "center";
        } else if (resultado.percentage >= 75) {
            foto.src = "https://memegenerator.net/img/instances/45200666.jpg";
            document.body.style.backgroundImage = "url('https://ih1.redbubble.net/image.4259295007.0124/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "auto";
            document.body.style.backgroundPosition = "center";
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
