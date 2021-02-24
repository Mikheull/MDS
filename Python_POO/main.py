pizzas_instances = []
cmd_status = True

class Pizza:
    def __init__(self, name, price, vegan = False):
        self.name = name
        self.price = price
        self.vegan = vegan
        self.ingredients = []

    def addIngredients(self, inc):
        self.ingredients = self.ingredients + inc

    def display(self):
        print(f"\033[0mPizza \033[91m{self.name} \033[0m| \033[91m{self.price}€")
        for inc in self.ingredients:
            print(f"\033[0m- {inc}")

    def is_vegan(self):
        return True if self.vegan else False


class CustomPizza(Pizza):
    def __init__(self, name, price, vegan = False):
        Pizza.__init__(self, name, price, vegan)

    def requestIngredients(self):
        _str = input(f'\033[0m\033[94mIndiquez les ingrédients à ajouter à votre pizza personnalisé (ENTER pour terminé) : \033[0m\033[1m')
        if _str == "":
            return ""
        else:
            self.ingredients = self.ingredients + [_str]
            self.price += 1.2
            return _str
        

# Default :
pizza_1 = Pizza("4 fromages", 8.5, True)
pizza_1.addIngredients(['Brie','Emmental', 'Compté', 'Parmesan'])

pizza_2 = Pizza("4 saisons", 11)
pizza_2.addIngredients(['Oeuf','Emmental', 'Tomate', 'Jambon', 'Olives'])

pizza_3 = Pizza("Végétarienne", 7.8, True)
pizza_3.addIngredients(['Champignons', 'Tomate', 'Oignons', 'Poivrons'])

pizzas_instances = [pizza_1, pizza_2, pizza_3]


# Command handle
while cmd_status:
    _cmd = int(input(f'\033[0mSouhaitez-vous voir le menu complet (\033[93m1\033[0m) voir une pizza (\033[93m2\033[0m) voir les pizzas végan (\033[93m3\033[0m) créer une pizza personnalisée (\033[93m4\033[0m) ou bien quitter l\'interface (\033[93m5\033[0m) ? : \033[0m\033[1m'))
    
    if(_cmd == 1):
        print(f"\033[0m\033[4mVoici le menu complet :\n")
        for i in range(len(pizzas_instances)):
            pizzas_instances[i].display()
            print("\n")

    elif(_cmd == 2):
        _index = int(input('\033[0m\033[4mEntrez le numéro de la pizza : \033[0m\033[1m'))

        print(len(pizzas_instances), _index)
        if len(pizzas_instances) > _index:
            print(f"\033[0m\033[4mVoici la pizza {_index} :\n")
            pizzas_instances[_index].display()
            print("\n")
        else:
            print(f"\033[91m⛔ Cette pizza n'existe pas !") 
    
    elif(_cmd == 3):
        print(f"\033[0mVoici les pizza(s) végan :\n")
        for i in range(len(pizzas_instances)):
            if(pizzas_instances[i].is_vegan()) :
                pizzas_instances[i].display()
                print("\n")
    
    elif(_cmd == 4):
        writing = True
        pizza_custom = CustomPizza("Pizza personnalisé", 7)

        while writing:
            step = pizza_custom.requestIngredients()
            if(step == ''):
                writing = False

        pizza_custom.display()
        pizzas_instances.append(pizza_custom)
    
    elif(_cmd == 5):
        print(f"\033[91mÀ bientôt !\n")
        cmd_status = False
    
    else:
        print(f"\033[91m⛔ Une erreur est survenue !") 