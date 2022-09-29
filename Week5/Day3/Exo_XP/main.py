# Exercice 1 : Fonctions Intégrées
#2
class Info:
    def __init__(self):
        #1
        print(abs(4.5))
        print(int("7"))
        print(input('Appuyer sur Entrer'))

    def __doc__(self):
        return "Ce programme imprime des résultats"

info = Info()
print(info.__doc__())

# Exercice 2 : Devises
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __add__(self, other):
        return self.amount + other.amount


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1 + c2)
