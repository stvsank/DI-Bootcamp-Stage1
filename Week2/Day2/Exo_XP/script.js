//Exercice 1 : Instruction If/Else Simple
	//1
	let x = 5;
	let y = 8;
	//2
	if (x > y) {
		console.log("x est le plus grand");
	} else {
		console.log("y est le plus grand");
	}

// Exercice 2 : Chihuahua
	//1
	let newDog = "Chihuahua";
	//2
	console.log("La longueur est :" , newDog.length);
	//3
	console.log(newDog.toUpperCase());
	console.log(newDog.toLowerCase());
	//4
	if (newDog == "Chihuahua") {
		console.log("J'adore les chihuahuas, c'est ma race de chien préférée")
	} else {
		console.log("Je m'en fous, je préfère les chats");
	}

// Exercice 3 : Pair Ou Impair
	//1
	let nombre = Number(prompt("Entrez un nombre"));
	//2
	if (nombre % 2 == 0) {
		console.log(nombre + " est un nombre pair");
	} else {
		console.log(nombre + " est un nombre impair");		
	}
// Exercice 4 : Discussion De Groupe
	let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
	//1
	console.log("Le nombre d'utilisateur connecté est : " , users.length);
	//
	if (users.length == 0) {
		console.log("Le tableau des d'utilisateur est vide")
	} else if (users.length == 1) {
		console.log(users[0] , " est en ligne");
	} else if (users.length == 2) {
		console.log(users[0], " et " , users[1] , " sont en ligne");
	} else {
				console.log(users[0] + ", " + users[1] + " et" , users.length-2 , "de plus sont en ligne");
	} 