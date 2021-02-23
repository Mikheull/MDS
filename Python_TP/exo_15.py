def getLongSentence():
    _str = str (raw_input('Entrez deux chaines de carracteres separes par une virgule : '))
    list = _str.split (",")

    if len(list[0]) < len(list[1]) :
        print(list[1])
    elif len(list[0]) > len(list[1]) :
        print(list[0])
    else :
        print(list[0])
        print(list[1])

getLongSentence()