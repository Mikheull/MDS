def calcFactor():
    _input = int(input('Entrez un nombre : '))
    arr = []

    factor = 1
    for i in range(1, _input+1):
        factor = factor * i
        arr.append(str(factor)) 

    print(', '.join(arr))

calcFactor()