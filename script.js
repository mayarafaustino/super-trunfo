var cartas = [
	carta0= {
		nome: "Katniss Everdeen",
		imagem: "https://i.pinimg.com/236x/0c/3b/35/0c3b3518ae83020b77c5dd7901d97782.jpg",
		atributos: {
			ataque: 6,
			defesa: 4,
			inteligência: 8,
			emocional: 5,
		}
	},
	carta1 = {
		nome: "Hermione Granger",
		imagem: "https://1.bp.blogspot.com/-c8IaPOhMy9w/WxR8E-cIW9I/AAAAAAAA7tw/0y-zX_nmwgMjZf2NX0GhVChT0UpipCUGQCLcBGAs/s1600/WB_F2_PolyjuicePotion_HermioneMakingPolyjuice_3731.jpg",
		atributos: {
			ataque: 7,
			defesa: 9,
			inteligência: 10,
			emocional: 9,
		}
	},
	carta2 = {
		nome: "Lisbeth Salander",
		imagem: "https://intersectnews.files.wordpress.com/2011/01/lisbeth-salander_rooney5.jpg?w=231&h=320",
		atributos: {
			ataque: 4,
			defesa: 7,
			inteligência: 10,
			emocional: 10,
		}
	},
	carta3 = {
		nome: "Wonder Woman",
		imagem: "https://img.elo7.com.br/product/zoom/2163028/poster-do-filme-mulher-maravilha-50cm-x-70cm-poster.jpg",
		atributos: {
			ataque: 9,
			defesa: 10,
			inteligência: 7,
			emocional: 6,
		}
	},
	carta4 = {
		nome: "Capitã Marvel",
		imagem: "https://static1.purebreak.com.br/articles/9/84/28/9/@/314011--capita-marvel-e-o-filme-ideal-para-mos-diapo-1.jpg",
		atributos: {
			ataque: 10,
			defesa: 9,
			inteligência: 6,
			emocional: 7,
		}
	}
];
var quantidadeDeCartas = cartas.length;
var cartaMaquina;
var cartaJogador;
var botaoSortear = document.getElementById("btnSortear");
var botaoJogar = document.getElementById("btnJogar");
var opcoesAtributos =document.getElementById("opcoes");
var resultado = document.getElementById("resultado");

function sortearCarta() {
	var numAleatorioMaquina = parseInt(Math.random() * quantidadeDeCartas);
	var numAleatorioJogador = parseInt(Math.random() * quantidadeDeCartas);
	while (numAleatorioMaquina == numAleatorioJogador){
		var numAleatorioJogador = parseInt(Math.random() * quantidadeDeCartas);
	}
	cartaMaquina = cartas[numAleatorioMaquina];
	cartaJogador = cartas[numAleatorioJogador];
	console.log(cartaJogador);
	botaoSortear.disabled = true;
	botaoJogar.disabled = false;
	exibirAtributos();
	exibirCartaJogador();
}

function exibirAtributos() {
	var texto = "";
	for (atributo in cartaJogador.atributos) {
		texto += "<div><input type='radio' name='atributo' id='" + atributo + "' value='" + atributo + "'><label for='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "</label></div>"
	}
	opcoesAtributos.innerHTML = texto;
}

function obtemAtributoSelecionado() {
	var radios = document.getElementsByName("atributo");
	for (var i = 0; i < radios.length; i++){
		if (radios[i].checked == true) {
			return radios[i].value;
		}
	}
}

function exibirCartaJogador() {
	var tituloCartaJogador = document.getElementById("nomeCarta");
	tituloCartaJogador.innerHTML = cartaJogador.nome;
	var imgCartaJogador = document.getElementById("imgCarta");
	imgCartaJogador.style = "background-image: url(" + cartaJogador.imagem + ")";
}

function exibirCartaMaquina() {
	var tituloCartaMaquina = document.getElementById("nomeCartaMaquina");
	tituloCartaMaquina.innerHTML = cartaMaquina.nome;
	var imgCartaMaquina = document.getElementById("imgCartaMaquina");
	imgCartaMaquina.style = "background-image: url(" + cartaMaquina.imagem + ")";
	var atributosMaquina = document.getElementById("atributosBoxMaquina");
	atributosMaquina.innerHTML = `<p class="atributo">ataque: ${cartaMaquina.atributos.ataque}</p><p class="atributo">defesa: ${cartaMaquina.atributos.defesa}</p><p class="atributo">inteligência: ${cartaMaquina.atributos.inteligência}</p><p class="atributo">emocional: ${cartaMaquina.atributos.emocional}</p>`;		  							
}

function jogar() {
	var atributoSelecionado = obtemAtributoSelecionado();
	var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
	var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
	if (atributoSelecionado == undefined){
		resultado.innerHTML = "Selecione seu atributo!";
	} else {
		if ( valorCartaJogador > valorCartaMaquina) {
			resultado.innerHTML = "Você Ganhou!";
		} else if (valorCartaJogador == valorCartaMaquina) {
			resultado.innerHTML = "Empate!";
		} else {
			resultado.innerHTML = "Você perdeu";
		}	
	}
	console.log(cartaMaquina);
	exibirCartaMaquina();
}