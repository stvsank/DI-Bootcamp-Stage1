//Exercice 1 :
	let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
	//Suppression 
	fruits.shift();
	//trie
	fruits.sort();
	//ajout
	fruits.push("Kiwi");
	//suppression
	fruits.splice(0,1);
	//trier inverse
	fruits.reverse();

//Exercice 2 :
	let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
	console.log(moreFruits[1][1]);


