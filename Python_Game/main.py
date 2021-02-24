from random import randint

class Game:
    # Variables
    _user = {"name": "Anonyme", "health": 50, "heal_potions": 3, "strenght_potions": 1, "damage_done": 0, "damage_received": 0 }
    _bot = {"name": "SuperBot", "health": 50, "heal_potions": 0, "strenght_potions": 0, "damage_done": 0, "damage_received": 0 }
    _ingame = False

    def __init__(self):
        _str = str(input('Pour commencer donnez un nom à votre personnage : \033[1m\033[93m'))
        self._user['name'] = _str

        print(f"\033[0mBienvenue \033[1m\033[93m{_str}\033[0m, le combat va bientot commencer !\n\033[93m------------------------\n")
        self._ingame = True

        self.start()
        

    # Partie
    def start(self):
        _round = 0
        _player_round = 1

        while self._ingame :
            if(self._user.get('health') >= 0 and self._bot.get('health') >= 0):
                
                # Partie Joueur
                if(_player_round == 1):
                    _choice = int(input('\033[0mSouhaitez-vous attaquer (\033[93m1\033[0m) ou utiliser une potion de soin (\033[93m2\033[0m) ou utiliser une potion de force (\033[93m3\033[0m) ou bien avoir les stats (\033[93m4\033[0m) ? : '))
                    if(_choice == 1):
                        _attack = randint(5,10)
                        self._bot['health'] -= _attack
                        print(f"\033[91m[⚔] \033[0mVous attaquez \033[91m{self._bot.get('name')} \033[0met lui infligez \033[91m{_attack} \033[0mdégats ! \033[91m({self._bot.get('health')} ♡)\n")
                        
                        self._user['damage_done'] += _attack
                        self._bot['damage_received'] += _attack
                        _round += 1
                        _player_round = 0

                    elif(_choice == 2):
                        if(self._user.get('heal_potions') >= 1):
                            self._user['heal_potions'] -= 1
                            _heal = randint(15,50)
                            self._user['health'] += _heal
                            print(f"\033[91m[♡] \033[0mVous vous soignez de \033[91m{_heal}♡\033[0m, \033[91m({self._user.get('health')} ♡)\033[0m. Il ne vous reste plus que \033[91m{self._user.get('heal_potions')} \033[0mpotions de soin\n")
                            
                            _round += 1
                            _player_round = 0
                        else:
                            print(f"\033[91m⛔ Vous n'avez plus de potion de soin !") 

                    elif(_choice == 3):
                        if(self._user.get('strenght_potions') >= 1):
                            self._user['strenght_potions'] -= 1
                            _attack = randint(5,15)
                            self._bot['health'] -= _attack
                            print(f"\033[91m[⚔] \033[0mVous attaquez \033[91m{self._bot.get('name')} \033[0mavec une potion de force et lui infligez \033[91m{_attack} \033[0mdégats ! \033[91m({self._bot.get('health')} ♡)\033[0m. Il ne vous reste plus que \033[91m{self._user.get('strenght_potions')} \033[0mpotions de force\n")
                            
                            self._user['damage_done'] += _attack
                            self._bot['damage_received'] += _attack
                            _round += 1
                            _player_round = 0
                        else:
                            print(f"\033[91m⛔ Vous n'avez plus de potion de force !\n")

                    elif(_choice == 4):
                        print(f"Voici vos stats : \n\n {self._user.get('name')} : \n- Vie : {self._user.get('health')} ♡\n- Potion(s) de soin : {self._user.get('heal_potions')}\n- Potion(s) de force : {self._user.get('strenght_potions')}\n- Dégats infliges : {self._user.get('damage_done')}\n- Dégats reçu : {self._user.get('damage_received')}\n\n [BOT] {self._bot.get('name')} : \n- Vie : {self._bot.get('health')} ♡\n- Potion(s) de soin : {self._bot.get('heal_potions')}\n- Potion(s) de force : {self._bot.get('strenght_potions')}\n- Dégats infliges : {self._bot.get('damage_done')}\n- Dégats reçu : {self._bot.get('damage_received')}\n\n Partie : \n- Round : {_round}\n")

                    elif(_choice == 5):
                        self._user['health'] = 0
                        print(f"\033[91m⛴  Surrender !\n")
                        _player_round = 0
                        
                    else:
                        print('Erreur')

                # Partie Bot
                else:
                    _attack = randint(5,15)
                    self._user['health'] -= _attack
                    print(f"\033[91m[⚔] \033[94m{self._bot.get('name')} \033[0mvous attaque ! Il vous inflige \033[94m{_attack} \033[0mdégats !, \033[94m({self._user.get('health')} ♡)\n")

                    self._bot['damage_done'] += _attack
                    self._user['damage_received'] += _attack
                    _round += 1
                    _player_round = 1
                
            else:
                self._ingame = False

        else:
            if(self._bot.get('health') < 0):
                print(f"\033[91m⚑ \033[0m\033[1m{self._user.get('name')} remporte ce combat ! Ce fut une belle bataille\n")
            else:
                print(f"\033[91m⚑ \033[0m\033[1m{self._bot.get('name')} remporte ce combat ! C\'est un bot après tout\n")

            print(f"\033[0mStats de la partie : \n\n {self._user.get('name')} : \n- Vie : {self._user.get('health')} ♡\n- Potion(s) de soin : {self._user.get('heal_potions')}\n- Potion(s) de force : {self._user.get('strenght_potions')}\n- Dégats infliges : {self._user.get('damage_done')}\n- Dégats reçu : {self._user.get('damage_received')}\n\n [BOT] {self._bot.get('name')} : \n- Vie : {self._bot.get('health')} ♡\n- Potion(s) de soin : {self._bot.get('heal_potions')}\n- Potion(s) de force : {self._bot.get('strenght_potions')}\n- Dégats infliges : {self._bot.get('damage_done')}\n- Dégats reçu : {self._bot.get('damage_received')}\n\n Partie : \n- Round : {_round}")


Game()