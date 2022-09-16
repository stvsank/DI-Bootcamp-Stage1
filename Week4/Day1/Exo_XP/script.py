#Exercice 1 : Bonjour Le Monde
print("Hello world\nHello world\nHello world\nHello world")

#Exercice 2 : Quelques Maths
print((99**3)*8)

#Exercice 3 : Quelle Est La Sortie ?
#1
#5 < 3 #False
#3 == 3 #True
#3 == "3" #False
#"3" > 3 #False
#"Hello" == "hello" #False

#Exercice 4 : Votre Marque D'ordinateur
computer_brand = "Hewlett-Packard"
print("I have",computer_brand,"computer")

#Exercice 5 : Vos Informations
name = "SANK" #1
age = 25 #2
shoe_size = 45 #3
info = "Nom :" + " " + name +" " + "\nAge :" + " "+ str(age) +" "+"\nPointure :" + " "+ str(shoe_size) #info
print(info) #5

#Exercice 6 : A & B
a = 4
b = 5

if a > b :
    print("Hello world")

#Exercice 7 : Pair Ou Impair
nombre = int(input("Entrez un nombre"))
if nombre%2 == 0 :
    print("Le nombre est paire")
else :
    print("Le nombre est impaire")

#Exercice 8 : Comment T'appelles-Tu ?
nom = input("Entrez votre nom")
if nom.upper() == "SANKARA" :
    print("Nous sommes de la même famille")
else :
    print("Tu es néanmoins mon ami")

#Exercice 9 : Assez Grand Pour Faire Des Montagnes Russes
taille = int(input("Entrez votre taille en cm"))
if taille > 145 :
    print("Accès autorisé")
else :
    print("Vous devez grandir un peu matelot")


