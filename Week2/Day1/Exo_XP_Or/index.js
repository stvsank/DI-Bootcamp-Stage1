//Exercice 1 : Couleur Préférée
	let sentence = ["my","favorite","color","is","blue"];
	sentence1=sentence.join();
	console.log(sentence1);

//Exercice 2 : Mixup
	//1
	let str1 = "mix";
	let str2 = "pod";
	//2
	let temp;
	temp=str1.slice(0,2)+str2.slice(2);
	str1=str2.slice(0,2)+str1.slice(2);
	str2=temp.slice(0,2)+temp.slice(2);
	console.log(str1, " ",str2);
	//3
	let str3 = str1+str2;
	//4
	console.log(str3);

//Exercice 3 : Calculatrice
	//1//2
	let num1 = prompt("Entrez le premier numéro");
	num1 = Number(num1);
	//2//4
	let num2 = prompt("Entrez le deuxième numéro");
	num2 = Number(num2);
	//5
	alert(`La somme de ${num1} et de ${num2} est ${num1+num2}`);


