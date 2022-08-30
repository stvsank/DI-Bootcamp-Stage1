//Exercice 1 : Différence D'âge
	//Étant donné les années de naissance de deux personnes, 
	//trouvez la date à laquelle la plus jeune a exactement 
	//la moitié de l'âge de la plus âgée. 
	//Notes : Les dates sont données au format AAAA 
	Date1 = Number(prompt("Entrez l'année de naissance de la première personne", "1999"));
	Date2 = Number(prompt("Entrez l'année de naissance de la deuxième personne", "2009"));
	age1 = 2022 - Date1;
	age2 = 2022 - Date2;
	//soit x etant l'age de la personne la plus jeune et soit y etant l'âge de la personne la plus vielle
	if (age1 != age2 ) {
		if (age1 < age2) {
			x = age1;
			y = age2; 
		} else if (age1 > age2){
			x = age2;
			y = age1;
		}
		//Si x < y/2 alors cette date n'est pas encore arrivé 
		if ( x < y/2) {
			//nous pouvons poser la formule suivante :
			// x + k = (y+k)/2 , avec k étant le nombre d'année à ajouter pour arriver à la date voulue
			// k = y-2x
			let k = y - 2*x;
			console.log("Cette date est :",2022+k);
		} else if (x > y/2) {//Si x > y/2 alors cette date n'est pas encore arrivé 
			//nous pouvons poser la formule suivante :
			// x - k = (y-k)/2 , avec k étant le nombre d'année à ajouter pour arriver à la date voulue
			// k = 2x-y
			let k = 2*x - y;
			console.log("Cette date est :",2022-k);
		} else {
			console.log("Cette date est : 2022");
		}
	} else {
		console.log("Vous avez entrez deux dates identiques");
	}

//Exercice 2 : Codes Postaux
	//1ère partie
	let code = prompt("Quel est votre code postal?","xxxxx");
	let codeNumb =Number(code);
	if (code.length == 5 &&  codeNumb) {
		console.log("Succès");
	} else {
		console.log("Error");
	}
	//2ieme partie





