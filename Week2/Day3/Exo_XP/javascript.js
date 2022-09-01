//Exercice 1 : Liste Des Personne
	let people = ["Greg", "Mary", "Devon", "James"];
	//1
	people.shift();
	//2
	people = people.join(" ");
	people = people.replace("James","Jason");
	people = people.split(" ");
	//3
	people.push("Steve");
	//4
	console.log("L'index de Mary est" , people.indexOf("Mary"));
	//5
	let people1 = people.slice(people.indexOf("Mary"),1);
	//6
	console.log(people.indexOf());
	//il renvoie -1 prcq Foo n'existe pas
	//7
	let last = people[people.length-1];

//Partie II - Boucles
	//1
	for (let x in people) {
		console.log(people[x]);
	}
	//2
	for (let x in people) {
		console.log(people[x]);
		if (people[x] == "Jason")
			break;
	}

//Exercice 2 : Vos Couleurs Préférées
	//1
	let colors = ["white","black","green","blue","grey"];
	//2
	for (let x in colors) {
		let y=Number(x)+1;
		console.log("My # "+ y + " choise is " + colors[x]);
	}
	//3
	let suffixes = ["st","nd","rd","th","th"];
	for (let x in colors) {
		let y=Number(x)+1;
		console.log("My "+ y + suffixes[x] + " choise is " + colors[x]);
	}

//Exercice 3 : Répéter La Question
	//1
	let numero = prompt("Entrez un numéro", "4");
	type = Number(numero);
	if (!type) {
		console.log("C'est une chaine de caractère qui a été saisie");
	} else {
		console.log("C'est un nombre qui a été saisie");
	}
	//2
	while(1) {
		let numero = prompt("Entrez un numéro", "4");
		type = Number(numero);
		if (!type) {
			console.log("C'est une chaine de caractère qui a été saisie, Entrez un nombre");
			break;
		} else {
			if (numero < 10) {
				console.log("Entrez un numéro supérieur à 10 ");
				break;
			}
		}
	}





