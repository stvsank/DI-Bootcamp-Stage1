# Exercice 1 : Set
my_fav_numbers = [10,1]
my_fav_numbers = my_fav_numbers + [4,6]
my_fav_numbers.pop(-1)
friend_fav_numbers = [4425,176]
our_fav_numbers = my_fav_numbers + friend_fav_numbers
print(our_fav_numbers)

#Exercice 2 : Tuple
gamme = (4)
#gamme = gamme + (5,7)
# Non ce n'est pas possible#TypeError: unsupported operand type(s) for +: 'int' and 'tuple'
print(gamme)

#Exercice 3 : Liste
basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket.remove("Banana")#1
basket.remove("Blueberries")#2
basket.append("Kiwi")#3
basket.append("Apples")#4
nbr=0;
for x in basket :#5
    if "Apples" == x :
        nbr += 1
print(nbr)
basket = []#6
print(basket)#7

# Exercice 4 : Flotteurs
#les floats sont des nombres à virgule tandis que les entiers aps
nbr = 1
tableau = []
while nbr <5 :
    nbr += 0.5
    tableau.append(nbr)
print(tableau)

#xercice 5 : Boucle For
for i in range(1,21):
     if i%2 == 0 :
        print(i)

#Exercice 6 : Boucle While
while(1) :
    nom = input("Entrez votre nom ")
    if nom.lower() == "sankara" :
        break

#Exercice 7 : Fruits Préférés
fruits = input("Entrez vos fruits préférés séparés par un espace")
fruit = fruits.split(" ")
print(fruit)

fruit = input("Entrez le nom d'un fruit")
if fruit in fruits :
    print("Vous avez choisi l'un de vos fruits préférés ! Prendre plaisir!")
else :
    print("Vous avez choisi un nouveau fruit. J'espère que tu apprécies")

#Exercice 8 : Qui A Commandé Une Pizza ?
garniture = ""
serie = ""
prix = 0;
while garniture.lower() != "quitter" :
    garniture = input("Entrez une serie de garnitures de pizza")
    if garniture.lower() != "quitter" :
        print("Nous ajouterons cette garniture")
        serie += garniture + " "
    prix += 12.5

print(serie," Et le prix total est :",prix)

#Exercice 9 : Cinémax
age = input("Entrez l'âge de la 1 ère personne")
prix = 0
while age.lower() != "fin" :
    if int(age) < 3 :
        print("C'est gratuit pour toi")
    elif int(age) <= 12 :
        prix += 10
    else :
        prix += 15
    age = input("Entrez l'âge d'une autre personne ou 'fin' pour avoir le prix total :")
print(prix)

#Exercice 10 : Commandes Sandwich
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []

while 1 :
    fini = input("Ya t il un sandwich de fini? 'oui' ou 'non' ")
    if fini.lower() == "oui" and sandwich_orders != []:
       finished_sandwiches.append(sandwich_orders[0])
       sandwich_orders.remove(sandwich_orders[0])
        if len(sandwich_orders) != 0 :
            print("Plus que", len(sandwich_orders))
        else :
            print("Finish")
    elif sandwich_orders == [] :
        print("Listes des sandwich préparés :")
        for sandwich in finished_sandwiches :
            print(sandwich)
        break
    else :
        print("Ok j'attends encore un peu")

#Exercice 11
sandwich_orders = ["Pastrami sandwich", "Tuna sandwich", "Avocado sandwich","Pastrami sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []
while 1 :
    if "Pastrami sandwich" in sandwich_orders :
        sandwich_orders.remove("Pastrami sandwich")
    else :
        break
print("Plus de Pastrami sandwich")
while sandwich_orders != [] :
    fini = input("Ya t il un sandwich de fini? 'oui' ou 'non' ")
    if fini.lower() == "oui" and sandwich_orders != []:
        finished_sandwiches.append(sandwich_orders[0])
        sandwich_orders.remove(sandwich_orders[0])
        if len(sandwich_orders) != 0 :
            print("Plus que", len(sandwich_orders))
        else :
            print("Finish")
    else :
        print("Ok j'attends encore un peu")

print("Listes des sandwich préparés :",finished_sandwiches)

