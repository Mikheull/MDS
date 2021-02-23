import re 

def checkpass():
    pwd = str (raw_input('Entrez un mot de passe puissant : '))

    flag = 0
    print("Verification pour le mot de passe : {0}").format(pwd)

    while True:
        if (len(pwd)<6 and len(pwd)>12): 
            flag = -1
            break
        elif not re.search("[a-z]", pwd): 
            flag = -1
            break
        elif not re.search("[A-Z]", pwd): 
            flag = -1
            break
        elif not re.search("[0-9]", pwd): 
            flag = -1
            break
        elif not re.search("[_@$]", pwd): 
            flag = -1
            break
        elif re.search("\s", pwd): 
            flag = -1
            break
        else: 
            flag = 0
            print("Ce mot de passe est assez puissant !") 
            break
    
    if flag ==-1: 
        print("Ce mot de passe n est pas assez puissant !") 

checkpass()