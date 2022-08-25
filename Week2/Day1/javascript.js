//Exercice 1 : Votre Plat Préféré
	let repas="Orange";
	let day="dinner";
	console.log("I eat",repas,"at every",day);

//Exercice 2 Série
	//Première partie
	let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
	myWatchedSeriesLength = myWatchedSeries.length;
	myWatchedSeriesSentence = "Big bang theory est une série qui parle de 4 amis super intélligents";
	console.log("J'ai ",myWatchedSeriesLength," séries. L'une d'elle",myWatchedSeriesSentence);
	//Deuxième partie
	myWatchedSeries[2]="friends";
	myWatchedSeries.push("Flash");
	myWatchedSeries.unshift("stalk");
	myWatchedSeries.splice(1,1);
	console.log(myWatchedSeries[1][2]);
	console.log(myWatchedSeries);

// Exercice 3 : Le Convertisseur De Température
	let tempC=16;
	let tempF=((16/5)*9)+32;
	console.log(tempC,"°C is",tempF,"°F.");

// Exercice 4 : Devinez Les Réponses #1
   let c;
    let a = 34;
    let b = 21;
    console.log(a+b) //first expression
    // Prediction: résultat 55, parceque 34 + 21 font 55 et console.log affiche le résultat 
    // Actual : 55
    a = 2;
    console.log(a+b) //second expression
    // Prediction: résultat 55, parceque 2 + 21 font 23 et console.log affiche le résultat
    // Actual : 23
    // c : undefined
    console.log(3 + 4 + '5');//3 ieme expression
    //Prediction: 75 car 3 + 4 font 7 et '5' est une chaine de caractère (C'est une concaténation) 
    //Actual : 75

//Exercice 5 : Devinez Les Réponses #2
	typeof(15)
	// Prediction:typeof permet d'afficher le type d'un élement/number
	// Actual: number

	typeof(5.5)
	// Prediction:c'est un nombre
	// Actual: number

	typeof(NaN)
	// Prediction: ?
	// Actual: number


	typeof("hello")
	// Prediction: C'est une chaine de caractère
	// Actual: string

	typeof(true)
	// Prediction: c'est un booléen 
	// Actual: boolean

	typeof(1 != 2)
	// Prediction: c'est "vrai" donc true qui est du type booléen
	// Actual: boolean

	"hamburger" + "s"
	// Prediction: c'est une concaténation/hamburgers
	// Actual: hamburgers

	"hamburgers" - "s"
	// Prediction: ?
	// Actual: NaN

	"1" + "3"
	// Prediction: c'est une concaténation/13
	// Actual: 13

	"1" - "3"
	// Prediction: ?
	// Actual:  -2

	"johnny" + 5
	// Prediction: concaténation/johnny5 
	// Actual: johnny5

	"johnny" - 5
	// Prediction: Vu plus haut/NaN
	// Actual: NaN

	99 * "hello"
	// Prediction: Après avoir vu ça plus haut et recherché NaN (Not a Number "legal")/NaN
	// Actual: NaN

	1 != 1
	// Prediction: C'est un réponse booléenne que nous aurons. Opérateur de différence/False
	// Actual: False

	1 == "1"
	// Prediction: Opérateur d'égalité/true
	// Actual: true

	1 === "1"
	// Prediction: compare le type/false
	// Actual:false

//Exercice 6 : Devinez Les Réponses #3
	5 + "34"
	// Prediction:concacténation/534
	// Actual: 534

	5 - "4"
	// Prediction: concaténation/1
	// Actual: 1

	10 % 5
	// Prediction: modulo/0
	// Actual: 0

	5 % 10
	// Prediction: modulo/5
	// Actual: 5

	"Java" + "Script"
	// Prediction: concaténation/JavaScript
	// Actual: JavaScript

	" " + " "
	// Prediction: concaténation/"  "
	// Actual:"  "

	" " + 0
	// Prediction: concaténation/" 0"
	// Actual:" 0"

	true + true
	// Prediction: true = 1 donc c'est addition donne 2
	// Actual:2

	true + false
	// Prediction: addition/1
	// Actual: 1

	false + true
	// Prediction: addition/1
	// Actual: 1

	false - true
	// Prediction: addition/-1
	// Actual: -1

	!true
	// Prediction: différent de "vrai" c'est "faux". Soit c'est "faux" soit c'est "vrai" et si ce n'est pas "vrai" donc c'est "faux"
	// Actual: false

	3 - 4
	// Prediction: soustraction/-1
	// Actual: -1

	"Bob" - "bill"
	// Prediction: concaténation aboutissant à un nombre non reconnu/NaN
	// Actual: NaN
