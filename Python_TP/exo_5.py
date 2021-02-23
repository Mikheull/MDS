def reorder():
    _str = str (raw_input('Entrez une suite de mots separes par une virgule : '))
    list = _str.split (",")

    print(', '.join(sorted(list)))

reorder()