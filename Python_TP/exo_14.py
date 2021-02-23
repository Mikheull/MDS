from math import *

def chineseTest():
    heads = 35
    legs = 94

    rabbits = heads - (legs/4)
    chickens = heads - rabbits

    print("Il y a {0} lapins et {1} poulets dans la ferme").format(int(rabbits), int(chickens))

chineseTest()