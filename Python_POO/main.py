pizzas_instances = []
cmd_status = True

class Pizza:
    def __init__(self, name, price, veggie = False):
        self.name = name
        self.price = price
        self.veggie = veggie
        self.ingredients = []

    def addIngredients(self, inc):
        self.ingredients = self.ingredients + inc

    def display(self):
        type = "\033[0m| \033[92mVégétarienne" if self.is_veggie() else ""
        print(f"\033[0mPizza \033[91m{self.name} \033[0m| \033[91m{round(self.price, 2)}€ {type}")
        for inc in self.ingredients:
            print(f"\033[0m- {inc}")

    def is_veggie(self):
        return True if self.veggie else False


class CustomPizza(Pizza):
    def __init__(self, name, price, veggie = False):
        Pizza.__init__(self, name, price, veggie)

    def requestIngredients(self):
        _str = input(f'\033[0m\033[94mIndiquez les ingrédients à ajouter à votre pizza personnalisé (ENTER pour terminé) : \033[0m\033[1m')
        if _str == "":
            return ""
        else:
            self.ingredients = self.ingredients + [_str]
            self.price += 1.20
            return _str
        

# Default :
pizza_1 = Pizza("4 Fromages", 17.90, True)
pizza_1.addIngredients(["Sauce tomate", "Crême fraiche", 'Mozzarella','Emmental', 'Fromage de chèvre', 'Fourme d\'Ambert AOP'])

pizza_2 = Pizza("Pepperoni Lovers", 17.90)
pizza_2.addIngredients(["Sauce tomate", 'Mozzarella', 'Saucisse', 'Pepperoni'])

pizza_3 = Pizza("Queen", 15.90)
pizza_3.addIngredients(["Sauce tomate", 'Mozzarella', 'Jambon', 'Champignons frais'])

pizza_4 = Pizza("Montagnarde", 17.90)
pizza_4.addIngredients(["Crême fraiche", 'Mozzarella', 'Jambon cru', 'Fromage à raclette', 'Champignons frais'])

pizza_5 = Pizza("Chèvre Miel", 17.90, True)
pizza_5.addIngredients(["Crême fraiche", 'Mozzarella', 'Fromage de chèvre', 'Miel'])

pizza_6 = Pizza("Orientale", 15.90)
pizza_6.addIngredients(["Sauce tomate", 'Mozzarella', 'Mergez', 'Champignons frais'])

pizza_7 = Pizza("Margherita", 11.90, True)
pizza_7.addIngredients(["Sauce tomate", 'Mozzarella'])

pizza_8 = Pizza("Nordique", 17.90)
pizza_8.addIngredients(["Crême fraiche", 'Mozzarella', 'Saumon fumé de Norvège'])

pizza_9 = Pizza("Végétarienne", 15.90, True)
pizza_9.addIngredients(["Sauce tomate", 'Mozzarella', 'Champignons frais', 'Oignons rouges frais', 'Poivrons verts frais', 'Tomates fraîches', 'Olives noires'])

pizzas_instances = [pizza_1, pizza_2, pizza_3, pizza_4, pizza_5, pizza_6, pizza_7, pizza_8, pizza_9]

# Command handle
while cmd_status:
    print(f"\033[0m\033[4mBienvenue chez Pizza Python :\n")

    _cmd = int(input(f'\033[0mSouhaitez-vous voir le menu complet (\033[93m1\033[0m) voir une pizza (\033[93m2\033[0m) voir les pizzas végétarienne (\033[93m3\033[0m) créer une pizza personnalisée (\033[93m4\033[0m) ou bien quitter l\'interface (\033[93m5\033[0m) ? : \033[0m\033[1m'))
    
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
        print(f"\033[0mVoici les pizza(s) végétarienne :\n")
        for i in range(len(pizzas_instances)):
            if(pizzas_instances[i].is_veggie()) :
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