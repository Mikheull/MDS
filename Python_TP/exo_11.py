from bisect import bisect_left 
  
def BinarySearch(a, x): 
    i = bisect_left(a, x) 
    if i != len(a) and a[i] == x: 
        return i 
    else: 
        return -1
  
a  = [1, 2, 4, 4, 8]
x = int(8) 
res = BinarySearch(a, x) 
if res == -1: 
    print("{0} n'est pas dans le tableau").format(x)
else: 
    print("La premiere occurence de {0} est a l'index {1}").format(x, res)