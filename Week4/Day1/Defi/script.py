#1
chaine = input("Entrez une chaine de 10 caractères : ")
if len(chaine) < 10 :
    print("Chaine pas assez longue")
elif len(chaine) >10 :
    print("Chaine trop longue")
else :
    print("Correct")
#2
print("Premier caractère :",chaine[0],"Dernier caractère :",chaine[-1])
#3
for x in range(0,11) :
    print(chaine[0:x])
#4
import random
chaine = list(chaine)
random.shuffle(chaine)
chaine1 = ""
for x in chaine :
    chaine1 += x
print(chaine1)


