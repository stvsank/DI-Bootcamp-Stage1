# Mode D'emploi : Ancienne Ferme MacDonald
class Farm:
    def __init__(self, name):
        self.name = name
        self.animal = {}
        print(f"{self.name}'s farm")

    def add_animal(self, name, nombre):
        self.animal.update({name : nombre})

    def get_info(self) :
        for x in self.animal :
            print(f"{x} : {self.animal[x]}")

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

