#Défi 1
numbers = input("Entrez un nombre : ")
length = input("Entrez une longueur : ")
numbers1 = []
for x in range(1,int(length)+1) :
    numbers1.append(int(numbers)*x)
print(numbers1)

#Défi 2
mot = input("Entrez une chaine de caractère: ")
mot1 = ""
for x in mot :
    if x not in mot1 :
        mot1 += x
print(mot1)