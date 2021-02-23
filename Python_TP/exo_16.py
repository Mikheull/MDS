def concatenateSentence():
    _str = str (raw_input('Entrez deux chaines de carracteres separes par une virgule : '))
    list = _str.split (",")

    print("{0} {1}").format(list[0], list[1])

concatenateSentence()