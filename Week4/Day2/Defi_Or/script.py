age = input("Entrez votre age: ")
age = int(age[-1])
gateau = "       _"
# nombre de tiret avant les bougies
for x in range(int((9-age)/2)) :
    gateau += "_"
for x in range(10-(int((9-age)/2))) :
    if age != 0 :#nombre de bougie
        gateau += "i"
        age -= 1
    else :# nombre de tiret après les bougies
        gateau += "_"
gateau += """
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""
print(gateau)