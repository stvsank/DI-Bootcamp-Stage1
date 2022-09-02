//Une boucle
	let affiche = "* ";
	for(let i = 0; i < 6; i++) {
		console.log(affiche);
		affiche += "* ";
	}
//Deux boucle
	let affiche = "* ";
	for(let i = 0; i < 4; i++) {
		for(let j = 0; j < i; j++) {
			console.log(affiche);
			affiche += "* ";
		}
	}