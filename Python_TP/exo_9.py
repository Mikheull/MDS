def getIterate():
    _input = int(input('Entrez un nombre : '))
    arr = []

    for i in range(0, _input+1):
        if (i % 7 == 0):
            arr.append(str(i)) 

    print(', '.join(arr))

getIterate()