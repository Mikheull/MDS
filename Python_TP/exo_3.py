def createDictionnaire():
    _input = int(input('Entrez un nombre : '))
    dictionary = {}

    for i in range(1, _input+1):
        dictionary[i] = i * i

    print(dictionary)

createDictionnaire()