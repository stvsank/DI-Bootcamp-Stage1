//Exercice 1 : Nombre Aléatoire
	//1
	let nombre = Math.random()*2;
	min = Math.ceil(1);
	max = Math.floor(101);
	nombre = Math.floor(Math.random()* (max - min)) + min;
	console.log(nombre);
	//2
	let pair= "";
	for ( let i = 1; i <= nombre; i++) 
		if (i%2 == 0 && i < nombre) 
			pair += i + " ";	
	console.log(pair);

//Exercice 2 : Lettres Majuscules
	function capitalize(mot) {
		let motP = "";
		let motI = "";
		for ( let i = 0; i < mot.length; i++)
			if (i%2 == 0)
				motP += mot[i].toUpperCase();
			else
				motP += mot[i];
		for ( let i = 0; i < mot.length; i++)
			if (i%2 != 0)
				motI += mot[i].toUpperCase();
			else
				motI += mot[i];
		let result = [motP,motI];
		return result;
	}

	capitalize("abcdef");

//Exercice 3 : Est-Ce Palindrome ?
	function palindrome(mot) {
		mot=mot.toLowerCase();
		if (mot.length%2 == 0)
			return false;
		else
			for(let i = 0; i < mot.length)
				if (mot[i] != mot[mot.length-i-1])
						return false;
		return true;
	}

	palindrome("madam")