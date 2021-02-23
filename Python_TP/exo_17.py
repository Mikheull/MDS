def calcEntier():
    _str = str (raw_input('Entrez deux nombre entiers : '))
    list = _str.split (" ")

    result = int(list[0]) + int(list[1])
    print("{0} + {1} = {2}").format(list[0], list[1], result)

calcEntier()