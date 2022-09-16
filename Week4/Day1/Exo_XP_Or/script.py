#Exercice 1 : Hello World-J'aime Python
print("Hello world\nHello world\nHello world\nHello world\nI love python\nI love python\nI love python\nI love python")

#Exercice 2 : Quelle Est La Saison ?
#1
mois = input("Entrez un mois (1 à 12) :")
a = int(mois)
#2
if a >= 3 and a <= 5 :
    print("Printemps")
elif a >= 6 and a <= 8 :
    print("Eté")
elif a >= 9 and a <= 11 :
    print("Automne")
elif a == 12 or a == 1 or a == 2 :
    print("Hivers")
else :
    print("Error")


