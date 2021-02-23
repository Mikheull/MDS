def findDivisible():
    arr = []

    print("Divisible par 7 : ")
    for i in range(2000, 3200):
        if (i % 7 == 0):
            arr.append(str(i)) 

    print(', '.join(arr))

findDivisible()
