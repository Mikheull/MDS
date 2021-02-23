def generateSentences():
    subject = ["I", "You"]
    verb = ["Play", "Love"]
    obj = ["Hockey", "Football"]

    for x in subject:
      for y in verb:
          for z in obj:
            print ("{0} {1} {2}").format(x, y, z)

generateSentences()


