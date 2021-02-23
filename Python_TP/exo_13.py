from random import randint

def getPair():
    i = -1
    while (i % 2) != 0 :
        i = randint(0,10)
    print(i)

getPair()