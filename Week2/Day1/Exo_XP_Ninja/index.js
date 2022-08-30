//Exercice 1 : Evaluation
    5 >= 1
    //prédiction : true
    //actual : true
    0 === 1
    //prédiction : false
    //actual : false
    4 <= 1
    //prédiction : false
    //actual : false
    1 != 1
    //prédiction : false
    //actual : false
    "A" > "B"
    //prédiction : true
    //actual : true
    "B" < "C"
    //prédiction : false / les minuscules on une valeu  
    //actual : true
    "a" > "A"
    //prédiction : false
    //actual : false
    "b" < "A"
    //prédiction : true
    //actual : true
    true === false
    //prédiction : true
    //actual : true
    true != true
    //prédiction : false
    //actual : false

//Exercice 2 : Demander Des Nombres
    //1
    let nombres = prompt("Entrez deux nombres séparés par une virgule");
    nombres = nombres.split(",");
    console.log("La somme de" , nombres[0] , " et " , nombres[1] , " est " , Number(nombres[0]) + Number(nombres[1]) );

//Exercice 3 : Trouver Nemo
    //1
    let chaine = prompt("Entrez une phrase contenant le mot Nemo");
    //2
    trouver = chaine.indexOf("Nemo");
    //3
    console.log("Chaine trouvée à la position" , trouver);
    //4
    if (trouver != -1) {
        console.log("Chaine trouvée à la position" , trouver);  
    } else {
        console.log("La chaine n'a pas été trouvé");  
    }

//Exercice 4 : Boum
    //saisie du numéro par l'utilisateur
    let num = Number(prompt("Entrez un numéro"));
    //2
    let chaine = "b";
    if (num < 2) {
        chaine = "boum";
        if ((num%2) == 0){//Si divisivle par 2
            console.log("divisible par 2" , chaine + "!");
        } else if ((num%5) == 0){//si divisible par 5
            console.log("divisible par 5" , chaine.toUpperCase() + "!");
        } else if ((num%5) && (num%2) == 0){//si divisible par 2 et 5
            console.log(chaine.toUpperCase() + "!");
        } else {
            console.log("Ni divisible par 2, ni par 5  ", chaine);
        }
    } else {//si sup. ou égal 2
        for (var i = 1; i <= num ; i++) {//num est égale au nombre de zéro de boom
            chaine=chaine+"o";
        }
        chaine=chaine+"u";
        chaine=chaine+"m";
        if ((num%2) == 0){
            console.log("divisible par 2" , chaine + "!");
        } else if ((num%5) == 0){
            console.log("divisible par 5" , chaine.toUpperCase() + "!");
        } else if ((num%5) && (num%2) == 0){
            console.log(chaine.toUpperCase() + "!");
        } else {
            console.log("Ni divisible par 2, ni par 5  ", chaine);
        }
    } 




