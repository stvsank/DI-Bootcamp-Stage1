//1
	function verifNombre(nombre) {
		type = Number(nombre);
		if (!type) {
			console.log("Désolé, pas un numéro");
			return false;
		}else {
			return true;
		}
	}

	function entrezNombre() {
		do {
			nombre = prompt("Entrez un nombre de bouteille pour commencer","99");
		} while (!verifNombre(nombre))
		return nombre;
	}

//2
	function chant() {
		nombre=entrezNombre();
		console.log("We start the song at",nombre,"bottles")
		nombre= nombre-1;
		console.log("-> Take _1_ down, pass it around");
		console.log("-> we have now" , nombre , "bottles");
		for ( let i = 2; i < nombre; i++) {
			console.log("-> Take _" + i + "_ down, pass them around");
			console.log("-> we have now" , nombre-i , "bottles");
			nombre = nombre-i;
		}
		console.log("-> Take _" + nombre + "_ down, pass them around");
		console.log("-> we have now 0 bottle");
	}

	chant();