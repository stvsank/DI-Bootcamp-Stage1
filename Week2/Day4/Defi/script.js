//1
	let mots = prompt("Entrez plusieurs mots séparés par des virgules");
//2//3//4
	mots = mots.split(",");
	let longEtoile = 0;
	let etoile = "*";
	for (let x of mots)
		if (longEtoile < x.length) 
			longEtoile = x.length;
	for (var i = longEtoile + 4; i > 1; i--) 
		etoile = etoile + "*";
	console.log(etoile);
	for (let x of mots) {
		let mot = "* " + x;
		for (i=mot.length; i < longEtoile+3; i++)
			mot = mot + " ";
		console.log(mot + "*");
	}
	console.log(etoile);
