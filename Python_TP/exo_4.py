def twodimensional():
    _str = raw_input("Entrez deux nombres separes par une virgule : ")
    list = _str.split(",")

    arr = []
    for x in range(int(list[0])):
        row = []
        for y in range(int(list[1])):
            row.append(x * y)
        arr.append(row)

    print(arr)

twodimensional()